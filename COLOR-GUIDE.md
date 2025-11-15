# Accent Color System - Quick Reference

## 🎨 Global Color Control

Your entire app now uses **CSS variables** for accent colors. Change ONE place to update the whole app!

### Primary Control Point

**File:** `app/globals.css`

```css
:root {
  /* ✨ CHANGE THESE VALUES TO UPDATE THE ENTIRE APP ✨ */
  --accent-primary: #F4B400;      /* Main gold color */
  --accent-secondary: #F4B400;    /* Secondary accent */
  --accent-hover: #D4A000;        /* Darker gold for hover states */
  
  /* RGB values for opacity variations (244, 180, 0 for #F4B400) */
  --accent-rgb: 244, 180, 0;
}
```

## 🛠️ How to Change the Accent Color

### Option 1: Edit CSS Variables (Recommended)
1. Open `app/globals.css`
2. Update the values in `:root`:
   ```css
   --accent-primary: #YOUR_NEW_COLOR;
   --accent-secondary: #YOUR_NEW_COLOR;
   --accent-hover: #YOUR_DARKER_COLOR;
   --accent-rgb: R, G, B;  /* RGB values of your color */
   ```
3. Save and restart dev server

### Option 2: Use Tailwind Config
The Tailwind config (`tailwind.config.js`) also references these CSS variables:

```javascript
colors: {
  accent: {
    DEFAULT: 'var(--accent-primary)',
    primary: 'var(--accent-primary)',
    secondary: 'var(--accent-secondary)',
    hover: 'var(--accent-hover)',
  }
}
```

You can use Tailwind classes:
- `text-accent` or `text-accent-primary`
- `bg-accent` or `bg-accent-hover`
- `border-accent`

## 📝 What Was Changed

### Files Modified
- **28 component files** with 518 color replacements
- **24 files** updated for text contrast (white → black on gold backgrounds)

### Color Mapping
| Old Color (Pink/Magenta) | New Color (Gold) | Usage |
|--------------------------|------------------|-------|
| `#E91E63` | `#F4B400` | Primary accent |
| `#FF1744` | `#F4B400` | Secondary accent (gradients) |
| `#D4145A` | `#D4A000` | Hover states |
| `rgba(233, 30, 99, X)` | `rgba(244, 180, 0, X)` | Shadows & glows |

### Updated Components
- ✅ HeroSection - All badges, buttons, glows, text gradients
- ✅ PricingSection - Cards, borders, shadows, CTAs
- ✅ FeaturesSection - Icons, panels, interactive elements
- ✅ BuiltForSection - Badges, screenshots, buttons
- ✅ Header - Dropdown items, icons, hover states
- ✅ Footer - Tagline, CTA button, top glow
- ✅ Button component - All variants
- ✅ FloatingCTA - Gradient background
- ✅ All feature pages - CTAs and accents

## 🎯 Usage Examples

### In Tailwind Classes
```tsx
{/* Use CSS variable directly */}
<div className="bg-[#F4B400] text-black">Gold background</div>

{/* Or use Tailwind theme colors */}
<div className="bg-accent text-black">Also gold!</div>

{/* With opacity */}
<div className="bg-[#F4B400]/10 border-[#F4B400]/30">
  Transparent gold
</div>

{/* RGBA for shadows */}
<div className="shadow-[0_10px_30px_rgba(244,180,0,0.3)]">
  Gold shadow glow
</div>
```

### In Inline Styles (Framer Motion)
```tsx
<motion.div
  animate={{
    boxShadow: '0 20px 40px rgba(244, 180, 0, 0.4)'
  }}
>
  Animated gold glow
</motion.div>
```

## ⚠️ Important Notes

### Text Contrast
Gold backgrounds (`#F4B400`) use **BLACK text** for proper WCAG contrast:
```tsx
✅ CORRECT:   <button className="bg-[#F4B400] text-black">Click me</button>
❌ INCORRECT: <button className="bg-[#F4B400] text-white">Click me</button>
```

### Gradient Buttons
Most gradient buttons now use:
```tsx
className="bg-gradient-to-r from-[#F4B400] to-[#F4B400] text-black"
```

### Custom Utility Classes
Available in `globals.css`:
- `.bg-accent` - Background color using CSS variable
- `.text-accent` - Text color using CSS variable  
- `.border-accent` - Border color using CSS variable

## 🔄 To Revert or Try New Colors

### Want to try different colors?

1. **Purple Theme:**
   ```css
   --accent-primary: #9C27B0;
   --accent-hover: #7B1FA2;
   --accent-rgb: 156, 39, 176;
   ```

2. **Blue Theme:**
   ```css
   --accent-primary: #2196F3;
   --accent-hover: #1976D2;
   --accent-rgb: 33, 150, 243;
   ```

3. **Green Theme:**
   ```css
   --accent-primary: #4CAF50;
   --accent-hover: #388E3C;
   --accent-rgb: 76, 175, 80;
   ```

4. **Back to Original Pink:**
   ```css
   --accent-primary: #E91E63;
   --accent-hover: #D4145A;
   --accent-rgb: 233, 30, 99;
   ```

**Note:** After changing CSS variables, you may need to adjust text colors for contrast if the new color is dark.

## 🚀 Best Practices

1. **Always use CSS variables** when possible instead of hardcoded hex values
2. **Test text contrast** when changing to darker accent colors
3. **Update RGB values** to match your hex color for RGBA opacity effects
4. **Restart dev server** after changing CSS variables to see changes
5. **Check all button states** (hover, active) after color changes

## 📦 Files to Remember

- `app/globals.css` - Main color definitions
- `tailwind.config.js` - Tailwind theme colors
- `update-colors.ps1` - Script used for bulk color replacement (can run again if needed)

---

**Current Theme:** Premium Gold (#F4B400)  
**Text on Gold:** Black (#000000)  
**Last Updated:** Nov 15, 2025
