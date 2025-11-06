# EazyReach - Project Structure

## 📁 Folder Structure (Industry Standard)

```
src/
├── components/          # All React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   │   ├── CookieConsent.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   │   ├── HeroSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── index.ts
│   └── ui/             # Reusable UI components
│       ├── Button.tsx
│       ├── FeatureCard.tsx
│       ├── LogoMarquee.tsx
│       └── index.ts
├── constants/          # Application constants & data
│   ├── faqs.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   └── logos.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # CSS files
│   └── globals.css
├── hooks/              # Custom React hooks (future)
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── vite-env.d.ts     # Vite type definitions
```

## 🎯 Benefits of This Structure

### 1. **Separation of Concerns**
- **Components**: Organized by purpose (layout, sections, ui)
- **Constants**: All static data in one place
- **Types**: Centralized type definitions
- **Styles**: Global styles separated from components

### 2. **Scalability**
- Easy to add new sections or components
- Clear hierarchy makes navigation simple
- Team members can work on different sections without conflicts

### 3. **Maintainability**
- Small, focused files (single responsibility)
- Easy to locate and modify specific features
- Reusable components (Button, FeatureCard, etc.)

### 4. **Developer Experience**
- Index files for clean imports
- TypeScript for type safety
- Consistent naming conventions

## 📦 Component Categories

### Layout Components (`components/layout/`)
Persistent UI elements that appear across multiple pages
- CookieConsent
- Footer
- (Future: Header, Navbar, Sidebar)

### Section Components (`components/sections/`)
Major page sections with specific purposes
- HeroSection - Landing hero with CTA
- DemoSection - Interactive demo
- SocialProofSection - Stats & logos
- FeaturesSection - Feature cards
- PricingSection - Pricing tiers
- TestimonialsSection - Customer reviews
- FAQSection - Accordion FAQ

### UI Components (`components/ui/`)
Reusable, presentational components
- Button - Styled button with variants
- FeatureCard - Feature display card
- LogoMarquee - Animated logo carousel

## 🔄 Import Pattern

```typescript
// Clean imports using index files
import { Button, FeatureCard } from './components/ui';
import { HeroSection, FeaturesSection } from './components/sections';
import { FAQS, PRICING_TIERS } from './constants';
```

## 🚀 Future Enhancements

### Ready to add:
- `hooks/` - Custom hooks (useLocalStorage, useMediaQuery, etc.)
- `utils/` - Helper functions
- `services/` - API calls
- `contexts/` - React Context providers
- `pages/` - For multi-page apps
- `assets/` - Images, icons, fonts

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `PRICING_TIERS`)
- **Types**: PascalCase (e.g., `PricingTier`)
- **Files**: Match component name

## 🛠️ Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```
