/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "njere-blue": "var(--njere-blue)",
        "njere-teal": "var(--njere-teal)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
      },
      
    },
  },
  plugins: [],
};
