/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        start: "#e18437",
        via: "#c04b10",
        end: "#8f3c13",
      },
    },
  },
  plugins: [],
};
