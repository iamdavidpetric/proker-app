/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      primary: {
        DEFAULT: '#1B263B',
      },
      secondary: {
        DEFAULT: '#778DA9',
      },
      success: {
        DEFAULT: '#40916c',
      },
      danger: {
        DEFAULT: '#ef233c',
      },
      warning: {
        DEFAULT: '#ffb703',
      },
    },
  },
  plugins: [],
};
//color-palette https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
