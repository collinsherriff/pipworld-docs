# Deploying to Netlify

This Fumadocs project is configured for easy deployment to Netlify.

## Quick Deploy

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy from the project directory:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Git Integration

1. Push your project to GitHub, GitLab, or Bitbucket:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com/) and click "Add new site"

3. Choose "Import an existing project"

4. Connect your Git provider and select your repository

5. Netlify will auto-detect the Next.js configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

6. Click "Deploy site"

## Environment Variables

If you need environment variables, add them in:
- Netlify Dashboard → Site settings → Environment variables

## Custom Domain

To add a custom domain:
1. Go to your site in Netlify Dashboard
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## Build Settings

The `netlify.toml` file in the root directory contains:
- Build command
- Publish directory
- Next.js plugin configuration

## Troubleshooting

If you encounter build issues:

1. **Node.js version**: Ensure Node.js 20+ is used
   - Add to `netlify.toml`:
     ```toml
     [build.environment]
       NODE_VERSION = "20"
     ```

2. **Clear cache**: In Netlify Dashboard → Deploys → Trigger deploy → Clear cache and deploy site

3. **Check build logs**: Review the deploy logs in Netlify Dashboard for specific errors

## Local Development

Run the development server locally:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your documentation.

## Adding Content

Create MDX files in the `content/docs` directory:

```mdx
---
title: Your Page Title
description: Page description
---

## Your Content

Write your documentation here!
```

The file structure in `content/docs` determines the URL structure and navigation.

