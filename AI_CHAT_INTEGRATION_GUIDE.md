# AI Chat Integration for Fumadocs

Guide to adding AI-powered chat/search to your PipWorld documentation.

---

## 🤖 Integration Options

### Option 1: Inkeep (Recommended - Easiest)

**Inkeep** provides AI-powered chat widget that learns from your documentation.

#### Features:
- ✅ Drop-in widget (no complex setup)
- ✅ Learns from your docs automatically
- ✅ ChatGPT-like interface
- ✅ Free tier available
- ✅ Customizable branding

#### Setup:

1. **Sign up at [inkeep.com](https://inkeep.com)**

2. **Install the package:**
```bash
npm install @inkeep/uikit-react
```

3. **Create the chat component:**

Create `app/components/inkeep-chat.tsx`:

```tsx
'use client';

import { useEffect } from 'react';
import { InkeepChatButton } from '@inkeep/uikit-react';

export function InkeepChat() {
  return (
    <InkeepChatButton
      baseSettings={{
        apiKey: process.env.NEXT_PUBLIC_INKEEP_API_KEY!,
        integrationId: process.env.NEXT_PUBLIC_INKEEP_INTEGRATION_ID!,
        organizationId: process.env.NEXT_PUBLIC_INKEEP_ORGANIZATION_ID!,
        primaryBrandColor: '#6366f1', // Your brand color
      }}
      aiChatSettings={{
        chatSubjectName: 'PipWorld Docs',
        botAvatarSrcUrl: '/logo.png', // Your logo
        quickQuestions: [
          'How do I choose my first agent?',
          'What are pack rarities?',
          'How does the XP system work?',
          'How do leaderboards work?',
        ],
      }}
    />
  );
}
```

4. **Add to your layout:**

Edit `app/docs/layout.tsx`:

```tsx
import { InkeepChat } from '@/components/inkeep-chat';

export default function DocsLayout({ children }) {
  return (
    <div>
      {children}
      <InkeepChat />
    </div>
  );
}
```

5. **Add environment variables:**

Create `.env.local`:

```bash
NEXT_PUBLIC_INKEEP_API_KEY=your_api_key
NEXT_PUBLIC_INKEEP_INTEGRATION_ID=your_integration_id
NEXT_PUBLIC_INKEEP_ORGANIZATION_ID=your_org_id
```

6. **Deploy:** Push to GitHub - Netlify will pick up the env vars (add them in Netlify dashboard)

---

### Option 2: Mendable AI

**Mendable** is another AI chat solution specifically for documentation.

#### Features:
- ✅ Documentation-focused
- ✅ Easy integration
- ✅ Custom training on your docs
- ✅ Analytics dashboard

#### Setup:

1. **Sign up at [mendable.ai](https://mendable.ai)**

2. **Install:**
```bash
npm install @mendable/search
```

3. **Add the component:**

Create `app/components/mendable-chat.tsx`:

```tsx
'use client';

import { MendableSearchBar } from '@mendable/search';

export function MendableChat() {
  return (
    <MendableSearchBar
      anon_key={process.env.NEXT_PUBLIC_MENDABLE_API_KEY!}
      style={{ darkMode: false, accentColor: '#6366f1' }}
      placeholder="Ask about PipWorld..."
      dialogPlaceholder="How can I help you with PipWorld?"
      messageSettings={{
        openSourcesInNewTab: true,
        prettySources: true,
      }}
    />
  );
}
```

4. **Add to your docs layout**

---

### Option 3: Custom OpenAI Integration

Build your own using OpenAI's API with RAG (Retrieval Augmented Generation).

#### Setup:

1. **Install dependencies:**
```bash
npm install openai ai
```

2. **Create API route:**

Create `app/api/chat/route.ts`:

```ts
import { OpenAI } from 'openai';
import { source } from '@/lib/source';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  // Get all docs content for context
  const pages = source.getPages();
  const context = pages.map(page => ({
    title: page.data.title,
    content: page.data.body,
    url: page.url,
  }));

  // Create system prompt with documentation context
  const systemPrompt = `You are a helpful assistant for PipWorld documentation.
  
Use the following documentation to answer questions:

${context.map(doc => `
### ${doc.title}
${doc.content}
URL: ${doc.url}
`).join('\n\n')}

Answer questions based on this documentation. If the answer isn't in the docs, say so.
Always provide the relevant URL when answering.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    stream: true,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
```

3. **Create chat UI:**

Create `app/components/ai-chat.tsx`:

```tsx
'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        💬 Ask AI
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white border rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">PipWorld AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(m => (
              <div
                key={m.id}
                className={`p-3 rounded-lg ${
                  m.role === 'user'
                    ? 'bg-blue-100 ml-8'
                    : 'bg-gray-100 mr-8'
                }`}
              >
                <div className="text-sm font-semibold mb-1">
                  {m.role === 'user' ? 'You' : 'AI Assistant'}
                </div>
                {m.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about PipWorld..."
                className="flex-1 border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
```

4. **Add to layout:**

```tsx
import { AIChat } from '@/components/ai-chat';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <AIChat />
      </body>
    </html>
  );
}
```

5. **Add environment variables:**

```bash
OPENAI_API_KEY=your_openai_api_key
```

---

### Option 4: Embeddings + Vector Search (Advanced)

For more sophisticated RAG:

1. **Install:**
```bash
npm install @supabase/supabase-js openai
```

2. **Generate embeddings** for all your docs
3. **Store in vector database** (Supabase, Pinecone, etc.)
4. **Query with semantic search** on user questions
5. **Pass relevant docs to OpenAI** for answers

---

## 📊 Comparison

| Solution | Cost | Setup Time | Customization | Best For |
|----------|------|------------|---------------|----------|
| **Inkeep** | Free tier, then $$ | 15 mins | Medium | Quick setup |
| **Mendable** | Free tier, then $$ | 20 mins | Medium | Doc-focused |
| **Custom OpenAI** | Pay per use | 1-2 hours | Full | Complete control |
| **Vector DB + RAG** | Variable | 4+ hours | Full | Production apps |

---

## 🚀 Recommended Approach

**For PipWorld, I recommend starting with Inkeep:**

1. ✅ Fastest to set up (15 minutes)
2. ✅ Free tier for testing
3. ✅ Professional UI out of the box
4. ✅ Automatically learns from your docs
5. ✅ Good analytics

Then upgrade to custom OpenAI solution if you need more control.

---

## 📝 Quick Start: Inkeep Setup

1. **Sign up:** https://inkeep.com
2. **Create project** for PipWorld docs
3. **Get API keys**
4. **Install package:**
   ```bash
   npm install @inkeep/uikit-react
   ```
5. **Copy the component code** from Option 1 above
6. **Add to your layout**
7. **Deploy!**

Your users can now chat with your docs! 💬

---

## 🎨 Customization Ideas

Once you have chat working, you can:

- Add quick question suggestions based on common queries
- Customize the bot's personality ("Hey! I'm your PipWorld guide!")
- Add rich responses with images and links
- Track what users ask to improve docs
- Add voice input/output
- Multi-language support

---

## 🔧 Testing Your AI Chat

Good questions to test with:

1. "How do I choose my first agent?"
2. "What's the difference between pack rarities?"
3. "How does the XP system work?"
4. "How do I climb the leaderboards?"
5. "What are trading runs?"

The AI should answer based on your documentation and provide relevant page links.

---

## 💡 Pro Tips

1. **Keep docs well-structured** - Better docs = better AI answers
2. **Use clear headings** - Helps AI find relevant sections
3. **Add examples** - AI can reference them in answers
4. **Monitor analytics** - See what users ask about
5. **Iterate on docs** - Fill gaps based on common questions

---

Need help implementing? Let me know which option you'd like and I can set it up for you!

