# Deploying N8N Agent Studio to Vercel

This guide will walk you through deploying your N8N Agent Studio to Vercel using your GitHub repository.

## Prerequisites

- Your project is pushed to GitHub (already done at https://github.com/mrmoe28/N8N-Agent.git)
- A Vercel account (sign up at https://vercel.com if you don't have one)

## Deployment Steps

1. **Log in to Vercel**
   - Go to https://vercel.com and log in with your account

2. **Import Your GitHub Repository**
   - Click on "Add New..." > "Project"
   - Connect to GitHub if not already connected
   - Find and select your repository: `mrmoe28/N8N-Agent`

3. **Configure Project**
   - Vercel should automatically detect that this is a Next.js project
   - Framework Preset: Next.js
   - Root Directory: `./` (leave as default)
   - Build Command: `next build` (should be auto-detected)
   - Output Directory: `.next` (should be auto-detected)

4. **Environment Variables**
   - Add the following environment variables from your `.env` file:
     - `LLM_MODEL` (e.g., gpt-4o or claude-3-5-sonnet-20240620)
     - `EMBEDDING_MODEL` (e.g., text-embedding-3-small)
     - `OPENAI_API_KEY` (if using a GPT model)
     - `ANTHROPIC_API_KEY` (if using a Claude model)
     - `SUPABASE_URL`
     - `SUPABASE_SERVICE_KEY`

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your project

6. **Access Your Deployed Application**
   - Once deployment is complete, Vercel will provide you with a URL to access your application
   - The URL will look something like: `https://n8n-agent.vercel.app`

## Updating Your Deployment

Whenever you push changes to your GitHub repository, Vercel will automatically rebuild and redeploy your application.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for specific error messages
2. Ensure all required environment variables are set correctly
3. Verify that your project builds successfully locally with `npm run build`
4. Make sure your Node.js version is compatible (Vercel supports Node.js 18.x, 20.x, and newer)

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [N8N Documentation](https://docs.n8n.io/) 