'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center gap-2"
        aria-label="Open AI chat"
      >
        <span className="text-2xl">💬</span>
        <span className="hidden md:inline font-semibold">Ask AI</span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">PipWorld AI Assistant</h3>
              <p className="text-xs text-blue-100">Ask me anything about PipWorld!</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                <p className="text-4xl mb-4">👋</p>
                <p className="font-semibold">Hi! I'm your PipWorld guide.</p>
                <p className="text-sm mt-2">Ask me about agents, packs, leaderboards, or anything else!</p>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => {
                      const event = { target: { value: 'How do I choose my first agent?' } } as any;
                      handleInputChange(event);
                      setTimeout(() => {
                        const form = document.querySelector('form');
                        if (form) {
                          const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
                          form.dispatchEvent(submitEvent);
                        }
                      }, 100);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 block"
                  >
                    → How do I choose my first agent?
                  </button>
                  <button
                    onClick={() => {
                      const event = { target: { value: 'What are pack rarities?' } } as any;
                      handleInputChange(event);
                      setTimeout(() => {
                        const form = document.querySelector('form');
                        if (form) {
                          const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
                          form.dispatchEvent(submitEvent);
                        }
                      }, 100);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 block"
                  >
                    → What are pack rarities?
                  </button>
                  <button
                    onClick={() => {
                      const event = { target: { value: 'How does the XP system work?' } } as any;
                      handleInputChange(event);
                      setTimeout(() => {
                        const form = document.querySelector('form');
                        if (form) {
                          const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
                          form.dispatchEvent(submitEvent);
                        }
                      }, 100);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 block"
                  >
                    → How does the XP system work?
                  </button>
                </div>
              </div>
            )}
            {messages.map(m => (
              <div
                key={m.id}
                className={`p-3 rounded-lg ${
                  m.role === 'user'
                    ? 'bg-blue-100 dark:bg-blue-900 ml-8'
                    : 'bg-gray-100 dark:bg-gray-800 mr-8'
                }`}
              >
                <div className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
                  {m.role === 'user' ? 'You' : '🤖 AI Assistant'}
                </div>
                <div className="text-sm whitespace-pre-wrap">{m.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mr-8">
                <div className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
                  🤖 AI Assistant
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about PipWorld..."
                className="flex-1 border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Powered by OpenAI • Press Cmd/Ctrl+K to focus
            </p>
          </form>
        </div>
      )}
    </>
  );
}

