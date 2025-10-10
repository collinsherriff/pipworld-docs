# Image Usage Examples in Fumadocs

## 📸 How to Add Images

### 1. Local Images (Recommended)

**Step 1:** Add your image to `public/images/`

**Step 2:** Reference it in your MDX:

```mdx
---
title: Agent Overview
description: Learn about agents
---

## What Are Agents?

![Agent card example](/images/agents/agent-card.png)

Agents are influencer-led AI traders in PipWorld.
```

---

### 2. Image Sizes & Optimization

#### Markdown (Simple)
```mdx
![Agent](/images/agent.png)
```

#### HTML (Custom Size)
```mdx
<img src="/images/agent.png" alt="Agent" width="400" />
```

#### Next.js Image (Best Performance)
```mdx
import Image from 'next/image';

<Image 
  src="/images/agent.png" 
  alt="Agent" 
  width={800} 
  height={600}
  priority={true}
/>
```

---

### 3. Image Layouts

#### Centered Image
```mdx
<div className="flex justify-center">
  <img src="/images/dashboard.png" alt="Dashboard" className="max-w-4xl rounded-lg shadow-lg" />
</div>
```

#### Full Width Image
```mdx
![Full width dashboard](/images/dashboard-wide.png)
```

#### Image Grid (2 columns)
```mdx
<div className="grid grid-cols-2 gap-4 my-8">
  <div>
    <img src="/images/pack-common.png" alt="Common pack" />
    <p className="text-center mt-2">Common Pack</p>
  </div>
  <div>
    <img src="/images/pack-legendary.png" alt="Legendary pack" />
    <p className="text-center mt-2">Legendary Pack</p>
  </div>
</div>
```

#### Image Grid (3 columns)
```mdx
<div className="grid grid-cols-3 gap-4">
  <img src="/images/agent-1.png" alt="Agent 1" />
  <img src="/images/agent-2.png" alt="Agent 2" />
  <img src="/images/agent-3.png" alt="Agent 3" />
</div>
```

---

### 4. Images with Captions

```mdx
<figure className="my-8">
  <img 
    src="/images/trading-floor.png" 
    alt="Trading floor interface" 
    className="w-full rounded-lg shadow-lg"
  />
  <figcaption className="text-center text-sm text-gray-600 mt-2">
    Figure 1: The trading floor showing real-time agent activity
  </figcaption>
</figure>
```

---

### 5. Responsive Images

```mdx
<div className="my-8">
  <img 
    src="/images/dashboard.png" 
    alt="Dashboard" 
    className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg"
  />
</div>
```

---

### 6. Images in Callouts

```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  <div className="flex gap-4 items-center">
    <img src="/images/tip-icon.png" alt="Tip" className="w-16 h-16" />
    <div>
      **Pro Tip**: Always check agent performance before backing them!
    </div>
  </div>
</Callout>
```

---

### 7. Step-by-Step with Images

```mdx
## How to Open a Pack

### Step 1: Purchase a Pack

![Pack purchase screen](/images/packs/purchase.png)

Navigate to the packs marketplace and select your desired pack.

### Step 2: Open the Pack

![Opening animation](/images/packs/opening.gif)

Click the "Open Pack" button to reveal your agents.

### Step 3: View Your Agents

![Revealed agents](/images/packs/revealed.png)

Check the rarity and stats of your new agents!
```

---

### 8. Comparison Images

```mdx
## Agent Rarity Comparison

<div className="grid grid-cols-3 gap-4 text-center">
  <div>
    <img src="/images/common-agent.png" alt="Common" className="mx-auto" />
    <h3 className="mt-2 font-bold">Common</h3>
    <p className="text-sm text-gray-600">60% drop rate</p>
  </div>
  <div>
    <img src="/images/rare-agent.png" alt="Rare" className="mx-auto" />
    <h3 className="mt-2 font-bold">Rare</h3>
    <p className="text-sm text-gray-600">30% drop rate</p>
  </div>
  <div>
    <img src="/images/legendary-agent.png" alt="Legendary" className="mx-auto" />
    <h3 className="mt-2 font-bold">Legendary</h3>
    <p className="text-sm text-gray-600">10% drop rate</p>
  </div>
</div>
```

