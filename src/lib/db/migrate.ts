import { Client } from '@libsql/client';
import path from 'path';
import fs from 'fs';

const DATA_DIR = process.env.DATA_DIR || process.cwd();

export async function runMigrations(client: Client) {
  const migrationsFolder = path.join(DATA_DIR, 'drizzle');

  await client.execute(`
    CREATE TABLE IF NOT EXISTS ran_migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      run_on DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  function sanitizeSql(content: string) {
    return content
      .split(/\r?\n/)
      .filter(
        (l) => !l.trim().startsWith('-->') && !l.includes('statement-breakpoint'),
      )
      .join('\n');
  }

  if (!fs.existsSync(migrationsFolder)) {
    console.log('No migrations folder found at', migrationsFolder);
    return;
  }

  const files = fs.readdirSync(migrationsFolder)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  for (const file of files) {
    const filePath = path.join(migrationsFolder, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    content = sanitizeSql(content);

    const migrationName = file.split('_')[0] || file;

    const rs = await client.execute({
      sql: 'SELECT 1 FROM ran_migrations WHERE name = ?',
      args: [migrationName]
    });

    if (rs.rows.length > 0) {
      continue;
    }

    try {
      if (migrationName === '0001') {
        const messagesRs = await client.execute(
          'SELECT id, type, metadata, content, chatId, messageId FROM messages'
        );
        const messages = messagesRs.rows;

        await client.execute(`
            CREATE TABLE IF NOT EXISTS messages_with_sources (
                id INTEGER PRIMARY KEY,
                type TEXT NOT NULL,
                chatId TEXT NOT NULL,
                createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                messageId TEXT NOT NULL,
                content TEXT,
                sources TEXT DEFAULT '[]'
            );
        `);

        for (const msg of messages) {
          let metadata: any = msg.metadata;
          while (typeof metadata === 'string') {
            metadata = JSON.parse(metadata || '{}');
          }

          if (msg.type === 'user') {
            await client.execute({
              sql: `INSERT INTO messages_with_sources (type, chatId, createdAt, messageId, content, sources)
                      VALUES (?, ?, ?, ?, ?, ?)`,
              args: [
                'user',
                msg.chatId,
                metadata['createdAt'],
                msg.messageId,
                msg.content,
                '[]'
              ]
            });
          } else if (msg.type === 'assistant') {
            await client.execute({
              sql: `INSERT INTO messages_with_sources (type, chatId, createdAt, messageId, content, sources)
                      VALUES (?, ?, ?, ?, ?, ?)`,
              args: [
                'assistant',
                msg.chatId,
                metadata['createdAt'],
                msg.messageId,
                msg.content,
                '[]'
              ]
            });

            const sources: any = metadata['sources'] || '[]';
            if (sources && sources.length > 0) {
              await client.execute({
                sql: `INSERT INTO messages_with_sources (type, chatId, createdAt, messageId, content, sources)
                      VALUES (?, ?, ?, ?, ?, ?)`,
                args: [
                  'source',
                  msg.chatId,
                  metadata['createdAt'],
                  `${msg.messageId}-source`,
                  '',
                  JSON.stringify(sources)
                ]
              });
            }
          }
        }

        await client.execute('DROP TABLE messages;');
        await client.execute('ALTER TABLE messages_with_sources RENAME TO messages;');
      } else {
        // LibSQL execute supports multiple statements if configured? 
        // Actually execute() usually runs one statement. 
        // We might need to split by semicolon if the migration has multiple statements.
        // But for now, let's assume simple migrations or use executeMultiple if available.
        // @libsql/client has executeMultiple.
        await client.executeMultiple(content);
      }

      await client.execute({
        sql: 'INSERT OR IGNORE INTO ran_migrations (name) VALUES (?)',
        args: [migrationName]
      });
      console.log(`Applied migration: ${file}`);
    } catch (err) {
      console.error(`Failed to apply migration ${file}:`, err);
      throw err;
    }
  }
}
