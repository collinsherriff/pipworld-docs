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

    // Add each page
    pages.forEach((page) => {
      content += `
## ${page.data.title}

**URL:** ${page.url}
${page.data.description ? `**Description:** ${page.data.description}\n` : ''}

${page.data.body || ''}

---

`;
    });

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

