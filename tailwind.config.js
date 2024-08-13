/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        customBlue: "#00599b", customLightBlue: "#2F3367",
      },
    },
  },
  plugins: [],
};
