/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    colors: {
      black: '#263238',
      dgrey: '#4D4D4D',
      grey: '#717171',
      lgrey: '#89939E',
      greyblue: '#ABBED1',
      silver: '#F5F7FA',
      white: '#FFFFFF',
      primary: '#4CAF4F',
      secondary: '#263238',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    fontSize: {
      xsm: '0.5rem',
      sm: '0.8rem',
      base: '0.9rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}

