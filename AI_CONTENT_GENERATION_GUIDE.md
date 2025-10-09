# AI Content Generation Guide for PipWorld Documentation

This guide explains the complete structure, components, and patterns for creating documentation pages in the Fumadocs framework. Use this to instruct an AI to generate a complete documentation book.

---

## 📂 File Structure & URL Mapping

### Basic Rule: File Path = URL Path

```
content/docs/
├── index.mdx                           → /docs
├── getting-started.mdx                 → /docs/getting-started
├── folder-name/
│   ├── page-one.mdx                    → /docs/folder-name/page-one
│   ├── page-two.mdx                    → /docs/folder-name/page-two
│   └── subfolder/
│       └── nested-page.mdx             → /docs/folder-name/subfolder/nested-page
```

### Example Structure for a Complete Book

```
content/docs/
├── index.mdx                           # Homepage/Welcome
├── getting-started.mdx                 # Quick start guide
│
├── basics/                             # Folder: Basic Concepts
│   ├── what-is-pipworld.mdx
│   ├── core-concepts.mdx
│   └── terminology.mdx
│
├── agents/                             # Folder: Agents Section
│   ├── basics.mdx                      # /docs/agents/basics
│   ├── selection-strategy.mdx
│   ├── performance-metrics.mdx
│   └── advanced.mdx
│
├── packs/                              # Folder: Packs Section
│   ├── overview.mdx
│   ├── pack-types.mdx
│   ├── rarity-tiers.mdx
│   └── opening-strategy.mdx
│
├── leaderboards/                       # Folder: Leaderboards
│   ├── how-it-works.mdx
│   ├── strategies.mdx
│   └── rewards.mdx
│
├── progression/                        # Folder: XP & Progression
│   ├── xp-system.mdx
│   ├── tasks.mdx
│   ├── referrals.mdx
│   └── leveling-guide.mdx
│
├── advanced/                           # Folder: Advanced Topics
│   ├── portfolio-optimization.mdx
│   ├── timing-strategies.mdx
│   └── competitive-play.mdx
│
└── reference/                          # Folder: Reference
    ├── glossary.mdx
    ├── faq.mdx
    └── api.mdx
```

---

## 📄 MDX File Anatomy

### Every Page Must Have This Structure

```mdx
---
title: Page Title Here
description: A brief description for SEO and previews (1-2 sentences)
---

## Main Heading

Your content starts here...

### Subheading

More content...
```

### Complete Example Page

```mdx
---
title: Understanding Agents
description: Learn how to select, manage, and optimize your Market Maverick agents for maximum returns
---

import { Callout } from 'fumadocs-ui/components/callout';

## What Are Agents?

Agents in PiP World Market Mavericks are influencer-led trading personalities that execute trades on your behalf.

<Callout type="info">
  Each agent has unique performance metrics and trading styles!
</Callout>

### Agent Types

There are three main categories of agents:

1. **Aggressive Traders** - High risk, high reward
2. **Balanced Traders** - Moderate risk and returns
3. **Conservative Traders** - Low risk, steady gains

### Performance Metrics

| Metric | Description | Impact |
|--------|-------------|---------|
| Win Rate | Percentage of profitable trades | High |
| ROI | Return on investment | Very High |
| Volatility | Price fluctuation | Medium |

### Selecting Your First Agent

Follow these steps:

1. Review agent performance history
2. Check current market trends
3. Evaluate your risk tolerance
4. Make your selection

<Callout type="warn" title="Important">
  Always diversify your agent portfolio to minimize risk!
</Callout>

### Next Steps

- Learn about [Pack Opening Strategy](/docs/packs/opening-strategy)
- Explore [Portfolio Optimization](/docs/advanced/portfolio-optimization)
- Check out [Leaderboard Strategies](/docs/leaderboards/strategies)

---

**Pro Tip**: Start with one conservative agent to learn the system before expanding your portfolio.
```

---

## 🎨 Available Components

### 1. Callout Boxes (Info, Warning, Error)

```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  This is an informational callout.
</Callout>

<Callout type="warn" title="Warning Title">
  This is a warning with a custom title.
</Callout>

<Callout type="error">
  This indicates an error or critical information.
</Callout>

<Callout type="note">
  Additional notes or tips.
</Callout>
```

**When to use:**
- `info`: General information, tips
- `warn`: Important warnings, cautions
- `error`: Critical issues, things to avoid
- `note`: Side notes, additional context

### 2. Card Grids (Navigation Cards)

```mdx
<Cards>
  <Card 
    title="🚀 Getting Started" 
    href="/docs/getting-started" 
    description="Learn the basics and start your journey." 
  />
  <Card 
    title="📚 Advanced Guide" 
    href="/docs/advanced/guide" 
    description="Deep dive into advanced strategies." 
  />
  <Card 
    title="🎯 Best Practices" 
    href="/docs/best-practices"
  />
</Cards>
```

