# How to Add Content to Your Fumadocs Site

## Important: No "+ Page" Button!

Fumadocs is a **code-based documentation framework**, not a CMS like Notion or GitBook. You add content by creating files directly in your code editor.

## Quick Start: Adding a New Page

### Step 1: Start the Dev Server

```bash
npm run dev
```

This starts the site at [http://localhost:3000](http://localhost:3000) with **hot reload** - changes appear instantly!

### Step 2: Create a New MDX File

Open your code editor (VS Code, Cursor, etc.) and create a new file in `content/docs/`:

**Example**: Create `content/docs/my-new-page.mdx`

```mdx
---
title: My New Page
description: This is my awesome new page
---

## My First Heading

This is some content!

### Subheading

More content here...
```

### Step 3: Save and View

1. Save the file
2. Go to browser: `http://localhost:3000/docs/my-new-page`
3. Your page appears automatically! 🎉

## File Structure = URL Structure

The file path determines the URL:

| File Path | URL |
|-----------|-----|
| `content/docs/index.mdx` | `/docs` |
| `content/docs/getting-started.mdx` | `/docs/getting-started` |
| `content/docs/trading/basics.mdx` | `/docs/trading/basics` |
| `content/docs/trading/advanced/strategies.mdx` | `/docs/trading/advanced/strategies` |

## Creating Folders (Sections)

To organize content into sections:

```
content/docs/
├── index.mdx              → /docs
├── getting-started.mdx    → /docs/getting-started
├── trading/
│   ├── basics.mdx         → /docs/trading/basics
│   ├── advanced.mdx       → /docs/trading/advanced
│   └── strategies.mdx     → /docs/trading/strategies
└── tools/
    ├── calculators.mdx    → /docs/tools/calculators
    └── indicators.mdx     → /docs/tools/indicators
```

## MDX Frontmatter

Every page needs frontmatter at the top:

```mdx
---
title: Page Title
description: Brief description for SEO
---

Your content here...
```

## Quick Reference: MDX Syntax

### Headings
```markdown
## Main Heading
### Subheading
#### Smaller Heading
```

### Links
```markdown
[Link Text](/docs/page-name)
[External Link](https://example.com)
```

### Lists
```markdown
- Item 1
- Item 2
- Item 3

1. Numbered item
2. Another item
```

### Code Blocks
````markdown
```javascript
const hello = "world";
console.log(hello);
```
````

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Callouts (Special Fumadocs Component)
```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  This is an info callout!
</Callout>

<Callout type="warn" title="Warning">
  This is a warning!
</Callout>
```

Types: `info`, `warn`, `error`, `note`

### Cards
```mdx
<Cards>
  <Card title="My Card" href="/docs/link" description="Card description" />
  <Card title="Another Card" href="/docs/another" />
</Cards>
```

## Workflow for Adding Content

1. **Open your code editor** (VS Code, Cursor, etc.)
2. **Navigate to** `content/docs/`
3. **Create new `.mdx` file** with your content
4. **Save the file**
5. **View in browser** - it updates automatically!
6. **Repeat** for more pages

## Tips

✅ **Hot Reload**: Changes appear instantly when you save
✅ **Auto Navigation**: Sidebar updates automatically
✅ **No Build Needed**: Changes work in dev mode immediately
✅ **Organize with Folders**: Create folders for sections
✅ **Use Relative Paths**: Link between pages with `/docs/page-name`

## Example: Adding a New Trading Section

```bash
# Create folder
mkdir -p content/docs/advanced-topics

# Create file
touch content/docs/advanced-topics/scalping.mdx
```

Then edit `content/docs/advanced-topics/scalping.mdx`:

```mdx
---
title: Scalping Strategies
description: Quick in-and-out trading techniques
---

## What is Scalping?

Scalping is a trading strategy...

### Key Principles

1. Fast execution
2. Small profits
3. Many trades per day
```

## Common Questions

**Q: Where's the "+ page" button?**
A: There isn't one! You create pages by making `.mdx` files in your code editor.

**Q: How do I see my changes?**
A: Save the file and refresh your browser (or it auto-refreshes).

**Q: Can I edit pages in the browser?**
A: No, you edit the `.mdx` files in your code editor.

**Q: How do I delete a page?**
A: Delete the `.mdx` file from `content/docs/`.

**Q: How do I reorder pages?**
A: You can configure this in `meta.json` files (advanced) or by file naming.

## Recommended Editors

- **VS Code** (most popular)
- **Cursor** (AI-powered)
- **Sublime Text**
- **WebStorm**

## Next Steps

1. Start the dev server: `npm run dev`
2. Open `content/docs/` in your editor
3. Start creating pages!
4. When ready, deploy to Netlify

Happy documenting! 📝

