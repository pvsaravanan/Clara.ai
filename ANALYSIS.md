# Clara.ai Project Analysis

## 📂 Directory Structure

The project follows a standard **Next.js 14+ (App Router)** structure with a clear separation of concerns.

### Root Directory
- **Configuration**: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`
- **Deployment**: `Dockerfile`, `docker-compose.yaml`, `entrypoint.sh`
- **Documentation**: `README.md`, `DEPLOYMENT.md`, `LICENSE`
- **Data**: `data/` (Persistent storage), `uploads/` (User uploads)

### Source Code (`src/`)

#### `src/app/` (Next.js App Router)
- **`page.tsx`**: Main entry point (Home page).
- **`layout.tsx`**: Root layout definition.
- **`api/`**: Backend API routes (e.g., chat, discover).
- **`discover/`**: The "Discover" page for trending content.
- **`library/`**: The "Library" page for search history.
- **`c/[chatId]/`**: Dynamic route for individual chat sessions.

#### `src/components/` (UI Components)
- **Core UI**: `Navbar.tsx`, `Sidebar.tsx`, `Chat.tsx`, `ChatWindow.tsx`.
- **Message Handling**: `MessageBox.tsx`, `MessageInput.tsx`, `MessageSources.tsx`.
- **Widgets**: `WeatherWidget.tsx`, `NewsArticleWidget.tsx`, `SearchImages.tsx`, `SearchVideos.tsx`.
- **Settings**: `Settings/` directory containing configuration forms.
- **Setup**: `Setup/` directory for the initial onboarding wizard.

#### `src/lib/` (Core Logic & Utilities)
- **`searxng.ts`**: Integration with the SearxNG search engine.
- **`db/`**: Database configuration and schema (Drizzle ORM + SQLite/LibSQL).
- **`models/`**: LLM provider integrations (OpenAI, Anthropic, Groq, Ollama, etc.).
- **`chains/`**: LangChain definitions for different search modes.
- **`prompts/`**: System prompts for the AI assistants.
- **`utils/`**: Helper functions.

## 🚀 Key Features

### 1. AI-Powered Search
- **Multi-Model Support**: Integrates with OpenAI, Anthropic, Google Gemini, Groq, and local LLMs via Ollama.
- **Focus Modes**: Specialized search modes defined in `src/lib/chains/`:
  - Web Search
  - Academic
  - YouTube
  - Reddit
  - Wolfram Alpha
  - Writing Assistant

### 2. Privacy-First Architecture
- **Self-Hosted**: Runs entirely on user hardware via Docker.
- **Local History**: Chat history is stored locally in SQLite (`data/`).
- **Anonymous Search**: Uses SearxNG to anonymize search queries.

### 3. Rich User Interface
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop.
- **Dark/Light Mode**: Supported via `next-themes`.
- **Interactive Widgets**: Weather, images, videos, and news cards embedded in chat.

### 4. "Discover" & "Library"
- **Discover Page**: Curated trending content (`src/app/discover/`).
- **Library**: Searchable history of past conversations (`src/app/library/`).

### 5. Robust Backend
- **Database**: Drizzle ORM with SQLite for efficient data management.
- **API**: Next.js API routes handle chat streaming and search orchestration.
- **Vector Search**: Uses cosine similarity for re-ranking search results.

## 🛠️ Tech Stack
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **Database**: SQLite / LibSQL, Drizzle ORM
- **AI/LLM**: LangChain, Ollama
- **Search Engine**: SearxNG
- **Deployment**: Docker, Docker Compose
