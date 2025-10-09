# Quick Start Cheatsheet 🚀

## Start Development Server
```bash
npm run dev
```
→ Open [http://localhost:3000](http://localhost:3000)

---

## Add a New Page

### 1. Create File
```bash
# In your code editor, create:
content/docs/your-page-name.mdx
```

### 2. Add Content
```mdx
---
title: Your Page Title
description: Your description
---

## Your First Heading

Your content here!
```

### 3. View It
→ Go to `http://localhost:3000/docs/your-page-name`

**That's it!** No build needed, changes appear instantly.

---

## File Structure = URLs

| File | URL |
|------|-----|
| `content/docs/hello.mdx` | `/docs/hello` |
| `content/docs/guide/intro.mdx` | `/docs/guide/intro` |

---

## Useful Components

### Callout Box
```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  Your info here!
</Callout>
```
Types: `info`, `warn`, `error`, `note`

### Card Grid
```mdx
<Cards>
  <Card 
    title="Card Title" 
    href="/docs/link" 
    description="Description" 
  />
</Cards>
```

### Code Block
````mdx
```javascript
const code = "here";
```
````

### Table
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

---

## Deploy to Netlify

### Quick Deploy
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Or via GitHub
1. Push to GitHub
2. Connect repo in Netlify
3. Deploy automatically!

---

## Your Content Location
```
content/docs/  ← All your pages go here!
```

---

## Need Help?

- **Add content guide**: Read `HOW_TO_ADD_CONTENT.md`
- **Deployment guide**: Read `DEPLOYMENT.md`
- **Full overview**: Read `PROJECT_SUMMARY.md`

**Remember**: No "+ page" button! Create `.mdx` files in your editor.

