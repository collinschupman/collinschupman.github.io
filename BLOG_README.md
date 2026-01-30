# Blog System Documentation

Your website now has a complete blog system! Here's everything you need to know to start publishing blog posts.

## 📁 File Structure

```
src/
├── app/
│   └── blog/
│       ├── page.tsx              # Blog listing page (/blog)
│       └── [slug]/
│           └── page.tsx          # Individual blog post page (/blog/post-slug)
├── components/
│   ├── BlogCard.tsx              # Blog post card component
│   └── BlogGrid.tsx              # Grid layout for blog posts
├── data/
│   └── blogPosts.ts              # Blog post data (add your posts here)
└── types/
    └── blog.ts                   # TypeScript types for blog posts
```

## ✍️ Adding a New Blog Post

To publish a new blog post, simply add it to the `blogPosts` array in [src/data/blogPosts.ts](src/data/blogPosts.ts):

```typescript
{
  slug: 'your-post-url-slug',
  title: 'Your Post Title',
  description: 'A brief description of your post',
  date: '2025-01-30',
  tags: ['Tag1', 'Tag2'],
  author: 'Collin Schupman',
  readTime: '5 min read',
  image: '/blog/your-image.jpg', // Optional
  content: `
# Your Blog Post Content

Write your content here using markdown-like syntax...

## Subheading

Paragraphs, **bold text**, *italic text*, and more!

### Code Examples

\`\`\`cpp
void example() {
    // Your code here
}
\`\`\`

- List item 1
- List item 2
  `
}
```

## 🎨 Content Formatting

The blog system supports basic markdown-like formatting in the `content` field:

- **Headings**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Inline code**: `` `code` ``
- **Code blocks**: 
  ```
  \`\`\`cpp
  code here
  \`\`\`
  ```
- **Lists**: Lines starting with `- ` or `1. `

## 🖼️ Adding Images

1. Place your blog images in the `public/blog/` directory
2. Reference them in your post:
   ```typescript
   image: '/blog/my-image.jpg'
   ```

## 📝 Blog Features

### What's Included

✅ Blog listing page at `/blog`
✅ Individual blog post pages at `/blog/[slug]`
✅ Blog section on homepage with latest posts
✅ Responsive card-based layout
✅ Tags and metadata (date, author, read time)
✅ Navigation integration
✅ "View All Posts" link from homepage
✅ Back navigation from individual posts
✅ Three sample blog posts

### Sample Posts Included

1. **Welcome to My Blog** - Introduction post
2. **Audio Programming Basics** - DSP tutorial
3. **Working on Call of Duty** - Career insights

## 🚀 Next Steps

### Option 1: Keep the Simple Approach (Current)
- Add posts directly to `blogPosts.ts`
- Great for getting started quickly
- No build step needed

### Option 2: Upgrade to Markdown Files (Future)
If you want to write posts in actual markdown files instead of TypeScript:
1. Install a markdown processor (like `gray-matter` and `remark`)
2. Create a `content/blog/` directory for `.md` files
3. Update the blog system to read from files instead of the array

### Option 3: Use a CMS (Future)
For a more robust solution:
- Integrate with a headless CMS (Contentful, Sanity, etc.)
- Enable non-technical users to publish posts
- Add features like drafts, scheduling, etc.

## 📍 URLs

- Blog listing: `https://yoursite.com/blog`
- Individual posts: `https://yoursite.com/blog/post-slug`

## 🎨 Customization

### Styling
All components use inline styles matching your existing design system. To customize:
- Edit [BlogCard.tsx](src/components/BlogCard.tsx) for card styling
- Edit [src/app/blog/page.tsx](src/app/blog/page.tsx) for the blog listing page
- Edit [src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx) for individual post pages

### Layout
The blog grid uses CSS Grid with `repeat(auto-fill, minmax(300px, 1fr))` for responsive columns. Adjust in [BlogGrid.tsx](src/components/BlogGrid.tsx).

## 🔍 SEO

The blog page includes basic metadata. For better SEO, consider adding:
- Open Graph tags
- Twitter Card metadata
- JSON-LD structured data
- Sitemap generation

## 📱 Responsive Design

The blog system is fully responsive:
- Grid adjusts based on screen size
- Mobile-friendly navigation
- Touch-optimized interactions

## 🐛 Troubleshooting

**Posts not showing up?**
- Check the `slug` is unique
- Ensure the date format is `YYYY-MM-DD`
- Verify the import in `BlogGrid.tsx`

**Images not loading?**
- Confirm images are in the `public/` directory
- Check the path starts with `/`
- Verify image file names match exactly

**Styling issues?**
- Check for conflicting global styles
- Ensure Tailwind CSS is configured properly
- Verify component imports are correct

## 🎉 You're All Set!

Start publishing by adding your blog posts to [src/data/blogPosts.ts](src/data/blogPosts.ts). Happy blogging!