**When to use:**
- Homepage sections
- Category overviews
- Navigation between major topics

### 3. Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data A   | Data B   | Data C   |
| Data D   | Data E   | Data F   |
```

**When to use:**
- Comparing features
- Listing specifications
- Reference data

### 4. Code Blocks

````markdown
```javascript
const example = "code here";
console.log(example);
```

```python
def hello_world():
    print("Hello, World!")
```

```json
{
  "key": "value",
  "array": [1, 2, 3]
}
```
````

### 5. Lists

```markdown
### Unordered List
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

### Ordered List
1. First step
2. Second step
3. Third step

### Task List
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

### 6. Quotes & Blockquotes

```markdown
> This is a blockquote. Use for important statements or quotes.

> **Important Note:**
> Multi-line blockquotes work great for
> extended explanations or emphasis.
```

### 7. Images

```markdown
![Alt text description](https://example.com/image.png)

![Local image](/images/my-image.png)
```

### 8. Links

```markdown
# Internal links (within your docs)
[Link text](/docs/page-name)
[Nested page](/docs/folder/page-name)

# External links
[External site](https://example.com)

# Link with title tooltip
[Link text](/docs/page "Hover tooltip text")
```

### 9. Emphasis

```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`inline code`
```

---

## 🔗 Internal Linking Best Practices

### Link Format

```markdown
[Link Text](/docs/path/to/page)
```

### Examples

```markdown
# From any page to another page
[Getting Started](/docs/getting-started)

# To a page in a folder
[Agent Basics](/docs/agents/basics)

# To a nested page
[Advanced Strategy](/docs/advanced/portfolio-optimization)

# Link to homepage
[Welcome](/docs)
```

### Creating Navigation Flow

Every page should link to:
1. **Related pages** in the same section
2. **Next logical step** in the learning path
3. **Prerequisites** if needed

**Example Navigation Section:**

```markdown
### Related Topics

- [Previous: Agent Basics](/docs/agents/basics)
- [Next: Performance Metrics](/docs/agents/performance-metrics)
- [See also: Portfolio Strategy](/docs/advanced/portfolio-optimization)
```

---

## 📋 Content Templates

### Template 1: Concept Explanation Page

```mdx
---
title: [Concept Name]
description: [Brief description of what this concept is]
---

import { Callout } from 'fumadocs-ui/components/callout';

## What is [Concept]?

[Clear definition and explanation]

<Callout type="info">
  [Key insight or important fact]
</Callout>

### Why It Matters

[Explain the importance and relevance]

### How It Works

1. [Step or component one]
2. [Step or component two]
3. [Step or component three]

### Key Points to Remember

- [Point 1]
- [Point 2]
- [Point 3]

### Common Mistakes

<Callout type="warn">
  [Warning about common pitfall]
</Callout>

### Next Steps

- [Related topic 1](/docs/path/to/topic1)
- [Related topic 2](/docs/path/to/topic2)
```

### Template 2: How-To Guide

```mdx
---
title: How to [Do Something]
description: [What the user will accomplish]
---

import { Callout } from 'fumadocs-ui/components/callout';

## Overview

[Brief introduction to what this guide covers]

### Prerequisites

Before you begin, make sure you:
- [Requirement 1]
- [Requirement 2]

### Step-by-Step Instructions

#### Step 1: [First Action]

[Detailed explanation]

```
[Code or example if applicable]
```

#### Step 2: [Second Action]

[Detailed explanation]

<Callout type="info">
  [Helpful tip for this step]
</Callout>

#### Step 3: [Third Action]

[Detailed explanation]

### Troubleshooting

**Problem:** [Common issue]
**Solution:** [How to fix it]

### Summary

[Recap what was accomplished]

### What's Next?

- [Next logical guide](/docs/path)
- [Advanced technique](/docs/path)
```

### Template 3: Reference Page

```mdx
---
title: [Topic] Reference
description: Complete reference guide for [topic]
---

## Quick Reference

| Item | Description | Details |
|------|-------------|---------|
| [A]  | [Desc]      | [Info]  |
| [B]  | [Desc]      | [Info]  |

## Detailed Sections

### [Category 1]

#### [Item 1.1]
[Detailed explanation]

#### [Item 1.2]
[Detailed explanation]

### [Category 2]

#### [Item 2.1]
[Detailed explanation]

### See Also

- [Related reference](/docs/path)
- [Related guide](/docs/path)
```

### Template 4: Comparison Page

