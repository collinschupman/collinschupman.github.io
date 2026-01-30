import { BlogPost } from '@/types/blog'

// Add your blog posts here
export const blogPosts: BlogPost[] = [
  // Example post structure:
  // {
  //   slug: 'your-post-url-slug',
  //   title: 'Your Post Title',
  //   description: 'A brief description of your post',
  //   date: '2026-01-30',
  //   tags: ['Tag1', 'Tag2'],
  //   author: 'Collin Schupman',
  //   readTime: '5 min read',
  //   image: '/blog/your-image.jpg', // Optional
  //   content: `Your markdown-like content here...`
  // }
]

// Helper function to get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

// Helper function to get all blog post metadata (without full content)
export function getBlogPostsMeta() {
  return blogPosts.map(({ content, ...meta }) => meta)
}
