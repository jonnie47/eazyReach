/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F4B400',
          primary: '#F4B400',
          secondary: '#F4B400',
          hover: '#D4A000',
        }
      }
    },
  },
  plugins: [],
};