```mdx
---
title: [A] vs [B]
description: Compare [A] and [B] to choose the right option
---

import { Callout } from 'fumadocs-ui/components/callout';

## At a Glance

| Feature | [Option A] | [Option B] |
|---------|-----------|-----------|
| [Feature 1] | [A's value] | [B's value] |
| [Feature 2] | [A's value] | [B's value] |
| Best for | [Use case] | [Use case] |

### [Option A] in Detail

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Best for:** [Ideal use case]

### [Option B] in Detail

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Best for:** [Ideal use case]

<Callout type="info">
  [Recommendation or guidance]
</Callout>

### Which Should You Choose?

Choose [A] if:
- [Condition 1]
- [Condition 2]

Choose [B] if:
- [Condition 1]
- [Condition 2]
```

---

## 🎯 AI Prompt Template for Content Generation

Use this prompt when asking AI to generate documentation:

```
Create documentation pages for [PROJECT NAME] using the Fumadocs MDX format.

PROJECT CONTEXT:
[Brief description of your project, key features, target audience]

PAGES NEEDED:
Generate the following pages in the content/docs/ structure:

1. /index.mdx - Homepage/Welcome page
2. /getting-started.mdx - Quick start guide
3. /[folder-name]/[page-name].mdx - [Description]
[List all pages you need]

REQUIREMENTS:
- Each page must have frontmatter with title and description
- Use Callout components for important info, warnings, and tips
- Include tables for comparisons and reference data
- Add Card grids for navigation between major sections
- Link between related pages using /docs/path format
- Follow these templates: [specify which template(s) to use]
- Maintain consistent tone: [professional/casual/technical]

CONTENT GUIDELINES:
- Target audience: [who is reading this]
- Depth level: [beginner/intermediate/advanced]
- Include practical examples: [yes/no]
- Include code samples: [yes/no, what language]

FORMAT:
Provide each page as a separate code block with the file path as the title.
```

---

## 📊 Example: Complete Section Generation

### Prompt Example

```
Create a complete "Agents" section for PipWorld Market Mavericks documentation.

Pages needed:
1. /agents/basics.mdx - Introduction to agents
2. /agents/selection-strategy.mdx - How to choose agents
3. /agents/performance-metrics.mdx - Understanding agent stats
4. /agents/advanced.mdx - Advanced agent management

Each page should:
- Use Callout components for tips and warnings
- Include tables for data comparisons
- Link to other relevant pages
- Follow the concept explanation template
- Be beginner-friendly but comprehensive
```

### Expected Output Format

````markdown
```mdx title="content/docs/agents/basics.mdx"
---
title: Agent Basics
description: Learn the fundamentals of Market Maverick agents and how they work
---

[Full page content here]
```

```mdx title="content/docs/agents/selection-strategy.mdx"
---
title: Agent Selection Strategy
description: Master the art of choosing the right agents for your portfolio
---

[Full page content here]
```
````

---

## ✅ Quality Checklist for Generated Content

When reviewing AI-generated pages, ensure:

- [ ] **Frontmatter** is present with title and description
- [ ] **Import statements** for components (Callout) are included if used
- [ ] **Internal links** use `/docs/path` format
- [ ] **Callouts** are used for important info, not overused
- [ ] **Tables** have proper markdown formatting
- [ ] **Lists** are properly formatted
- [ ] **Code blocks** have language specified
- [ ] **Navigation links** at the end point to related pages
- [ ] **Tone** is consistent across pages
- [ ] **No broken links** (all referenced pages exist)

---

## 🚀 Quick Start Instructions for AI

**Copy this to give to another AI:**

```
I need you to create documentation pages for my project using Fumadocs MDX format.

STRUCTURE:
- Files go in content/docs/ folder
- File path = URL path (content/docs/agents/basics.mdx → /docs/agents/basics)
- Folders create sections

FORMAT FOR EACH PAGE:
1. Start with frontmatter (title and description in YAML)
2. Import Callout component if needed
3. Use ## for main headings, ### for subheadings
4. Include tables, lists, code blocks as needed
5. Add Callouts for important info
6. End with links to related pages

COMPONENTS AVAILABLE:
- Callout (info, warn, error, note)
- Cards (for navigation grids)
- Tables
- Code blocks
- Standard markdown

PROVIDE OUTPUT AS:
Each page in a separate code block with file path as title.

PROJECT DETAILS:
[Your project description]

PAGES NEEDED:
[List the structure and pages you want]
```

---

## 📁 File Organization Tips

### Good Structure
```
content/docs/
├── index.mdx              # Welcome/Overview
├── getting-started.mdx     # First steps
├── fundamentals/           # Basic concepts
├── features/               # Main features
├── guides/                 # How-to guides
├── advanced/               # Advanced topics
└── reference/              # API/Reference
```

### Naming Conventions
- Use lowercase
- Use hyphens for spaces: `my-page-name.mdx`
- Be descriptive: `pack-opening-strategy.mdx` not `strategy.mdx`
- Group related content in folders

---

This guide should give you everything needed to instruct an AI to generate a complete documentation book! 📚

