import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      dark: {
        layout: {
        }, // dark theme layout tokens
        colors: {
          background: "#111111",
          foreground: "#ECEDEE",
          primary: {
            foreground: "#111111",
            DEFAULT: "#006FEE",
          },
        },
      },
    }
  })],
}
