# Campus Go

A modern, responsive web application for safe and reliable school transport services. Built with React, TypeScript, and Tailwind CSS, Campus Go provides parents with peace of mind and children with a fun riding experience.

## 🎯 Overview

Campus Go is a comprehensive platform that connects parents and students with reliable school transportation services. The application features a modern UI with interactive components, smooth animations, and a seamless user experience.

## ✨ Features

- **Hero Section**: Eye-catching landing section with call-to-action buttons and animated illustrations
- **Services**: Comprehensive overview of transportation services offered
- **How It Works**: Step-by-step guide explaining the booking process
- **Testimonials**: Real user feedback and success stories
- **Contact Section**: Easy-to-use contact form for inquiries
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Built-in theme switching capabilities
- **Smooth Animations**: Engaging animations and transitions throughout the app

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Frontend Framework**: [React](https://react.dev/) - A JavaScript library for building user interfaces
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript (97.3% of codebase)
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Routing**: [React Router](https://reactrouter.com/) - Client-side routing
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest) - Server state management
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Efficient form handling
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Styling Utilities**: [clsx](https://github.com/lukeed/clsx) - Conditional className utility
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Services.tsx    # Services showcase
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Testimonials.tsx # User testimonials
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   ├── NavLink.tsx     # Navigation link component
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static files
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dawoodmdbr/campus-go.git
   cd campus-go
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or with bun
   bun run dev
   ```

   The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or with bun
bun run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
# or with bun
bun run deploy
```

## 📱 Components

### Header
Navigation component with smooth scrolling to different sections of the page.

### Hero Section
The main landing section featuring:
- Eye-catching headline and subheading
- Call-to-action buttons ("Book a Ride" and "Learn More")
- Animated hero illustration
- Confetti animation on button click
- Smooth scroll behavior

### Services
Displays key services and features of the transportation platform.

### How It Works
Step-by-step guide showing users how to book and use Campus Go services.

### Testimonials
User testimonials and ratings showcasing customer satisfaction.

### Contact
A user-friendly contact form for inquiries and support requests.

### Footer
Footer with links, social media, and additional information.

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom animations and configurations:

- Custom color schemes and gradients
- Responsive breakpoints (mobile-first approach)
- Smooth animations and transitions
- Dark mode support via [next-themes](https://github.com/pacocoursey/next-themes)

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run predeploy` | Run build before deployment |
| `npm run deploy` | Deploy to GitHub Pages |

## 🌐 Deployment

This project is configured to deploy to GitHub Pages. The `basename` in the router is set to `/campus-go/` to work with GitHub Pages hosting.

To deploy your own version:
1. Update the repository name if different from `campus-go`
2. Run `npm run deploy`
3. Your site will be available at `https://yourusername.github.io/campus-go/`

## 🔧 Configuration

### Vite Configuration
Located in `vite.config.ts` - configured for React with SWC for faster builds.

### Tailwind Configuration
Located in `tailwind.config.ts` - includes custom theme extensions and animations.

### TypeScript
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Build tool settings

## 📦 Dependencies Overview

- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Animations**: Tailwind CSS animations with custom configurations
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack React Query for server state
- **Routing**: Client-side routing with React Router
- **Notifications**: Sonner for toast notifications

## 🌟 Code Quality

- **TypeScript**: Full type safety across the codebase (97.3%)
- **ESLint**: Code linting with ESLint configuration
- **CSS**: 1.5% of the codebase for custom styles

## 📄 License

This project is open source. Check the repository for license details.

## 👤 Author

**Dawood Malik**
- GitHub: [@dawoodmdbr](https://github.com/dawoodmdbr)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or feedback, please open an issue on the [GitHub repository](https://github.com/dawoodmdbr/campus-go/issues).

---

**Made with ❤️ for safe school transportation**
