const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        0: "0 0 auto",
      },
      backgroundImage: {
        "personal-map":
          "url('https://nextui-docs-v2.vercel.app/images/album-cover.png')",
      },
      height: {
        "half-screen": "50vh",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
