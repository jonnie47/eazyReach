// Example: How to use the new accent color system

/* ============================================
   METHOD 1: Using CSS Variables (Recommended)
   ============================================ */

// In Tailwind classes - Direct hex values
<button className="bg-[#F4B400] text-black hover:bg-[#D4A000]">
  Gold Button
</button>

// With opacity
<div className="bg-[#F4B400]/10 border-[#F4B400]/30">
  Transparent gold background
</div>

// RGBA for shadows
<div className="shadow-[0_10px_30px_rgba(244,180,0,0.3)]">
  Gold glow effect
</div>

/* ============================================
   METHOD 2: Using Tailwind Theme Colors
   ============================================ */

// These use the CSS variables from tailwind.config.js
<button className="bg-accent text-black hover:bg-accent-hover">
  Gold Button (using theme)
</button>

<div className="text-accent border-accent">
  Gold text and border
</div>

/* ============================================
   METHOD 3: Inline Styles (Framer Motion)
   ============================================ */

import { motion } from 'framer-motion';

<motion.div
  style={{
    background: '#F4B400',
    color: '#000000'
  }}
  whileHover={{
    boxShadow: '0 20px 40px rgba(244, 180, 0, 0.4)'
  }}
>
  Animated gold element
</motion.div>

/* ============================================
   METHOD 4: CSS Custom Properties
   ============================================ */

// In a CSS file or style tag
.my-custom-class {
  background-color: var(--accent-primary);
  color: #000;
  border: 2px solid var(--accent-primary);
  box-shadow: 0 10px 30px rgba(var(--accent-rgb), 0.3);
}

// With opacity using RGB values
.my-transparent-class {
  background-color: rgba(var(--accent-rgb), 0.1);
  border-color: rgba(var(--accent-rgb), 0.3);
}

/* ============================================
   CHANGING THE ACCENT COLOR GLOBALLY
   ============================================ */

// Open: app/globals.css
// Update the :root variables:

:root {
  --accent-primary: #FF5722;    // New color (e.g., Deep Orange)
  --accent-hover: #E64A19;      // Darker shade for hover
  --accent-rgb: 255, 87, 34;    // RGB values
}

// That's it! All components update automatically.

/* ============================================
   TEXT CONTRAST GUIDELINES
   ============================================ */

// LIGHT backgrounds (like gold) → Use BLACK text
<button className="bg-[#F4B400] text-black">Good contrast ✓</button>

// DARK backgrounds → Use WHITE text  
<div className="bg-black text-white">Good contrast ✓</div>

// Gold with white text = BAD contrast ✗
<button className="bg-[#F4B400] text-white">Poor contrast ✗</button>

/* ============================================
   COMMON PATTERNS IN YOUR APP
   ============================================ */

// 1. Gradient buttons
<button className="bg-gradient-to-r from-[#F4B400] to-[#F4B400] text-black">
  CTA Button
</button>

// 2. Glass panels with gold border
<div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-[#F4B400]/30 shadow-2xl shadow-[#F4B400]/20">
  Glass panel
</div>

// 3. Gold badges
<span className="bg-[#F4B400]/10 text-[#F4B400] px-4 py-2 rounded-full border border-[#F4B400]/30">
  Premium Badge
</span>

// 4. Hover glows
<div className="hover:shadow-[#F4B400]/50 transition-all">
  Hover for gold glow
</div>

// 5. Gold text highlights
<p className="text-gray-300">
  This is <span className="text-[#F4B400]">highlighted in gold</span>
</p>

/* ============================================
   TESTING DIFFERENT COLORS
   ============================================ */

// Just change these 3 values in app/globals.css:

// Purple theme:
--accent-primary: #9C27B0;
--accent-hover: #7B1FA2;
--accent-rgb: 156, 39, 176;

// Blue theme:
--accent-primary: #2196F3;
--accent-hover: #1976D2;
--accent-rgb: 33, 150, 243;

// Red theme:
--accent-primary: #F44336;
--accent-hover: #D32F2F;
--accent-rgb: 244, 67, 54;

// Green theme:
--accent-primary: #4CAF50;
--accent-hover: #388E3C;
--accent-rgb: 76, 175, 80;
