import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get all documentation pages
    const pages = source.getPages();
    
    // Build markdown content
    let content = `# PipWorld Market Mavericks Documentation
Generated: ${new Date().toISOString()}

---

`;

    // Add each page with extracted text content
    for (const page of pages) {
      try {
        // Extract the processed text content from the page
        const textContent = await page.data.getText('processed');
        
        content += `
## ${page.data.title}

**URL:** ${page.url}
${page.data.description ? `**Description:** ${page.data.description}\n` : ''}

${textContent}

---

`;
      } catch (err) {
        console.error(`Error processing page ${page.url}:`, err);
        // Fallback to just title and description if text extraction fails
        content += `
## ${page.data.title}

**URL:** ${page.url}
${page.data.description ? `**Description:** ${page.data.description}\n` : ''}

[Content extraction failed]

---

`;
      }
    }

    return NextResponse.json({ 
      content,
      pageCount: pages.length,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json({ error: 'Failed to export documentation' }, { status: 500 });
  }
}

