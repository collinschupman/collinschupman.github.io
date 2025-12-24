# Quick Start Guide - Audio Portfolio Website

Welcome! Your professional audio programmer portfolio is ready to use. Here's how to get started.

## 📁 Project Location

```
/Users/collinschupman/Desktop/audio-portfolio
```

## 🚀 Quick Commands

### Development Server
```bash
cd /Users/collinschupman/Desktop/audio-portfolio
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Export Static Site
```bash
npm run build
# Output will be in the `out/` directory
```

## 🎨 Customization (What You Need to Change)

### 1. Update Your Personal Info
**File:** `src/app/page.tsx` (lines 8-25)

Change:
- Hero section heading: "Audio Programming Excellence"
- Description text
- Call-to-action buttons

### 2. Update Your Projects
**File:** `src/components/ProjectsGrid.tsx` (lines 4-29)

Replace the example projects with your actual work:
```typescript
const projects = [
  {
    title: 'Your Real Project',
    description: 'What it does and why it matters',
    tags: ['C++', 'DSP', 'Unreal'],
    category: 'pro-audio', // or 'gaming'
  },
  // Add more...
]
```

### 3. Update Your Experience
**File:** `src/app/page.tsx` (lines 140-180)

Change:
- Job titles and dates
- Company names
- Your achievements and responsibilities

### 4. Update Social Links
**File:** `src/components/Footer.tsx` (lines 24-28)

Change:
- GitHub URL
- LinkedIn URL
- Email address

### 5. Customize Contact Info
**File:** `src/app/page.tsx` (line 195)

Change the email in the contact section

## 🌐 Deploy to GitHub Pages

### Simple 3-Step Process:

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Create `yourusername.github.io` (for user site)
   - Or create any repo name (for project site)

2. **Push Your Code**
   ```bash
   cd /Users/collinschupman/Desktop/audio-portfolio
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - Done! Your site deploys automatically

**Full instructions:** See `DEPLOYMENT.md`

## 📦 Project Structure

```
src/
├── app/
│   ├── page.tsx          ← Main page (edit your content here)
│   ├── layout.tsx        ← Navigation & Footer wrapper
│   └── globals.css       ← Global styling
└── components/
    ├── Navigation.tsx    ← Top nav bar
    ├── Footer.tsx        ← Footer with links
    ├── ProjectCard.tsx   ← Individual project card
    └── ProjectsGrid.tsx  ← All projects (edit your projects here)
```

## 🎯 Content Sections on Homepage

1. **Hero** - Main headline and CTA buttons
2. **Skills** - 3 columns: Pro Audio, Game Audio, Technologies
3. **Projects** - Featured portfolio pieces
4. **Experience** - Job history and achievements
5. **Contact** - Call to action and social links

## 🛠 Tech Stack

- **Next.js 16** - React framework with static export
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **GitHub Actions** - Automated deployment

## 💡 Pro Tips for Audio Programmers

- **Showcase metrics:** Include latency, CPU usage, sample rates
- **Link code:** Add GitHub links to open-source audio projects
- **Technical depth:** Mention DSP algorithms, audio frameworks (JUCE, RtAudio, Wwise)
- **Before/after:** Show audio processing improvements with metrics
- **Cross-platform:** Highlight Windows, macOS, Linux support
- **Real-time:** Emphasize low-latency implementations
- **Game integrations:** Show Unreal/Unity audio work

## 🔍 Testing Before Deploy

```bash
# Build for production
npm run build

# Test the built site locally
npm start

# Visit http://localhost:3000
```

## ❓ Common Questions

**Q: How often can I update?**
A: Push to GitHub anytime. Site redeployed automatically.

**Q: Can I use a custom domain?**
A: Yes! See instructions in DEPLOYMENT.md

**Q: How much does hosting cost?**
A: Free! GitHub Pages hosting is complimentary.

**Q: Can I add more pages?**
A: Yes, create files in `src/app/` with Next.js App Router.

## 🎓 Next Steps

1. ✅ Customize your personal information
2. ✅ Add your real projects
3. ✅ Update your experience
4. ✅ Test locally: `npm run dev`
5. ✅ Create GitHub repo
6. ✅ Push code and enable GitHub Pages
7. ✅ Share your portfolio!

## 📚 Documentation

- **Full README:** See `README.md` for comprehensive documentation
- **Deployment Guide:** See `DEPLOYMENT.md` for hosting options
- **Next.js Docs:** [https://nextjs.org](https://nextjs.org)
- **Tailwind CSS:** [https://tailwindcss.com](https://tailwindcss.com)

## 🆘 Need Help?

1. Check the README.md for detailed information
2. Review DEPLOYMENT.md for hosting questions
3. Look at the component structure to understand the layout
4. The code is well-commented and uses standard React patterns

---

**Your portfolio is ready to showcase your audio programming expertise to the world! 🎵**
