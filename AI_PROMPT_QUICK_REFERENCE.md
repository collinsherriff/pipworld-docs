# Quick AI Prompt - Generate Complete Documentation

Copy this prompt and fill in your project details to have an AI generate your entire documentation book.

---

## 🚀 Master Prompt Template

```
I need you to create a complete documentation site for my project using Fumadocs MDX format.

PROJECT: PipWorld Market Mavericks
DESCRIPTION: A virtual trading platform where users back influencer-led agents, open collectible packs, compete on leaderboards, and earn XP through various tasks.

TARGET AUDIENCE: New players and experienced traders looking to master the platform

---

STRUCTURE NEEDED:

content/docs/
├── index.mdx                           # Homepage/Welcome
├── getting-started.mdx                 # Quick start guide
│
├── basics/                             # Understanding the Platform
│   ├── what-is-pipworld.mdx
│   ├── core-concepts.mdx
│   └── how-to-play.mdx
│
├── agents/                             # Agent System
│   ├── introduction.mdx
│   ├── agent-types.mdx
│   ├── selection-guide.mdx
│   ├── performance-tracking.mdx
│   └── portfolio-management.mdx
│
├── packs/                              # Pack System
│   ├── overview.mdx
│   ├── pack-types.mdx
│   ├── rarity-system.mdx
│   └── opening-strategy.mdx
│
├── leaderboards/                       # Competition
│   ├── how-it-works.mdx
│   ├── xp-leaderboard.mdx
│   ├── trading-runs.mdx
│   └── strategies.mdx
│
├── progression/                        # XP & Leveling
│   ├── xp-system.mdx
│   ├── daily-tasks.mdx
│   ├── referrals.mdx
│   ├── badges.mdx
│   └── rewards.mdx
│
├── gameplay/                           # Core Gameplay
│   ├── getting-started-guide.mdx
│   ├── first-trade.mdx
│   ├── opening-first-pack.mdx
│   └── joining-competitions.mdx
│
├── advanced/                           # Advanced Strategies
│   ├── portfolio-optimization.mdx
│   ├── timing-strategies.mdx
│   ├── competitive-play.mdx
│   └── maximizing-xp.mdx
│
└── reference/                          # Reference Materials
    ├── glossary.mdx
    ├── faq.mdx
    └── tips-tricks.mdx

---

FORMAT REQUIREMENTS:

1. FRONTMATTER (Required for every page):
```mdx
---
title: Page Title Here
description: Brief 1-2 sentence description
---
```

2. COMPONENTS TO USE:

**Callouts** (for important info):
```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  Important information here
</Callout>

<Callout type="warn" title="Warning">
  Caution or warning here
</Callout>
```

**Cards** (for navigation):
```mdx
<Cards>
  <Card title="🚀 Title" href="/docs/path" description="Description" />
  <Card title="📚 Title" href="/docs/path" description="Description" />
</Cards>
```

**Tables** (for comparisons):
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |
```

3. INTERNAL LINKS:
Use format: [Link Text](/docs/folder/page-name)
Example: [Agent Basics](/docs/agents/introduction)

4. PAGE STRUCTURE:
- Start with ## for main heading
- Use ### for subheadings
- Include navigation links at the end pointing to related pages
- Add practical examples where relevant
- Use Callouts for tips, warnings, and important info

---

TONE & STYLE:
- Friendly but professional
- Clear and concise
- Beginner-friendly but comprehensive
- Use emojis sparingly for visual interest
- Include examples and practical scenarios

---

OUTPUT FORMAT:
Provide each page as a separate code block with the file path as the title:

```mdx title="content/docs/agents/introduction.mdx"
---
title: Introduction to Agents
description: Learn what Market Maverick agents are and how they work
---

[Full page content here]
```

---

SPECIAL INSTRUCTIONS:
- The homepage (index.mdx) should have Card navigation to major sections
- Include cross-references between related pages
- Add "Next Steps" or "Related Pages" sections at the end of each page
- Use tables for comparing agent types, pack rarities, etc.
- Include practical tips in Callout boxes
- Make sure all internal links point to pages that exist in the structure

---

START WITH:
1. Homepage (index.mdx)
2. Getting Started (getting-started.mdx)
3. Then generate all pages in the basics/ folder
4. Then agents/ folder
5. Continue through all folders in order

Generate the complete documentation book now.
```

---

## 📋 Checklist After AI Generates Content

When the AI gives you the pages:

1. **Create the folder structure**
   ```bash
   cd content/docs/
   mkdir -p basics agents packs leaderboards progression gameplay advanced reference
   ```

2. **Save each page** to its correct location
   - Copy the content from each code block
   - Save to the file path shown in the title

3. **Test locally**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000/docs

4. **Check for**:
   - [ ] All pages have frontmatter (title and description)
   - [ ] Internal links work (no 404s)
   - [ ] Callouts display correctly
   - [ ] Tables render properly
   - [ ] Navigation makes sense

5. **Deploy**
   ```bash
   git add .
   git commit -m "Add complete documentation content"
   git push origin main
   ```

---

## 🎯 Example for a Single Section

If you want just one section (like Agents), use this simpler prompt:

```
Create the "Agents" section for PipWorld Market Mavericks documentation.

Generate these pages:
1. content/docs/agents/introduction.mdx - What agents are and why they matter
2. content/docs/agents/agent-types.mdx - Different categories of agents
3. content/docs/agents/selection-guide.mdx - How to choose the right agents
4. content/docs/agents/performance-tracking.mdx - Understanding agent metrics
5. content/docs/agents/portfolio-management.mdx - Managing multiple agents

Requirements:
- Use Fumadocs MDX format with frontmatter
- Include Callout components for tips and warnings
- Add tables comparing agent types
- Link between related pages
- Target audience: beginners to intermediate users
- Friendly, clear tone

Provide each as a separate code block with file path as title.
```

---

## 💡 Tips for Best Results

1. **Be specific** about your project details
2. **Provide context** about what features/concepts to cover
3. **Request examples** if you want practical scenarios
4. **Ask for tables** when comparing features
5. **Specify the tone** (casual, professional, technical)
6. **Request navigation links** between related pages
7. **Ask for one section at a time** if overwhelmed

---

## 🔄 Iterating on Generated Content

If the AI generates content that needs adjustment:

```
The [section/page] you generated needs these changes:
1. Make it more [detailed/concise/beginner-friendly]
2. Add [specific content like: examples, code samples, comparisons]
3. Adjust tone to be more [professional/casual/technical]
4. Add links to [specific related pages]

Please regenerate [specific page name] with these improvements.
```

---

That's it! You now have everything you need to instruct an AI to generate your entire documentation book! 📚✨

