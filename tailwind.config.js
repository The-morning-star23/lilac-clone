/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'maya-stone': '#F9F7F2', // Background 
        'maya-charcoal': '#1F2937', // Text
        'maya-sage': '#7C8E7B', // Accent/Buttons
        'maya-clay': '#D4A373', // Secondary accent
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // Heading
        sans: ['var(--font-inter)', 'sans-serif'], // Body
      },
    },
  },
  plugins: [],
}