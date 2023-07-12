/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: 'var(--font-lora)',
        ubuntu: 'var(--font-ubuntu)',
        seaweedScript: 'var(--font-seaweedScript)',
      },
      colors: {
        primary: '#2A0044',
        secondary: '#504D4D',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg.png')",
      }
    },
    fontSize: {
      sm: '1.375rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '1.875rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.125rem',
      '6xl': '3.75rem',
      '7xl': '4rem',
      '8xl': '6rem',
    },
  },
  plugins: [],
};
