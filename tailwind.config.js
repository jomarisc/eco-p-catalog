// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    // Add any other paths where your Tailwind classes are used
  ],
  theme: {
    extend: {
      fontFamily: {
        // This will make 'Noto Sans' the default sans-serif font throughout your project
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};