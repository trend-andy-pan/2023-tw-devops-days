const { nextui } = require("@nextui-org/react");
const { DefinePlugin } = require("webpack");

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
        "personal-map": "url('./devopsRoadmap.svg')",
      },
      height: {
        "half-screen": "50vh",
      },
      backgroundPosition: {
        "top-20": "center top -5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    new DefinePlugin({
      "process.env.HASH_ROUTER": JSON.stringify(
        process.env.HASH_ROUTER || "false"
      ),
    }),
  ],
};
