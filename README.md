# Apex University — Landing Page

A modern, visually stunning university landing page redesigned and rebuilt as a Next.js + Tailwind CSS project, inspired by [jguni.in](https://jguni.in/).

## ✨ Design Highlights

- **Aesthetic**: Dark navy + warm gold — luxury academic feel
- **Typography**: Playfair Display (headlines) + DM Sans (body)
- **Animations**: CSS scroll-reveal, floating elements, staggered fade-ups, hero parallax circles
- **Interactions**: Program filter tabs, scroll-triggered reveals, hover card lifts
- **Responsive**: Fully mobile-first, works across all screen sizes

## 📁 Project Structure

```
apex-university/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + Tailwind imports
│   │   ├── layout.jsx           # Root layout with metadata
│   │   └── page.jsx             # Main page — assembles all sections
│   └── components/
│       ├── Navbar.jsx           # Sticky nav with mobile hamburger
│       ├── Hero.jsx             # Full-screen hero with animated bg + stats
│       ├── About.jsx            # About section with visual + feature cards
│       ├── Programs.jsx         # Filterable program cards grid
│       ├── Strengths.jsx        # Dark section with 8 strength cards
│       ├── Testimonials.jsx     # Alumni testimonials + featured alumni
│       ├── Partners.jsx         # Partner badges row
│       ├── CTA.jsx              # Admissions CTA with gradient bg
│       └── Footer.jsx           # 4-column footer with social icons
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🌐 Deploying to Vercel (Recommended for hosted link)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your hosted link is ready in ~1 minute

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | React framework with App Router |
| React | 18.x | UI library |
| Tailwind CSS | 3.x | Utility-first styling |
| DM Sans | Google Fonts | Body typography |
| Playfair Display | Google Fonts | Display/heading typography |

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0B1437` | Primary dark background, text |
| Navy Light | `#162050` | Secondary dark surfaces |
| Gold | `#D4A843` | Primary accent, CTAs |
| Gold Light | `#F0C060` | Hover states, highlights |
| Cream | `#FAF7F2` | Light background sections |

### Sections
1. **Admission Banner** — Top alert bar with gold background
2. **Navbar** — Fixed, scroll-aware, mobile hamburger
3. **Hero** — Full-screen, dark, animated circles + grid overlay
4. **Mission Strip** — Quick highlight bar
5. **About** — Two-column with visual grid + feature cards
6. **Programs** — Filter tabs + animated card grid (9 programs)
7. **Strengths** — Dark section with 8 feature cards
8. **Testimonials** — 3-column testimonial cards + alumni panel
9. **Partners** — Partner badge row
10. **CTA** — Full-width gradient with dual CTAs
11. **Footer** — 4-column with socials + copyright

## 📱 Responsive Breakpoints

- Mobile: `< 640px` — Single column, hamburger nav
- Tablet: `640px – 1024px` — 2-column grids
- Desktop: `> 1024px` — Full multi-column layouts

## ✅ Features Checklist

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Smooth scroll navigation
- [x] Scroll-triggered reveal animations
- [x] Interactive program filter tabs
- [x] Mobile hamburger menu
- [x] Sticky navbar with scroll shadow
- [x] Hover micro-interactions on cards
- [x] Animated hero section
- [x] Clean, structured component architecture
- [x] SEO-ready metadata in layout.jsx
