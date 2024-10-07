/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#028D3C",
      },
      fontFamily: {
        metropolis: ['Metropolis', 'sans-serif'],  // Add the Metropolis font here
      },
    },
  },
  plugins: [],
}

