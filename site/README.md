# OWASP Top 10 The Game

An interactive learning platform for mastering web security through hands-on challenges and gamified experiences. Built with Astro, React, and Tailwind CSS.

## 🎯 Overview

OWASP Top 10 The Game transforms complex web security concepts into engaging, interactive learning experiences. Users can practice real vulnerabilities in a safe environment, earn points, and compete on leaderboards while mastering the OWASP Top 10 vulnerabilities.

## ✨ Features

- **Interactive Challenges**: Hands-on exercises for each OWASP Top 10 vulnerability
- **Gamified Learning**: Points, achievements, and leaderboards to motivate learning
- **Comprehensive Resources**: Detailed explanations, video tutorials, and practice labs
- **Progress Tracking**: Monitor your learning journey and skill development
- **Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **Community Features**: Connect with other security learners and professionals

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **React**: For interactive components
- **TypeScript**: For type safety and better developer experience
- **ESLint & Prettier**: For code quality and formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/OWASPTop10TheGame.git
   cd OWASPTop10TheGame/site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
site/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Astro pages
│   │   ├── index.astro    # Homepage
│   │   ├── challenges.astro
│   │   ├── leaderboard.astro
│   │   ├── learn.astro
│   │   └── about.astro
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   └── types/             # TypeScript type definitions
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎮 OWASP Top 10 Vulnerabilities Covered

1. **Broken Access Control** - Advanced level challenges
2. **Cryptographic Failures** - Advanced level challenges  
3. **Injection** - Beginner level challenges
4. **Insecure Design** - Intermediate level challenges
5. **Security Misconfiguration** - Intermediate level challenges
6. **Vulnerable and Outdated Components** - Intermediate level challenges
7. **Identification and Authentication Failures** - Intermediate level challenges
8. **Software and Data Integrity Failures** - Advanced level challenges
9. **Security Logging and Monitoring Failures** - Intermediate level challenges
10. **Server-Side Request Forgery** - Advanced level challenges

## 🎨 Design System

The project uses a custom design system built on Tailwind CSS with:

- **Primary Colors**: Blue gradient for main actions and branding
- **Semantic Colors**: 
  - Success (green) for positive actions
  - Warning (yellow) for intermediate difficulty
  - Danger (red) for high-risk vulnerabilities
- **Typography**: Inter for body text, JetBrains Mono for code
- **Components**: Consistent button styles, cards, and navigation elements

## 🔧 Configuration

### Astro Configuration
The project is configured with:
- Tailwind CSS integration
- React integration for interactive components
- TypeScript support
- SEO optimization
- Performance optimizations

### Tailwind Configuration
Custom theme with:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Component-specific utilities

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Astro and configure the build
3. Deploy!

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OWASP](https://owasp.org/) for the Top 10 framework
- [Astro](https://astro.build/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- All contributors and community members

## 📞 Contact

- **Email**: contact@owasp-top10-game.com
- **GitHub**: [https://github.com/owasp-top10-game](https://github.com/owasp-top10-game)
- **Discord**: Join our community server

---

**Happy Learning! 🛡️💻**