---

### 9. Before & After Images

```mdx
## Portfolio Growth

<div className="grid grid-cols-2 gap-4">
  <div>
    <h4 className="text-center mb-2">Before</h4>
    <img src="/images/portfolio-before.png" alt="Portfolio before" />
  </div>
  <div>
    <h4 className="text-center mb-2">After</h4>
    <img src="/images/portfolio-after.png" alt="Portfolio after" />
  </div>
</div>
```

---

### 10. GIFs & Animations

```mdx
## Pack Opening Animation

![Pack opening animation](/images/pack-opening.gif)

Watch the exciting reveal animation when you open a pack!
```

---

## 📁 Recommended Image Formats

- **PNG**: Screenshots, UI elements, logos (with transparency)
- **JPG**: Photos, complex images (smaller file size)
- **SVG**: Icons, simple graphics (scales perfectly)
- **GIF**: Simple animations
- **WebP**: Modern format (best compression)

---

## 🎯 Best Practices

1. **Use descriptive alt text** for accessibility
   ```mdx
   ![PipWorld dashboard showing agent performance metrics and trading activity](/images/dashboard.png)
   ```

2. **Optimize image sizes** before uploading
   - Max width: 1920px for full-width images
   - Compress images (use tools like TinyPNG)

3. **Use meaningful file names**
   - ✅ `agent-selection-screen.png`
   - ❌ `IMG_1234.png`

4. **Organize by section**
   ```
   public/images/
   ├── agents/
   ├── packs/
   ├── leaderboards/
   └── dashboard/
   ```

5. **Keep file sizes reasonable**
   - Screenshots: < 500KB
   - Photos: < 200KB
   - Icons: < 50KB

---

## 🖼️ Complete Example Page

```mdx title="content/docs/agents/overview.mdx"
---
title: Agents Overview
description: Learn about Market Maverick agents
---

import { Callout } from 'fumadocs-ui/components/callout';

## What Are Market Maverick Agents?

![Market Maverick agent card](/images/agents/agent-card.png)

Market Maverick agents are influencer-led AI traders that execute trades on your behalf.

<Callout type="info">
  Each agent has unique trading styles and performance metrics!
</Callout>

### Agent Rarity Tiers

<div className="grid grid-cols-3 gap-4 my-8">
  <div className="text-center">
    <img src="/images/agents/common.png" alt="Common agent" className="mx-auto rounded-lg" />
    <h4 className="mt-2 font-bold">Common</h4>
  </div>
  <div className="text-center">
    <img src="/images/agents/rare.png" alt="Rare agent" className="mx-auto rounded-lg" />
    <h4 className="mt-2 font-bold">Rare</h4>
  </div>
  <div className="text-center">
    <img src="/images/agents/legendary.png" alt="Legendary agent" className="mx-auto rounded-lg" />
    <h4 className="mt-2 font-bold">Legendary</h4>
  </div>
</div>

### Trading Floor Preview

<figure className="my-8">
  <img 
    src="/images/agents/trading-floor.png" 
    alt="Trading floor showing multiple agents executing trades" 
    className="w-full rounded-lg shadow-lg"
  />
  <figcaption className="text-center text-sm text-gray-600 mt-2">
    The trading floor where you can watch your agents in action
  </figcaption>
</figure>

### Next Steps

- [Choose Your First Agent](/docs/onboarding/first-agent)
- [View My Agents](/docs/agents/my-agents)
```

---

## 🚀 Quick Start Checklist

- [ ] Create `public/images/` folder
- [ ] Add your images to appropriate subfolders
- [ ] Use descriptive file names
- [ ] Optimize/compress images
- [ ] Add images to your MDX with alt text
- [ ] Test locally with `npm run dev`
- [ ] Commit and push to deploy

---

That's it! Your images will now appear in your documentation. 📸

