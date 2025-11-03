# Axio Ventures - Next.js Website

A modern, responsive website for Axio Ventures built with Next.js 14, TypeScript, and Tailwind CSS. Recreated from the original WordPress site with enhanced performance and modern architecture.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Custom Color Scheme** - Blue (#0073FF) & Green (#21B34A)
- 📱 **Fully Responsive** design
- ✨ **Framer Motion** animations
- 🎯 **TypeScript** for type safety
- 🚀 **Optimized Performance**
- 🎭 **Modern UI/UX** with smooth transitions
- 🔽 **Multi-level Dropdown Menus** (3 levels deep)
- 🔄 **Rotating Client Logos** carousel
- 📊 **Animated Statistics** counters
- 📍 **Timeline Component** for track record
- 🎨 **Gradient Backgrounds** and modern effects

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Google Fonts (Open Sans, Poppins, Rajdhani)

## Color Palette

- **Primary Blue:** #0073FF (hover: #0062dd)
- **Accent Green:** #21B34A (hover: #17b556)
- **Dark:** #1a1a1a
- **Text:** Professional contrast ratios for accessibility

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd axio-ventures-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
axio-ventures-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#2d4a8a',
    dark: '#1e3567',
    light: '#3d5a9a',
  },
  // ... more colors
}
```

### Fonts

Fonts are configured in `app/layout.tsx` using Next.js Font Optimization.

### Content

Update content in:
- `app/page.tsx` - Home page content
- `components/Header.tsx` - Navigation links
- `components/Footer.tsx` - Footer information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment.

## Features Overview

### Home Page Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Services Section** - Showcase of all services offered
3. **Stats Section** - Key metrics and achievements
4. **Why Choose Us** - Unique value propositions
5. **CTA Section** - Final call-to-action

### Components

- **Header** - Sticky navigation with mobile menu
- **Footer** - Company info, quick links, and contact details
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Axio Ventures. All rights reserved.

## Contact

For questions or support, contact:
- Email: info@axioventures.com
- Phone: +1 (234) 567-890
