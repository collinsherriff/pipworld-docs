'use client';

import { useState } from 'react';

interface CopyPageButtonProps {
  title: string;
  description?: string;
  content: string;
  url: string;
}

export function CopyPageButton({ title, description, content, url }: CopyPageButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const mdxContent = `---
title: ${title}
description: ${description || ''}
url: ${url}
---

${content}
`;

    try {
      await navigator.clipboard.writeText(mdxContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      title="Copy page content formatted for AI"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Text for AI
        </>
      )}
    </button>
  );
}

