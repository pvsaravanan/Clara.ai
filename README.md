# Clara.ai 

**Clara.ai** is your intelligent, privacy-first answer engine, designed to run locally on your hardware. It bridges the gap between the vast knowledge of the internet and your personal documents, leveraging the power of both local and cloud-based LLMs to deliver precise, well-cited answers.

Imagine a customizable research assistant that respects your privacy, capable of understanding both the web and your uploaded files.

##  Core Capabilities

- **Comprehensive Web Exploration**: Utilizing SearxNG, Clara.ai aggregates results from multiple sources to provide the most relevant answers, all while maintaining complete anonymity.
- **Intelligent Document Parsing**: Upload your PDFs, DOCX, or TXT files and let Clara.ai analyze, summarize, and answer specific questions based on their content with exceptional accuracy.
- **Model Agnostic**: Seamlessly integrate with your preferred AI models:
  - **Local**: Run completely offline with Ollama (Llama 3, Mistral, Gemma).
  - **Cloud**: Connect to top-tier providers like OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Groq, and Google Gemini.
- **Tailored Focus Modes**: Optimize your search experience for specific tasks:
  - **Web Search**: For general inquiries and browsing.
  - **Academic**: Dedicated search for scholarly articles and papers.
  - **Writing Assistant**: Tools to aid in drafting and creative composition.
  - **Wolfram Alpha**: Access computational intelligence and mathematical data.
  - **YouTube**: Locate and summarize video content efficiently.
  - **Reddit**: Dive into community discussions and forums.
- **Adaptive Performance**: Switch between "Speed" for rapid responses or "Balanced" for in-depth research.
- **Privacy by Design**: Your data never leaves your machine. Enjoy a tracking-free, ad-free experience.

## Quick Start

Clara.ai is engineered for effortless deployment using Docker.

### Prerequisites
- Ensure [Docker Desktop](https://www.docker.com/products/docker-desktop/) is installed and running.

### Installation Steps

1.  **Get the Code**
    Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/clara-ai.git
    cd clara-ai
    ```

2.  **Launch the Application**
    Build and start the services with a single command:
    ```bash
    docker-compose up -d --build
    ```
    *Note: The initial build process may take a few moments.*

3.  **Start Exploring**
    Open your web browser and navigate to:
     **http://localhost:3000**

### Initial Setup
Upon your first login, access the **Settings** menu to customize:
- **LLM Provider**: Select from OpenAI, Anthropic, Groq, or Ollama.
- **Embedding Model**: Choose a model for document processing (e.g., `text-embedding-3-small` or a local alternative).

##  Deployment Instructions

To host Clara.ai on a server or secondary machine:

1.  **Transfer**: Copy the entire project directory to the destination server.
2.  **Prepare**: Verify that Docker and Docker Compose are installed.
3.  **Deploy**: Run `docker-compose up -d --build` within the project folder.
4.  **Access**: Connect via `http://<server-ip>:3000`.

##  Future Roadmap

We are continuously evolving Clara.ai. Upcoming features include:

- [ ] **Voice Mode 2.0**: Seamless bidirectional voice interaction.
- [ ] **Creative Studio**: Generate images directly within the chat interface.
- [ ] **Deep Research Agent**: Autonomous, multi-step investigation for complex queries.
- [ ] **Secure Cloud Sync**: Optional, encrypted synchronization across your devices.
- [ ] **Extensible Plugin System**: Add capabilities like code execution, travel planning, and more.

## Get Involved

Clara.ai is an open-source initiative, and we value your contributions! Whether it's reporting a bug or suggesting a new feature, please feel free to open an issue.

---
*Powered by Next.js, LangChain, and Docker.*
