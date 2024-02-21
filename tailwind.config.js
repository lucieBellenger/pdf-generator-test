/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "blue-grey": {
          800: "#2a3e49",
        },
        "vibrant-blue": "#3E57FF",
        grey: {
          200: "#a5a7a8",
          600: "#757575",
          900: "#212121",
        },
        white: "#f5f5f5",
      },
      fontSize: {
        xxxs: ["8px", "16px"],
        xxs: ["10px", "16px"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        "@page": {
          size: "A4",
          margin: "10px",
        },
      };

      addUtilities(newUtilities, ["print"]);
    },
  ],
};
