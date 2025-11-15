# 🎨 How to Change Accent Color

## Quick Start - Change Color in 2 Places

To change the accent color from **Gold (#F4B400)** to any color, update **TWO files**:

### 1️⃣ Update `tailwind.config.js`

**File:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: '#YOUR_COLOR',      // ← Change this
        primary: '#YOUR_COLOR',       // ← Change this  
        secondary: '#YOUR_COLOR',     // ← Change this
        hover: '#DARKER_SHADE',       // ← Change this
      }
    }
  },
}
```

### 2️⃣ Update `app/globals.css`

**File:** `app/globals.css`

```css
:root {
  --accent-primary: #YOUR_COLOR;     /* ← Change this */
  --accent-secondary: #YOUR_COLOR;   /* ← Change this */
  --accent-hover: #DARKER_SHADE;     /* ← Change this */
  --accent-rgb: R, G, B;             /* ← RGB values */
}
```

### 3️⃣ Restart Dev Server

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 🎨 Color Examples

### Purple Theme
**tailwind.config.js:**
```javascript
accent: {
  DEFAULT: '#9C27B0',
  primary: '#9C27B0',
  secondary: '#9C27B0',
  hover: '#7B1FA2',
}
```

**globals.css:**
```css
--accent-primary: #9C27B0;
--accent-secondary: #9C27B0;
--accent-hover: #7B1FA2;
--accent-rgb: 156, 39, 176;
```

### Blue Theme
**tailwind.config.js:**
```javascript
accent: {
  DEFAULT: '#2196F3',
  primary: '#2196F3',
  secondary: '#2196F3',
  hover: '#1976D2',
}
```

**globals.css:**
```css
--accent-primary: #2196F3;
--accent-secondary: #2196F3;
--accent-hover: #1976D2;
--accent-rgb: 33, 150, 243;
```

### Green Theme
**tailwind.config.js:**
```javascript
accent: {
  DEFAULT: '#4CAF50',
  primary: '#4CAF50',
  secondary: '#4CAF50',
  hover: '#388E3C',
}
```

**globals.css:**
```css
--accent-primary: #4CAF50;
--accent-secondary: #4CAF50;
--accent-hover: #388E3C;
--accent-rgb: 76, 175, 80;
```

### Original Pink (Back to Original)
**tailwind.config.js:**
```javascript
accent: {
  DEFAULT: '#E91E63',
  primary: '#E91E63',
  secondary: '#E91E63',
  hover: '#D4145A',
}
```

**globals.css:**
```css
--accent-primary: #E91E63;
--accent-secondary: #E91E63;
--accent-hover: #D4145A;
--accent-rgb: 233, 30, 99;
```

---

## 📝 Complete Step-by-Step Example

Let's change from Gold to **Cyan (#00BCD4)**:

### Step 1: Open `tailwind.config.js`
Find the `accent` section and change:
```javascript
accent: {
  DEFAULT: '#00BCD4',    // Cyan
  primary: '#00BCD4',    // Cyan
  secondary: '#00BCD4',  // Cyan
  hover: '#0097A7',      // Darker cyan
}
```

### Step 2: Open `app/globals.css`
Find the `:root` section and change:
```css
:root {
  --accent-primary: #00BCD4;
  --accent-secondary: #00BCD4;
  --accent-hover: #0097A7;
  --accent-rgb: 0, 188, 212;
}
```

### Step 3: Save both files

### Step 4: Restart dev server
```bash
npm run dev
```

### Step 5: Refresh browser
Your entire app is now cyan!

---

## 🛠️ Where Colors Are Used

The accent color appears in:
- ✅ Hero section badges and buttons
- ✅ Navigation header (hover states)
- ✅ Feature cards (borders, glows, icons)
- ✅ Pricing section (cards, badges, CTAs)
- ✅ Footer (tagline, CTA button, glow)
- ✅ All buttons (primary, secondary, outline)
- ✅ Form elements
- ✅ Badges and labels
- ✅ Shadows and glows
- ✅ Border highlights

---

## ⚠️ Important Notes

### Why Two Places?
- **Tailwind classes** (like `bg-accent`, `text-accent-hover`) use `tailwind.config.js`
- **CSS properties** and inline styles use `--accent-primary` CSS variables
- Both need to match for consistent colors

### Text Contrast
For **light accent colors** (gold, yellow, cyan, lime):
- Use **black text** on accent backgrounds
- Example: `bg-accent text-black`

For **dark accent colors** (purple, blue, red):
- Use **white text** on accent backgrounds
- Example: `bg-accent text-white`

### RGB Values
To calculate RGB from hex:
1. Use online tool: https://www.rapidtables.com/convert/color/hex-to-rgb.html
2. Or use browser DevTools color picker
3. Format as: `R, G, B` (no `rgb()`, just comma-separated)

---

## 🧪 Testing Your Color

After changing:
1. Check homepage hero section
2. Check pricing cards
3. Check navigation hover
4. Check footer CTA button
5. Check feature section icons

If any element doesn't update, you may need to clear cache:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📞 Need Help?

If colors don't update:
1. Make sure you updated **both** files
2. Make sure you **saved** both files
3. Make sure you **restarted** the dev server
4. Try clearing browser cache (Ctrl+Shift+R)
5. Try deleting `.next` folder and restarting

---

**Current Color:** Gold (#F4B400)  
**Last Updated:** Nov 15, 2025
