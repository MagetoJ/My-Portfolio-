# Deployment Guide for Jabez Mageto Portfolio

This portfolio is built with React, TypeScript, and Vite, and is ready to deploy on various platforms.

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## 🌐 Vercel Deployment

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yourrepo)

### Manual Deployment
1. Install Vercel CLI: `npm install -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

### Vercel Configuration
The project includes a `vercel.json` configuration file:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (auto-detected)

## 🎯 Netlify Deployment

### Drag & Drop Deployment
1. Run `npm run build` locally
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Git-based Deployment
1. Connect your Git repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Netlify Configuration
The project includes a `netlify.toml` configuration file with:
- Build settings
- SPA redirects
- Security headers
- Asset caching

## 🐳 Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Environment Variables

No environment variables are required for the basic setup. If you need to add any:

1. Create `.env.local` for local development
2. Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)
3. Configure in your deployment platform

## 📝 Build Output

After running `npm run build`, you'll get:
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS and JS bundles
- All assets are hashed for optimal caching

## ⚡ Performance Optimizations

- Vite for fast builds and HMR
- Tree shaking for smaller bundles
- Asset optimization
- Proper caching headers (Netlify)
- Production-ready builds

## 🔍 Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (>=16)
2. **Assets not loading**: Ensure correct base URL in config
3. **404 on refresh**: SPA redirects are configured in `netlify.toml`

### Build Verification:
```bash
npm run build && npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 📊 Bundle Analysis

To analyze bundle size:
```bash
npm run build -- --analyzer
```