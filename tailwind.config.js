module.exports = {
  prefix: '',
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    themeVariants: ['post-office', 'sky-neutral']
  },
  variants: {
    // TODO: add or remove
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-multi-theme'),
  ],
};
