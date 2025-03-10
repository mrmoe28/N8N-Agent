# Agent Studio Homepage

This is a modern, minimalistic homepage for Agent Studio. It provides information about the agent's features and how to use it.

## Viewing the Homepage

There are two ways to view the homepage:

### 1. Open the HTML file directly

You can simply open the `index.html` file in your web browser:

```bash
open index.html
```

### 2. Use the Node.js server

For a more realistic experience, you can use the included Node.js server:

```bash
# Make sure the script is executable
chmod +x start-homepage.sh

# Start the server
./start-homepage.sh
```

Then open your browser and navigate to:
```
http://localhost:3000
```

## Running Agent Studio

To run Agent Studio:

```bash
# Make sure the script is executable
chmod +x start-n8n.sh

# Start n8n
./start-n8n.sh
```

Then open your browser and navigate to:
```
http://localhost:5678
```

## Troubleshooting

If you encounter issues with Node.js versions, make sure you have nvm installed and Node.js v18.17.0 available:

```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install Node.js v18.17.0
nvm install 18.17.0

# Use Node.js v18.17.0
nvm use 18.17.0
```

Then try running the scripts again. 