import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import path from 'path';
import { runMigrations } from './migrate';

const DATA_DIR = process.env.DATA_DIR || process.cwd();

let dbInstance: LibSQLDatabase<typeof schema> | undefined;

const getDb = () => {
  if (!dbInstance) {
    const url = 'file:' + path.join(DATA_DIR, './data/db.sqlite');
    const client = createClient({ url });
    runMigrations(client).catch((err) => {
      console.error('Failed to run migrations:', err);
    });
    dbInstance = drizzle(client, {
      schema: schema,
    });
  }
  return dbInstance;
};

// Proxy to allow lazy initialization
const db = new Proxy({} as LibSQLDatabase<typeof schema>, {
  get: (_target, prop) => {
    const instance = getDb();
    return (instance as any)[prop];
  },
});

export default db;
