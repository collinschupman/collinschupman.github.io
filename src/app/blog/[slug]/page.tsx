import { getBlogPost, blogPosts } from '@/data/blogPosts'
import { Calendar, ArrowLeft, User, Clock } from 'lucide-react'
import Link from 'next/link'
import BlogPostContent from '@/components/BlogPostContent'

// Required for static export
export function generateStaticParams() {
  // If no blog posts exist, return a placeholder to satisfy Next.js static export
  if (blogPosts.length === 0) {
    return [{ slug: '_placeholder' }]
  }
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = false

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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
        <BlogPostContent content={post.content} />
      </article>
    </div>
  )
}
