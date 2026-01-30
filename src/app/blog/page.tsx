import BlogGrid from '@/components/BlogGrid'

export const metadata = {
  title: 'Blog | Collin Schupman',
  description: 'Thoughts on audio programming, game development, and creative technology.',
}

export default function BlogPage() {
  return (
    <div className="text-black min-h-screen" style={{ backgroundColor: '#FAF8F3' }}>
      {/* Blog Header */}
      <section className="mx-auto px-6 pt-32 pb-16" style={{ maxWidth: '1280px' }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          color: '#111827'
        }}>
          Blog
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#6b7280',
          maxWidth: '800px',
          lineHeight: 1.6
        }}>
          Thoughts and insights on audio programming, game development, creative technology, and everything in between.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto px-6 pb-32" style={{ maxWidth: '1280px' }}>
        <BlogGrid />
      </section>
    </div>
  )
}
