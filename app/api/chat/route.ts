import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { source } from '@/lib/source';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  // Get all documentation pages for context
  const pages = source.getPages();
  
  // Create context from documentation (limit to avoid token limits)
  const context = pages
    .slice(0, 20) // Limit to first 20 pages to avoid token limits
    .map(page => `
Title: ${page.data.title}
Description: ${page.data.description || ''}
URL: ${page.url}
`)
    .join('\n');

  // System prompt with documentation context
  const systemPrompt = `You are a helpful AI assistant for PipWorld Market Mavericks documentation.

Your role is to help users understand and navigate the PipWorld platform.

AVAILABLE DOCUMENTATION PAGES:
${context}

INSTRUCTIONS:
1. Answer questions based on the PipWorld documentation
2. Be friendly, concise, and helpful
3. Always provide relevant documentation links when answering (format: /docs/path)
4. If you're not sure, suggest checking specific documentation pages
5. Use emojis sparingly to keep it engaging

PIPWORLD FEATURES:
- Agents: Influencer-led AI traders (Common, Rare, Legendary)
- Packs: Collectible card packs with agents and XP boosts
- Leaderboards: PnL, XP, and Trading Runs rankings
- XP System: Tasks, referrals, and level progression
- Trading Floor: Real-time agent trading activity

Example good responses:
"To choose your first agent, check out /docs/onboarding/first-agent 🎯"
"The XP system works through tasks and referrals. Learn more at /docs/progression/xp-tasks ⭐"`;

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages,
    ],
    maxTokens: 500,
    temperature: 0.7,
  });

  return result.toDataStreamResponse();
}

