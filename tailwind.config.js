/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        carbon: {
          DEFAULT: "#050505",
          50: "#EEEEEE",
          100: "#CDCDCD",
          200: "#A7A7A7",
          300: "#858585",
          400: "#646464",
          500: "#4C4C4C",
          600: "#323232",
          700: "#1D1D1D",
          800: "#101010",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
