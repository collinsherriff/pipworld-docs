# Visual Structure Guide - How Pages & URLs Work

## 🗂️ The Golden Rule

```
FILE PATH = URL PATH
```

---

## 📁 Example 1: Simple Page

### File:
```
content/docs/getting-started.mdx
```

### Results in URL:
```
https://yoursite.com/docs/getting-started
```

### Sidebar shows:
```
📘 Docs
  └─ Getting Started
```

---

## 📁 Example 2: Folder with Pages

### File Structure:
```
content/docs/
└── agents/
    ├── basics.mdx
    ├── advanced.mdx
    └── tips.mdx
```

### Results in URLs:
```
https://yoursite.com/docs/agents/basics
https://yoursite.com/docs/agents/advanced
https://yoursite.com/docs/agents/tips
```

### Sidebar shows:
```
📘 Docs
  └─ 📂 Agents
      ├─ Basics
      ├─ Advanced
      └─ Tips
```

---

## 📁 Example 3: Nested Folders

### File Structure:
```
content/docs/
└── gameplay/
    ├── getting-started.mdx
    └── advanced/
        ├── strategies.mdx
        └── optimization.mdx
```

### Results in URLs:
```
https://yoursite.com/docs/gameplay/getting-started
https://yoursite.com/docs/gameplay/advanced/strategies
https://yoursite.com/docs/gameplay/advanced/optimization
```

### Sidebar shows:
```
📘 Docs
  └─ 📂 Gameplay
      ├─ Getting Started
      └─ 📂 Advanced
          ├─ Strategies
          └─ Optimization
```

---

## 🔗 How Internal Links Work

### Linking to pages at the same level:
```
You are here: /docs/agents/basics.mdx
Link to:      /docs/agents/advanced.mdx

Markdown: [Advanced Guide](/docs/agents/advanced)
```

### Linking to pages in different folders:
```
You are here: /docs/agents/basics.mdx
Link to:      /docs/packs/overview.mdx

Markdown: [Pack Overview](/docs/packs/overview)
```

### Linking to nested pages:
```
You are here: /docs/index.mdx
Link to:      /docs/gameplay/advanced/strategies.mdx

Markdown: [Advanced Strategies](/docs/gameplay/advanced/strategies)
```

---

## 📄 Complete Page Example with Links

```mdx
---
title: Agent Basics
description: Learn the fundamentals of Market Maverick agents
---

import { Callout } from 'fumadocs-ui/components/callout';

## What Are Agents?

Agents are AI-powered traders in PiP World Market Mavericks.

<Callout type="info">
  Each agent has unique trading styles and performance metrics!
</Callout>

### Getting Started

To start using agents, you'll need to:

1. Open a [Starter Pack](/docs/packs/overview)
2. Review [Performance Metrics](/docs/agents/performance-tracking)
3. Build your [Portfolio](/docs/agents/portfolio-management)

### Next Steps

- Learn about [Agent Types](/docs/agents/agent-types)
- Master [Selection Strategy](/docs/agents/selection-guide)
- Explore [Advanced Tactics](/docs/agents/advanced)
```

**This file would be saved as:**
```
content/docs/agents/basics.mdx
```

**And be accessible at:**
```
https://yoursite.com/docs/agents/basics
```

---

## 🎨 Component Examples in Context

### Homepage with Card Navigation

```mdx title="content/docs/index.mdx"
---
title: Welcome to PiP World
description: Your ultimate virtual trading platform
---

## Get Started

<Cards>
  <Card 
    title="🚀 Quick Start" 
    href="/docs/getting-started" 
    description="New here? Start your journey!" 
  />
  <Card 
    title="🤖 Learn About Agents" 
    href="/docs/agents/basics" 
    description="Discover Market Maverick agents" 
  />
  <Card 
    title="🎴 Open Packs" 
    href="/docs/packs/overview" 
    description="Unlock rare collectibles" 
  />
  <Card 
    title="🏆 Compete" 
    href="/docs/leaderboards/how-it-works" 
    description="Climb the rankings" 
  />
</Cards>
```

### Page with Callouts and Tables

