'use client'

import { useParams } from 'next/navigation'
import { getBlogPost, blogPosts } from '@/data/blogPosts'
import { Calendar, ArrowLeft, User, Clock } from 'lucide-react'
import Link from 'next/link'

// Required for static export
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="text-black min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="text-center">
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>Blog post not found</p>
          <Link href="/blog" style={{ 
            color: '#2563eb', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-black min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Blog Post Header */}
      <article className="mx-auto px-6 pt-32 pb-16" style={{ maxWidth: '800px' }}>
        {/* Back Button */}
        <Link 
          href="/blog" 
          style={{ 
            color: '#6b7280',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.2s'
          }}
          className="back-link"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Post Meta */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '1rem', 
          fontSize: '0.875rem', 
          color: '#6b7280',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          {post.author && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={16} />
              <span>{post.author}</span>
            </div>
          )}
          {post.readTime && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          color: '#111827',
          lineHeight: 1.2
        }}>
          {post.title}
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          {post.description}
        </p>

        {/* Tags */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {post.tags.map((tag) => (
            <span 
              key={tag}
              style={{
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 500
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured Image */}
        {post.image && (
          <div style={{
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
          }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Blog Content */}
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
            .back-link:hover {
              color: #111827;
            }
          `}</style>
          {/* Render markdown-style content */}
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        </div>
      </article>
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
