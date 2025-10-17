/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
