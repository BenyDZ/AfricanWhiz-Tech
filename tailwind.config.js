/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7dce94",
      },
      backgroundImage:{
        'hero-view' : "url('/images/HEROVIEW_RESPONSIVE.png')",
        'hero_mobile_circle' : "url('/images/circle.png')",
      }
    },
  },
  plugins: [],
};
