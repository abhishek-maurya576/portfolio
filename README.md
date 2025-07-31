# 🚀 Modern Portfolio Website

A cutting-edge, professional portfolio website featuring **Liquid Glass Morphism** design, built with React, Vite, and styled-components. This portfolio showcases projects, skills, and professional experience with a stunning modern interface that adapts beautifully to any device.

## ✨ Features

### 🎨 **Modern Design System**
- **Liquid Glass Morphism** - Cutting-edge glass morphism design throughout
- **Advanced Gradient System** - Beautiful mesh gradients and color transitions  
- **Enhanced Typography** - Professional font scaling with Inter & JetBrains Mono
- **Comprehensive Color Palette** - 50+ color variations for light/dark themes
- **Modern Shadow System** - Multi-layered shadows for depth and dimension

### 🌟 **User Experience**
- 🌓 **Smart Theme System** - Seamless dark/light mode with enhanced colors
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Smooth Animations** - Framer Motion powered interactions
- 🎯 **Interactive Elements** - Hover effects and micro-interactions
- ♿ **Accessibility** - Focus states and reduced motion support

### 🔧 **Advanced Components**
- 🌌 **3D Background** - Three.js powered starfield with particle effects
- 📄 **Smart Resume Viewer** - Modal preview with download functionality
- 🖼️ **Enhanced Project Cards** - Glass morphism cards with interactive elements
- 📊 **Skills Visualization** - Modern skill categories with glass effects
- 🔗 **Social Integration** - Animated social media links
- 📧 **Contact System** - Professional contact form and floating elements

### 🎪 **Interactive Features**
- **Floating Social Icons** - Always accessible social media links
- **Floating Email Button** - Quick contact access
- **Typed Text Animation** - Dynamic text effects
- **Particle Background** - Interactive particle system
- **Glass Navigation** - Backdrop blur navigation with smooth transitions

## 🛠️ Tech Stack

### **Frontend Framework**
- **React.js 18+** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **React Router** - Client-side routing with smooth transitions

### **Styling & Animation**
- **Styled Components** - CSS-in-JS with theme support and dynamic styling
- **Framer Motion** - Professional animations and micro-interactions
- **CSS Grid & Flexbox** - Modern layout systems for responsive design

### **3D & Visual Effects**
- **Three.js** - 3D graphics and WebGL rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **TSParticles** - Interactive particle system

### **UI/UX Enhancements**
- **React Icons** - Comprehensive icon library
- **React Intersection Observer** - Scroll-triggered animations
- **Typed.js** - Dynamic text typing effects

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **Vite Plugins** - Enhanced development experience

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control

### **Quick Start**

1. **Clone the repository**
```bash
git clone https://github.com/abhishek-maurya576/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173/portfolio`
   - The app will automatically reload when you make changes

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build locally

# Production
npm run build        # Build for production
npm run deploy       # Deploy to GitHub Pages

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### **Building for Production**

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized and ready for deployment.

### **Deployment Options**

#### **GitHub Pages (Recommended)**
```bash
npm run deploy
```
This will build the project and deploy it to the `gh-pages` branch automatically.

#### **Vercel**
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

#### **Netlify**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── portfolio/         # GitHub Pages assets
│   └── resume.pdf         # Resume file
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AnimatedBackground.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── FloatingEmail.jsx
│   │   ├── FloatingSocial.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ProfileSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ResumeButton.jsx
│   │   ├── ResumeModal.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── TypedText.jsx
│   ├── pages/             # Page components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── styles/            # Styling system
│   │   ├── GlobalStyles.js    # Global CSS and utilities
│   │   └── theme.js           # Theme configuration
│   ├── App.jsx            # Main app component
│   ├── main.jsx          # Entry point
│   └── routes.jsx        # Route configurations
├── .gitignore
├── package.json
├── vite.config.js        # Vite configuration
└── README.md
```

## 🎨 Design System

### **Color Palette**
- **50+ Color Variations** - Comprehensive color system for both themes
- **Smart Gradients** - Hero, primary, accent, and mesh gradients
- **Glass Morphism Colors** - Transparent backgrounds with proper opacity

### **Typography Scale**
- **Font Sizes**: xs (12px) → 7xl (72px)
- **Font Weights**: 100-900 with optimal loading
- **Letter Spacing**: Carefully tuned for readability

### **Spacing System**
- **Consistent Scale**: 1px → 128px following design principles
- **Responsive Spacing**: Adapts to different screen sizes
- **Semantic Naming**: Easy to understand and maintain

### **Component Architecture**
- **Modular Design** - Reusable and maintainable components
- **Theme Integration** - All components support theme switching
- **Responsive First** - Mobile-first approach with breakpoints
- **Accessibility** - WCAG compliant with proper focus management

## 🌟 Key Features Breakdown

### **Liquid Glass Morphism**
- Backdrop blur effects with CSS `backdrop-filter`
- Layered transparency for depth
- Subtle borders and shadows
- Smooth hover transitions

### **Advanced Animations**
- **Framer Motion** powered page transitions
- **Scroll-triggered** animations with Intersection Observer
- **Micro-interactions** for enhanced user experience
- **Performance optimized** with `will-change` and GPU acceleration

### **Responsive Design**
- **Mobile-first** approach with progressive enhancement
- **Flexible Grid** systems using CSS Grid and Flexbox
- **Adaptive Typography** that scales with viewport
- **Touch-friendly** interactions for mobile devices

## 🔧 Customization

### **Themes**
Edit `src/styles/theme.js` to customize:
- Colors and gradients
- Typography scale
- Spacing system
- Border radius values
- Shadow definitions

### **Components**
All components are built with styled-components and accept theme props:
```jsx
const CustomComponent = styled.div`
  background: ${({ theme }) => theme.glass.background};
  color: ${({ theme }) => theme.text};
`;
```

### **Content**
Update personal information in:
- `src/pages/Home.jsx` - Hero section content
- `src/components/ProjectsSection.jsx` - Project data
- `src/components/SkillsSection.jsx` - Skills and certifications

## 📱 Browser Support

- **Chrome** 88+ (full support)
- **Firefox** 87+ (full support)
- **Safari** 14+ (full support)
- **Edge** 88+ (full support)

*Note: Glass morphism effects require modern browsers with backdrop-filter support*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Maurya**
- GitHub: [@abhishek-maurya576](https://github.com/abhishek-maurya576)
- LinkedIn: [abhishekmaurya9118](https://www.linkedin.com/in/abhishekmaurya9118/)
- Email: maury972137@gmail.com

---

⭐ **Star this repository if you found it helpful!**
