/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#0073bb',
            secondary: '#ff9900',
            dark: '#232f3e',
        }
    }
  },
  plugins: [],
}