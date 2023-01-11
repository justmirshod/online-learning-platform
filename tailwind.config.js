/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: "#503E9D",
        orange: "#FB6D3A",
        green: "#6FD181",
        dark: "#181B1A",
        "purple-light": "#6553B2",
        gray: "#9D92CB",
        "gray-light": "#F6F6F5",
        "purple-blur": "rgba(60, 17, 134, 0.3)",
      },
    },
  },
  plugins: [],
};
