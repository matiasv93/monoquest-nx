/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{ts,tsx}', // All components in this lib
    '../../apps/**/*.{ts,tsx}', // All consuming apps
    '../../libs/**/*.{ts,tsx}', // Other libraries
  ],
  theme: {
    extend: {
      // You can define your design tokens here
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#3b82f6',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
