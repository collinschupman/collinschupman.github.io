'use client'

import { ArrowRight, Calendar } from 'lucide-react'
import { BlogPostMeta } from '@/types/blog'

interface BlogCardProps {
  post: BlogPostMeta
}

export default function BlogCard({ post }: BlogCardProps) {
  const cardContent = (
    <div style={{ width: '100%' }}>
      <style jsx>{`
        .blog-card {
          position: relative;
          cursor: pointer;
        }
        .blog-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 8px 8px 0 0;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s;
          background-color: #f3f4f6;
        }
        .blog-image:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .blog-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          opacity: 0;
          transition: all 0.3s;
        }
        .blog-image:hover .blog-overlay {
          background-color: rgba(0, 0, 0, 0.85);
          opacity: 1;
        }
        .overlay-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .overlay-description {
          color: white;
          font-size: 0.875rem;
          text-align: center;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          background-color: transparent;
          border: 2px solid white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s;
        }
        .read-more-btn:hover {
          background-color: white;
          color: black;
        }
        .blog-info {
          padding: 1rem;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-top: none;
          border-radius: 0 0 8px 8px;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        .blog-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #111827;
        }
        .blog-description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }
        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          background-color: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
      `}</style>
      
      <div className="blog-card">
        <div className="blog-image">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#9ca3af'
            }}>
              📝
            </div>
          )}
          <div className="blog-overlay">
            <div className="overlay-title">{post.title}</div>
            <div className="overlay-description">{post.description}</div>
            <button className="read-more-btn">
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="blog-info">
          <div className="blog-meta">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            {post.readTime && <span>• {post.readTime}</span>}
          </div>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-description">{post.description}</p>
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <a 
      href={`/blog/${post.slug}`} 
      style={{ textDecoration: 'none', display: 'block' }}
      className="blog-link"
    >
      {cardContent}
    </a>
  )
}
