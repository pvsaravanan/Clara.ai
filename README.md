<div align="center">

# 🤖 Clara.ai

**Your Intelligent, Privacy-First AI Answer Engine**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Version](https://img.shields.io/badge/version-1.11.2-green.svg)](https://github.com/pvsaravanan/Clara.ai)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)

[Features](#-features) • [Quick Start](#-quick-start) • [Installation](#-installation) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Clara.ai** is your intelligent, privacy-first answer engine designed to run entirely on your hardware. It seamlessly bridges the gap between the vast knowledge of the internet and your personal documents, leveraging both local and cloud-based Large Language Models (LLMs) to deliver precise, well-cited answers.

Imagine having a customizable research assistant that respects your privacy, capable of understanding both web content and your uploaded files—all while running on your own machine.

### 🎯 Why Clara.ai?

- **🔒 Privacy-First**: Your data never leaves your machine. Completely tracking-free and ad-free
- **🌐 Comprehensive Search**: Aggregates results from multiple sources using SearxNG
- **📚 Document Intelligence**: Upload and analyze PDFs, DOCX, and TXT files with AI
- **🔌 Model Agnostic**: Works with local (Ollama) and cloud (OpenAI, Anthropic, Google, Groq) models
- **🎨 Specialized Modes**: Optimized search for web, academic, YouTube, Reddit, and more
- **⚡ Self-Hosted**: Full control over your AI assistant

---

## 🖼️ Screenshots

<div align="center">

| Main Interface | Search Results |
|:---:|:---:|
| ![Main Interface](./public/screenshots/p1_small.png) | ![Search Results](./public/screenshots/p2_small.png) |

</div>

---

## ✨ Features

### 🔍 **Intelligent Search Capabilities**

- **Multi-Source Aggregation**: Powered by SearxNG to search across multiple engines while maintaining anonymity
- **Specialized Focus Modes**:
  - 🌐 **Web Search**: General inquiries and browsing
  - 🎓 **Academic**: Scholarly articles and research papers
  - ✍️ **Writing Assistant**: Drafting and creative composition
  - 🧮 **Wolfram Alpha**: Computational intelligence and mathematical data
  - 🎥 **YouTube**: Video content discovery and summarization
  - 💬 **Reddit**: Community discussions and forums

### 🤖 **Flexible AI Integration**

- **Local Models** (via Ollama):
  - Llama 3
  - Mistral
  - Gemma
  - And more...
  
- **Cloud Providers**:
  - OpenAI (GPT-4o, GPT-4 Turbo)
  - Anthropic (Claude 3.5 Sonnet)
  - Google (Gemini Pro)
  - Groq (Lightning-fast inference)

### 📄 **Document Processing**

- Upload and analyze multiple document formats (PDF, DOCX, TXT)
- Intelligent document parsing and summarization
- Question-answering based on your uploaded content
- Vector embeddings for semantic search

### 🎨 **User Experience**

- **Modern UI**: Built with Next.js 15 and Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Works perfectly on desktop and mobile
- **Real-time Streaming**: See responses as they're generated
- **Chat History**: Searchable library of past conversations
- **Interactive Widgets**: Weather, images, videos, and news cards

### ⚙️ **Performance Modes**

- **Speed Mode**: Quick responses for rapid queries
- **Balanced Mode**: In-depth research with comprehensive results

---

## 🚀 Quick Start

Get Clara.ai running in minutes with Docker!

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- At least 4GB of available RAM
- Modern web browser (Chrome, Firefox, Safari, Edge)

### One-Command Setup

```bash
# Clone the repository
git clone https://github.com/pvsaravanan/Clara.ai.git
cd Clara.ai

# Build and start
docker-compose up -d --build

# Access at http://localhost:3000
```

That's it! Clara.ai will be running at **http://localhost:3000**

---

## 📥 Installation

### Option 1: Docker (Recommended)

**Step 1: Clone the Repository**
```bash
git clone https://github.com/pvsaravanan/Clara.ai.git
cd Clara.ai
```

**Step 2: Launch with Docker Compose**
```bash
docker-compose up -d --build
```
*Note: Initial build may take 5-10 minutes depending on your internet connection.*

**Step 3: Open Your Browser**
Navigate to **http://localhost:3000**

### Option 2: Manual Setup

**Requirements:**
- Node.js 18+ and Yarn
- SQLite 3
- SearxNG instance (or use Docker Compose for SearxNG)

**Step 1: Install Dependencies**
```bash
git clone https://github.com/pvsaravanan/Clara.ai.git
cd Clara.ai
yarn install
```

**Step 2: Configure Environment**
```bash
# Set up your database and API keys as needed
cp .env.example .env
# Edit .env with your configuration
```

**Step 3: Run Development Server**
```bash
yarn dev
```

Access at **http://localhost:3000**

---

## ⚙️ Configuration

### Initial Setup

On your first visit, access the **Settings** menu (⚙️ icon) to configure:

1. **LLM Provider**: Choose your AI model provider
   - For local: Install [Ollama](https://ollama.ai/) and select Ollama
   - For cloud: Add API keys for OpenAI, Anthropic, or others

2. **Embedding Model**: Select a model for document processing
   - Cloud: `text-embedding-3-small` (OpenAI)
   - Local: `nomic-embed-text` (Ollama)

3. **Search Settings**: Configure SearxNG instance (default works out of the box)

### Environment Variables

Key configuration options in `.env`:

```env
# Database
DATABASE_URL=file:./data/clara.db

# SearxNG
SEARXNG_API_URL=http://searxng:8080

# API Keys (optional, set in UI)
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```

---

## 🌐 Deployment

### Deploy to Server

1. **Transfer Files**: Copy the project to your server
2. **Install Docker**: Ensure Docker and Docker Compose are installed
3. **Start Services**:
   ```bash
   docker-compose up -d --build
   ```
4. **Access**: Navigate to `http://<your-server-ip>:3000`

### Custom Port

Edit `docker-compose.yaml` to change the port:
```yaml
ports:
  - "8080:3000"  # Access at port 8080 instead
```

For more deployment options, see [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [Headless UI](https://headlessui.com/)
- **Database**: [SQLite](https://www.sqlite.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **AI/LLM**: [LangChain](https://www.langchain.com/), [Ollama](https://ollama.ai/)
- **Search**: [SearxNG](https://github.com/searxng/searxng)
- **Deployment**: [Docker](https://www.docker.com/), Docker Compose
- **UI Components**: [Lucide Icons](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)

---

## 📚 Documentation

- [ANALYSIS.md](./ANALYSIS.md) - Project architecture and structure
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment instructions
- [FEATURE_SUGGESTIONS.md](./FEATURE_SUGGESTIONS.md) - Upcoming features and roadmap

---

## 🗺️ Roadmap

We're continuously evolving Clara.ai. Upcoming features include:

- [ ] **Voice Mode 2.0**: Bidirectional voice interaction for hands-free operation
- [ ] **Creative Studio**: AI image generation directly in chat
- [ ] **Deep Research Agent**: Multi-step autonomous research for complex queries
- [ ] **Cloud Sync**: Optional encrypted synchronization across devices
- [ ] **Plugin System**: Extensible architecture for custom capabilities
- [ ] **Code Interpreter**: Execute and test code snippets
- [ ] **Mobile Apps**: Native iOS and Android applications

See [FEATURE_SUGGESTIONS.md](./FEATURE_SUGGESTIONS.md) for detailed feature proposals.

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

### Reporting Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/pvsaravanan/Clara.ai/issues) with:
- Clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

---

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Edit docker-compose.yaml and change the port
ports:
  - "3001:3000"
```

**Docker build fails:**
```bash
# Clear Docker cache and rebuild
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

**SearxNG not responding:**
```bash
# Restart the SearxNG container
docker-compose restart searxng
```

**Database locked error:**
```bash
# Stop all services and restart
docker-compose down
docker-compose up -d
```

For more help, check existing [issues](https://github.com/pvsaravanan/Clara.ai/issues) or open a new one.

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Original Author**: [ItzCrazyKns](https://github.com/ItzCrazyKns)
- Built with [Next.js](https://nextjs.org/), [LangChain](https://www.langchain.com/), and [Docker](https://www.docker.com/)
- Powered by [SearxNG](https://github.com/searxng/searxng) for privacy-respecting search
- UI inspired by modern AI assistants with a focus on user experience

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/pvsaravanan/Clara.ai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/pvsaravanan/Clara.ai/discussions)

---

<div align="center">

**⭐ If you find Clara.ai helpful, please consider giving it a star on GitHub! ⭐**

Made with ❤️ by the open-source community

</div>
