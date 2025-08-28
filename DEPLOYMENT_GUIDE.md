# Deployment Guide 🚀

This guide covers how to deploy the Jabez Mageto Portfolio website to various hosting platforms.

## ✅ Deployment-Ready Features

- ✅ **Vercel Configuration** - `vercel.json` configured
- ✅ **Netlify Configuration** - `netlify.toml` configured  
- ✅ **GitHub Actions** - Automated CI/CD pipeline
- ✅ **SPA Routing** - Proper redirects for single-page app
- ✅ **Build Optimization** - Production-ready builds
- ✅ **Static Assets** - All images and files properly served

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MagetoJ/My-Portfolio-)

**Manual Steps:**
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub: `https://github.com/MagetoJ/My-Portfolio-`
4. Vercel auto-detects React/Vite settings
5. Click "Deploy" - Done! 🎉

**Configuration:** Already set in `vercel.json`
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### 2. Netlify 🌐

**Manual Steps:**
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub account
4. Select repository: `MagetoJ/My-Portfolio-`
5. Settings auto-detected from `netlify.toml`
6. Click "Deploy site" - Done! 🎉

**Configuration:** Already set in `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"
  base = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages 📄

GitHub Actions workflow is already configured for automatic deployment:

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages` (auto-created by workflow)
4. Push to `main` branch triggers automatic deployment

### 4. Other Hosting Platforms

For platforms like **Render**, **Railway**, **Surge.sh**, etc.:

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Node Version:** 18.x or 20.x
4. **Install Command:** `npm install`

## 🛠️ Build Process

### Local Build Test
```bash
# Install dependencies
npm install

# Run build
npm run build

# Test production build locally
npm run preview
```

### Production Build Output
```
dist/
├── index.html          # Main HTML file
├── assets/            # Bundled CSS/JS files
│   ├── index-[hash].css
│   └── index-[hash].js
├── projects/          # Project screenshots
│   ├── lethashop.png
│   ├── cnj-safaris.png
│   ├── statbricks.png
│   └── big-fama.png
├── resume.pdf         # Resume file
└── _redirects        # SPA routing for Netlify
```

## 🔧 Environment Variables

No environment variables required for basic deployment. All configurations are in the codebase.

## 📊 Performance Optimization

The build is already optimized for production:

- ✅ **Code Splitting** - Automatic by Vite
- ✅ **Asset Optimization** - Images and assets optimized
- ✅ **CSS Purging** - Tailwind CSS purged in production
- ✅ **Tree Shaking** - Unused code removed
- ✅ **Compression** - Gzip compression enabled

## 🚨 Troubleshooting

### Common Issues:

**1. Build Fails**
```bash
npm ci          # Clean install
npm run build   # Try build again
```

**2. SPA Routing Issues**
- Ensure `_redirects` file exists in `public/`
- For Vercel: `vercel.json` handles this
- For Netlify: `netlify.toml` handles this

**3. Images Not Loading**
- Images in `public/` are copied to `dist/`
- Use paths like `/projects/image.png` (starting with `/`)

**4. Build Size Too Large**
- Current bundle: ~195KB (within limits)
- All major platforms support this size

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] All personal information updated in `src/utils/constants.ts`
- [ ] Resume PDF added to `public/resume.pdf`
- [ ] Project screenshots added to `public/projects/`
- [ ] Social media links updated
- [ ] Build passes locally (`npm run build`)
- [ ] All images load correctly in preview (`npm run preview`)

## 🎯 Live Examples

Once deployed, your portfolio will be available at:

- **Vercel**: `https://your-portfolio.vercel.app`
- **Netlify**: `https://your-portfolio.netlify.app`
- **GitHub Pages**: `https://magetoj.github.io/My-Portfolio-`

## 🆘 Need Help?

1. Check the build logs in your hosting platform
2. Verify all files are committed to GitHub
3. Ensure Node.js version compatibility (18.x or 20.x)
4. Test build locally first

---

**Happy Deploying! 🚀**