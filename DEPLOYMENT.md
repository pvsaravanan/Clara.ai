# How to Deploy Clara.ai on Another Machine

Follow these simple steps to run Clara.ai on your friend's laptop or any other machine.

## Prerequisites

Ensure the target machine has **Docker** and **Docker Compose** installed.
- [Install Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac/Linux)

## Steps

1. **Transfer the Project**
   Copy the entire `clara.ai` project folder to the new machine. You can use a USB drive, file sharing, or zip the folder and send it.

2. **Open Terminal**
   Open a terminal (Command Prompt, PowerShell, or Terminal) and navigate to the project folder:
   ```bash
   cd path/to/clara.ai
   ```

3. **Run Clara.ai**
   Run the following command to build and start the application:
   ```bash
   docker-compose up -d --build
   ```
   *This may take a few minutes the first time as it builds the Docker image.*

4. **Access the App**
   Once the command completes, open a web browser and go to:
   **http://localhost:3000**

## Troubleshooting

- **Port Conflicts**: If port 3000 is already in use, you may need to edit `docker-compose.yaml` and change `'3000:3000'` to something else like `'3001:3000'`.
- **Docker Not Running**: Make sure Docker Desktop is running before executing the command.
