# *Clara.ai*

***Privacy-First AI Answer Engine***

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Version](https://img.shields.io/badge/version-1.11.2-green.svg)](https://github.com/pvsaravanan/Clara.ai)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)

[Features](#features) • [Quick Start](#quick-start) • [Installation](#installation) • [Documentation](#documentation) • [Contributing](#contributing)



*Clara.ai is an intelligent, privacy-focused answer system designed to run entirely on your own hardware. It combines web search, document analysis, and local or cloud-based large language models (LLMs) to deliver accurate, well-cited responses—without compromising user data.*


| Main Interface | Search Results |
|:---:|:---:|
| ![Main Interface](./public/screenshots/p1_small.png) | ![Search Results](./public/screenshots/p2_small.png) |



## Table of Contents
- [Overview](#Overview)
- [Features](#Features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Technology Stack](#technology-stack)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

*Clara.ai serves as a secure and customizable research assistant. It unifies knowledge from anonymous web search engines and user-provided documents, enabling powerful question answering and analysis while ensuring data remains local.*

### Key Principles
- *Privacy First: No tracking, ads, analytics, or external data collection.*
- *Local First: Runs on your machine; optional cloud integrations.*
- *Model Agnostic: Compatible with local LLMs (via Ollama) and all major cloud providers.*
- *Search Integrated: Combines multiple sources through SearxNG for comprehensive and anonymized search results.*


---

## Features
### Intelligent Search

- *Multi-source aggregation using SearxNG*
- *Domain-specific search modes:*
  - *General web*
  - *Academic literature*
  - *Writing assistance*
  - *Computational queries via Wolfram Alpha*
  - *YouTube content extraction and summarization*
  - *Reddit discussions and forums*

### AI Model Integration

- *Local Models (Ollama): Llama 3, Mistral, Gemma, and others*
- *Cloud Providers: OpenAI, Anthropic, Google, Groq*

### Document Processing

- *Supports PDF, DOCX, and TXT*
- *Document ingestion, parsing, summarization*
- *Retrieval-based question answering*
- *Vector embeddings for semantic search*

### User Experience

- *Built with Next.js 15 and Tailwind CSS*
- *Light and dark themes*
- *Real-time streaming responses*
- *Persistent, searchable chat history*
- *Responsive design for desktop and mobile*

### Performance Modes

- *Speed Mode: Fast, lightweight responses*
- *Balanced Mode: More thorough research and detailed results*

---

## Quick Start

*Run Clara.ai using Docker in minutes.*

### Requirements

- *Docker Desktop*
- *Minimum 4 GB RAM*
- *Modern web browser*

### Installation (One-Command)
```
git clone https://github.com/pvsaravanan/Clara.ai.git
cd Clara.ai
docker-compose up -d --build
```
*Access the application at:*
http://localhost:3000


## Installation
### Option 1: Docker (Recommended)
*Clone the repository:*
```
git clone https://github.com/pvsaravanan/Clara.ai.git
cd Clara.ai
```

*Launch services:*
```
docker-compose up -d --build
```
*Open in browser:*
```
http://localhost:3000
```
### Option 2: Manual Setup

*Requirements:*
- *Node.js 18+*
- *Yarn*
- *SQLite 3*
- *SearxNG instance*

*Install dependencies:*
```
yarn install
```

*Create environment configuration:*
```
cp .env.example .env
```
*Edit .env with your settings.*

*Start development server:*
```
yarn dev
```
---

## Configuration

*On first launch, access the Settings panel to configure:*

1. **LLM Provider**

    - *Local: Ollama*

    - *Cloud: OpenAI, Anthropic, Google, Groq*

2. **Embedding Model**

    - *Cloud: text-embedding-3-small*

    - *Local: nomic-embed-text*

3. **Search Engine**

    - *SearxNG instance (provided by Docker Compose)*

### Environment Variables
```
DATABASE_URL=file:./data/clara.db
SEARXNG_API_URL=http://searxng:8080

# Optional API keys
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
```


## Deployment
### Server Deployment

1. *Transfer project files to your server.*

2. *Install Docker and Docker Compose.*

3. *Start services:*
```
docker-compose up -d --build
```

 4. *Access via:*
```
http://<server-ip>:3000
```
### Custom Port

*Edit docker-compose.yaml:*
```
ports:
  - "8080:3000"
```

---

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [Headless UI](https://headlessui.com/)
- **Database**: [SQLite](https://www.sqlite.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **AI/LLM**: [LangChain](https://www.langchain.com/), [Ollama](https://ollama.ai/)
- **Search**: [SearxNG](https://github.com/searxng/searxng)
- **Deployment**: [Docker](https://www.docker.com/), Docker Compose
- **UI Components**: [Lucide Icons](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)

---

## Documentation
- [ANALYSIS.md](./ANALYSIS.md) - *Project architecture and structure*
- [DEPLOYMENT.md](./DEPLOYMENT.md) - *Detailed deployment instructions*
- [FEATURE_SUGGESTIONS.md](./FEATURE_SUGGESTIONS.md) - *Upcoming features and roadmap*

---

## Roadmap

*We're continuously evolving Clara.ai. Upcoming features include:*

-  **Voice Mode 2.0**: *Bidirectional voice interaction for hands-free operation*
-  **Creative Studio**: *AI image generation directly in chat*
-  **Deep Research Agent**: *Multi-step autonomous research for complex queries*
-  **Cloud Sync**: *Optional encrypted synchronization across devices*
-  **Plugin System**: *Extensible architecture for custom capabilities*
-  **Code Interpreter**: *Execute and test code snippets*
-  **Mobile Apps**: *Native iOS and Android applications*

*See [FEATURE_SUGGESTIONS.md](./FEATURE_SUGGESTIONS.md) for detailed feature proposals.*

---

## Contributing

*We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.*

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- *Follow the existing code style and conventions*
- *Write clear commit messages*
- *Add tests for new features*
- *Update documentation as needed*

### Reporting Issues

*Found a bug or have a suggestion? Please [open an issue](https://github.com/pvsaravanan/Clara.ai/issues) with:*
- *Clear description of the problem or suggestion*
- *Steps to reproduce (for bugs)*
- *Expected vs actual behavior*
- *Screenshots if applicable*

---

##  Troubleshooting

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

*For more help, check existing [issues](https://github.com/pvsaravanan/Clara.ai/issues) or open a new one.*

---

## License

*This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.*

---

*⭐ If you find Clara.ai helpful, please consider giving it a star on GitHub! ⭐*

*Made with ❤️ by the pvsaravanan and musfiramahjabeen*
