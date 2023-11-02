// const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.vue',
  ],
  theme: {
    colors: ({colors}) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      lime: {
        a: 'rgb(215, 223, 9)',
        b: 'rgb(148, 197, 58)',
        c: 'rgb(92, 180, 70)',
        d: 'rgb(45, 104, 56)',
      },
      orange: {
        a: 'rgb(232, 146, 35)',
        b: 'rgb(222, 90, 45)',
        c: 'rgb(217, 33, 47)',
        d: 'rgb(176, 43, 52)',
      },
      sand: {
        a: 'rgb(189, 155, 109)',
        b: 'rgb(158, 123, 83)',
        c: 'rgb(110, 78, 41)',
        d: 'rgb(91, 59, 26)',
      },
      purple: {
        a: 'rgb(217, 35, 123)',
        b: 'rgb(194, 26, 93)',
        c: 'rgb(136, 44, 144)',
        d: 'rgb(144, 0, 95)',
      },
      blue: {
        a: 'rgb(90, 170, 226)',
        b: 'rgb(59, 113, 188)',
        c: 'rgb(56, 53, 146)',
        d: 'rgb(36, 28, 101)',
      },
    }),
    extend: {
      borderWidth: {
        'cell': '20px',
      },
    },
  },
  plugins: [],
}

