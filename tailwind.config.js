/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "lg": "1024px",
      "md": "800px",
      "sm": "640px",
    },
    extend: {},
  },
  plugins: [],
}