```mdx title="content/docs/agents/agent-types.mdx"
---
title: Agent Types
description: Understand the different categories of Market Maverick agents
---

import { Callout } from 'fumadocs-ui/components/callout';

## Agent Categories

There are three main types of agents in PiP World.

### Comparison Table

| Type | Risk Level | Potential Return | Best For |
|------|------------|------------------|----------|
| Aggressive | High | Very High | Experienced traders |
| Balanced | Medium | Medium | Most players |
| Conservative | Low | Steady | Beginners |

<Callout type="warn" title="Important">
  Match your agent type to your risk tolerance and experience level!
</Callout>

### Aggressive Agents

**Characteristics:**
- High volatility
- Big wins and losses
- Requires active management

<Callout type="info">
  Best for players who can monitor trades frequently.
</Callout>

### Next Steps

- [Select Your First Agent](/docs/agents/selection-guide)
- [Track Performance](/docs/agents/performance-tracking)
- [Build a Portfolio](/docs/agents/portfolio-management)
```

---

## 🏗️ Building Your Documentation Book

### Step 1: Plan Your Structure

```
content/docs/
├── index.mdx                    # START HERE - Homepage
├── getting-started.mdx          # Onboarding
│
├── fundamentals/                # Basic concepts
│   ├── what-is-pipworld.mdx
│   └── core-concepts.mdx
│
├── features/                    # Main features
│   ├── agents/
│   │   ├── basics.mdx
│   │   └── advanced.mdx
│   ├── packs/
│   │   └── overview.mdx
│   └── leaderboards/
│       └── how-it-works.mdx
│
└── guides/                      # How-to guides
    ├── first-steps.mdx
    └── advanced-play.mdx
```

### Step 2: Create Files in Order

1. **Homepage** (`index.mdx`)
   - Welcome message
   - Card navigation to main sections
   
2. **Getting Started** (`getting-started.mdx`)
   - Quick start guide
   - Link to first feature

3. **Feature Sections** (agents/, packs/, etc.)
   - One folder per major feature
   - Multiple pages per folder
   - Cross-link between related pages

4. **Advanced Content**
   - Deep dives
   - Strategies
   - Reference materials

### Step 3: Link Everything Together

Every page should have:
- Links to prerequisite pages
- Links to related pages
- Links to next steps

Example navigation section:
```markdown
### Related Topics

**Prerequisites:**
- [Getting Started](/docs/getting-started)
- [Basic Concepts](/docs/fundamentals/core-concepts)

**Next Steps:**
- [Advanced Techniques](/docs/features/agents/advanced)
- [Optimization Guide](/docs/guides/advanced-play)

**See Also:**
- [Performance Metrics](/docs/features/agents/performance)
- [Portfolio Strategy](/docs/features/agents/portfolio)
```

---

## 🎯 Real World Example

Let's say you want to create the "Agents" section:

### 1. Create Folder Structure
```bash
mkdir -p content/docs/agents
```

### 2. Create These Files

```
content/docs/agents/
├── introduction.mdx        # What agents are
├── agent-types.mdx         # Categories explained
├── selection-guide.mdx     # How to choose
├── performance.mdx         # Understanding metrics
└── portfolio.mdx           # Managing multiple agents
```

### 3. Each File Looks Like

```mdx title="content/docs/agents/introduction.mdx"
---
title: Introduction to Agents
description: Learn what Market Maverick agents are and how they work
---

## Content here

[Links to other pages in this section]
```

### 4. They Link Together

```
introduction.mdx → agent-types.mdx → selection-guide.mdx → performance.mdx → portfolio.mdx
```

Each page links to the next logical page in the learning journey.

---

## ✅ Quick Checklist

When creating pages:

- [ ] File saved in `content/docs/` (or subfolder)
- [ ] Has YAML frontmatter with `title:` and `description:`
- [ ] Uses `##` for main heading, `###` for subheadings
- [ ] Imports Callout component if using Callouts
- [ ] Internal links use `/docs/path/to/page` format
- [ ] Has navigation links at the end
- [ ] File name uses lowercase with hyphens: `my-page.mdx`

---

## 🚀 You're Ready!

Now you understand:
- ✅ How file paths become URLs
- ✅ How folders organize content
- ✅ How to link between pages
- ✅ How to use components
- ✅ How to structure a complete documentation book

**Give this guide to an AI and they'll know exactly how to generate your content!** 📚

