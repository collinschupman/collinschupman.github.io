'use client'

import BlogCard from './BlogCard'
import { blogPosts } from '@/data/blogPosts'

export default function BlogGrid() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
