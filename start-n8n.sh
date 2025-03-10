#!/bin/bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js v18.17.0
nvm use 18.17.0

# Start Agent Studio
n8n start

# If n8n is not found, try installing it
if [ $? -ne 0 ]; then
  echo "n8n not found. Installing n8n..."
  npm install -g n8n@latest
  n8n start
fi 