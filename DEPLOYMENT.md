# GitHub Pages Deployment Guide

Your audio portfolio is ready to deploy to GitHub Pages! Follow these steps to get your site live.

## Option 1: User/Organization Site (yourusername.github.io)

This is the simplest option if you want your portfolio as your main GitHub page.

### Step 1: Create Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a repository named `yourusername.github.io` (replace `yourusername` with your GitHub username)
3. Leave it empty, do NOT initialize with README

### Step 2: Configure Your Site

In `next.config.ts`, ensure the config is set for a user site (no basePath needed):

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "", // Empty for user site
  images: {
    unoptimized: true,
  },
};
```

### Step 3: Push Your Code

```bash
cd /Users/collinschupman/Desktop/audio-portfolio

# Initialize git (already done, but if needed)
git init
git add .
git commit -m "Initial commit: Audio portfolio website"

# Add remote and push
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Actions

1. Go to your repository settings → **Pages**
2. Under "Build and deployment", select **GitHub Actions** as the source
3. The workflow will run automatically and deploy your site

Your portfolio will be live at: `https://yourusername.github.io`

---

## Option 2: Project Site (Custom Domain)

Use this option if you want your portfolio at a project URL like `yourusername.github.io/portfolio`

### Step 1: Create Repository

1. Create a repository named `audio-portfolio` (or any name)
2. Leave it empty, do NOT initialize with README

### Step 2: Update Configuration

In `next.config.ts`, add the basePath:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/audio-portfolio", // Or whatever your repo name is
  images: {
    unoptimized: true,
  },
};
```

### Step 3: Push Your Code

```bash
cd /Users/collinschupman/Desktop/audio-portfolio

git init
git add .
git commit -m "Initial commit: Audio portfolio website"

git branch -M main
git remote add origin https://github.com/yourusername/audio-portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository settings → **Pages**
2. Select **GitHub Actions** as the source

Your portfolio will be live at: `https://yourusername.github.io/audio-portfolio`

---

## Option 3: Custom Domain

If you have a custom domain (e.g., `youraudioportfolio.com`):

### Step 1: Add CNAME File

Create a file named `CNAME` in the `public/` directory with your domain:

```
youraudioportfolio.com
```

### Step 2: Configure DNS

Follow GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site):

- For apex domain: Add A records
- For subdomain: Add CNAME record

### Step 3: GitHub Pages Settings

1. Go to repository settings → **Pages**
2. Select **GitHub Actions**
3. In "Custom domain", enter your domain
4. Check "Enforce HTTPS"

---

## Monitoring Your Deployment

### Check Deployment Status

1. Go to your repository
2. Click **Deployments** tab
3. You'll see deployment history from GitHub Actions

### View Live Site

- **User site**: Visit `https://yourusername.github.io`
- **Project site**: Visit `https://yourusername.github.io/audio-portfolio`
- **Custom domain**: Visit your custom domain

### First deployment takes 1-5 minutes
Subsequent deployments are faster.

---

## Troubleshooting

### Site not updating after push?

1. Check **Actions** tab for any failed workflows
2. Verify your `next.config.ts` has correct `basePath`
3. Clear browser cache (Cmd+Shift+R on Mac)
4. Wait 5 minutes for deployment to complete

### 404 errors on pages?

1. Verify `basePath` in `next.config.ts` matches your deployment URL
2. Check that the `out/` directory contains all files: `npm run build`

### Workflow errors?

Check the Actions tab to see the full error message and logs.

---

## Updating Your Portfolio

After deployment, to make changes:

```bash
# Edit files as needed
# For example, update projects in src/components/ProjectsGrid.tsx

# Rebuild and test locally
npm run dev

# Then commit and push
git add .
git commit -m "Update projects and description"
git push
```

The workflow will automatically rebuild and redeploy on every push to `main`.

---

## Performance Tips

- The site is pre-rendered as static HTML, so it loads extremely fast
- GitHub Pages CDN serves your site globally
- No server costs, no maintenance needed
- Built-in HTTPS for custom domains

---

## Next Steps

1. Update your personal information in the site
2. Add your real projects to `ProjectsGrid.tsx`
3. Update social links in `Footer.tsx`
4. Push to GitHub and let the workflow deploy
5. Share your portfolio link!

---

Need help? Check:
- [Next.js Docs](https://nextjs.org)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Tailwind CSS Docs](https://tailwindcss.com)
