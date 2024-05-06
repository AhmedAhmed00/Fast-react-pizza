/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace'
    },

    extend: {
      // we can extend the color pallete
      // colors: {
      //   pizza: '#fff'
      // }
      height: {
        screen: "100dvh"
      }

    },
  },
  plugins: [],
}