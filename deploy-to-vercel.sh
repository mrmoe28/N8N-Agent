#!/bin/bash

# This script prepares the Agent Studio project for Vercel deployment

# Make sure we're in the right directory
cd "$(dirname "$0")"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install git first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

echo "Project is ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Push this project to the repository:"
echo "   git remote add origin https://github.com/yourusername/agent-studio.git"
echo "   git push -u origin main"
echo "3. Go to Vercel (https://vercel.com) and import your GitHub repository"
echo "4. Configure the project settings and deploy"
echo ""
echo "For more details, see the README.md file." 