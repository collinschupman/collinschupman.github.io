'use client'

interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div 
      style={{
        fontSize: '1.125rem',
        lineHeight: 1.8,
        color: '#374151'
      }}
      className="blog-content"
    >
      <style jsx>{`
        .blog-content :global(h1) {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        .blog-content :global(h2) {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        .blog-content :global(h3) {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }
        .blog-content :global(p) {
          margin-bottom: 1.5rem;
        }
        .blog-content :global(ul),
        .blog-content :global(ol) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content :global(li) {
          margin-bottom: 0.5rem;
        }
        .blog-content :global(strong) {
          font-weight: 600;
          color: #111827;
        }
        .blog-content :global(code) {
          background-color: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Courier New', monospace;
        }
        .blog-content :global(pre) {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        .blog-content :global(pre code) {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }
        .blog-content :global(blockquote) {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
      {/* Render markdown-style content */}
      <div dangerouslySetInnerHTML={{ __html: formatContent(content) }} />
    </div>
  )
}

// Simple markdown-like formatting function
function formatContent(content: string): string {
  return content
    .split('\n')
    .map(line => {
      // Headers
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
      if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`
      
      // Code blocks
      if (line.startsWith('```')) return line.includes('```cpp') || line.includes('```javascript') || line.includes('```') ? '<pre><code>' : '</code></pre>'
      
      // Lists
      if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
      if (line.match(/^\d+\. /)) return `<li>${line.slice(line.indexOf(' ') + 1)}</li>`
      
      // Bold
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      
      // Italic
      line = line.replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      // Inline code
      line = line.replace(/`(.*?)`/g, '<code>$1</code>')
      
      // Empty lines
      if (line.trim() === '') return '<br />'
      
      // Regular paragraphs
      if (!line.startsWith('<')) return `<p>${line}</p>`
      
      return line
    })
    .join('\n')
}
