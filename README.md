# Jabez Mageto - Portfolio Website 🚀

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the work and skills of Jabez Mageto, a Full-Stack Software Engineer.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Jabez+Mageto+Portfolio)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and responsive layout
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 📱 **Mobile-First** - Fully responsive across all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎯 **Interactive Sections** - Smooth scrolling and animations
- 📊 **Skills Visualization** - Dynamic skill level indicators
- 💼 **Project Showcase** - Featured projects with live demos
- 📄 **Resume Integration** - Downloadable PDF resume
- 📧 **Contact Form** - Direct contact functionality
- 🔍 **SEO Optimized** - Proper meta tags and structure

## 🛠️ Built With

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jabez-mageto-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Resume.tsx      # Resume section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🌐 Deployment

This project is configured for easy deployment on multiple platforms:

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yourrepo)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the framework and deploy
3. Configuration is included in `vercel.json`

### Netlify
1. Connect your repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy automatically on push to main branch

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Bio and experience  
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Resume.tsx` - Work experience and education
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors: Modify Tailwind colors in `tailwind.config.js`
- Typography: Update font settings in `src/index.css`
- Components: Customize individual component styles

### Content
- Images: Replace placeholder images in `public/` directory
- Resume: Add your resume PDF to `public/resume.pdf`
- Favicon: Replace `public/vite.svg` with your icon

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 200KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

**Jabez Mageto**
- Email: jabezmageto78@gmail.com
- Phone: +254 768 396296  
- Location: Nairobi, Kenya
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool  
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide React](https://lucide.dev/) - Icon Library
- [Vercel](https://vercel.com/) - Deployment Platform

---

⭐ **Star this repository if it helped you build your own portfolio!**