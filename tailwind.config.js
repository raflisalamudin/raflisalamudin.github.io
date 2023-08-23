/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
