const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./pliki-zrodlowe/**/*.{njk,html,md}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: [
          'now',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      colors: {
        czerwony: "#d40d07"
      }
    },
  },
  plugins: [],
}