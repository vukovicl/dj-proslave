/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px', 
      },
    },
    extend: {
      colors: {
        'accent-gold': 'var(--color-accent-gold, #d4af37)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
