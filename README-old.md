# Audio Programmer Portfolio

A modern, professional portfolio website for audio programmers, showcasing expertise in both pro audio and game audio development. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme optimized for showcasing technical work
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Project Showcase**: Dedicated section for highlighting audio programming projects
- **Experience Timeline**: Display professional background and achievements
- **Skills Section**: Showcase core competencies in pro audio and game audio
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **Performance**: Static site generation for optimal loading speed
- **Accessibility**: Built with semantic HTML and ARIA considerations

## Project Structure

```
audio-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main home page
│   │   ├── layout.tsx        # Root layout with Navigation and Footer
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navigation.tsx    # Top navigation bar
│       ├── Footer.tsx        # Footer component
│       ├── ProjectCard.tsx   # Individual project card
│       └── ProjectsGrid.tsx  # Grid of projects
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/audio-portfolio.git
cd audio-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building

To create an optimized production build:

```bash
npm run build
npm run start
```

The static site will be generated in the `out/` directory.

## Customization

### Update Personal Information

Edit the content in `src/app/page.tsx`:
- Update hero section text
- Modify project descriptions
- Change experience information
- Update contact links

### Add Projects

Update the `projects` array in `src/components/ProjectsGrid.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    tags: ['Tag1', 'Tag2'],
    category: 'pro-audio', // or 'gaming'
  },
  // Add more projects...
]
```

### Customize Styling

The site uses Tailwind CSS for styling. Key colors are defined in the components:
- Blue gradient: `from-blue-400 to-purple-500`
- Purple gradient: `from-purple-500 to-pink-500`

Modify these gradients in component files to match your brand.

### Update Social Links

Update social media links in `src/components/Footer.tsx`:

```typescript
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Create a new repository on GitHub
2. Name it `yourusername.github.io` for a user site, or any name for a project site
3. If using a project site, update `basePath` in `next.config.ts`

### Step 2: Configure Pages

1. Go to your repository settings → Pages
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to `main`

### Step 3: Push Your Code

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/audio-portfolio.git
git push -u origin main
```

The site will automatically deploy within a few minutes. Visit `https://yourusername.github.io` to see your live portfolio!

## Technologies Used

- **Next.js 16+**: React framework with SSG support
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **GitHub Actions**: CI/CD pipeline

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Static Generation**: Fast page loads with pre-built HTML
- **Image Optimization**: Unoptimized for GitHub Pages compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio

## Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org)
2. Review [Tailwind CSS docs](https://tailwindcss.com)
3. Open an issue on GitHub

## Tips for Audio Programmers

- Highlight real-time performance metrics (latency, CPU usage)
- Include audio samples or demo videos when possible
- Showcase DSP algorithm implementations
- Document your use of audio frameworks (JUCE, RtAudio, etc.)
- Include technical details about engine integrations
- Link to open-source contributions in audio tech

---

Built with ❤️ for audio professionals
