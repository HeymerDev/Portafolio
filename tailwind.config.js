/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-1": "#3498db",
        "gradient-2": "#e74c3c",
        "gradient-3": "#27ae60",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateY(0)",
            "-webkit-transform": "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
            "-webkit-transform": "translateX(calc(-250px * 7))",
          },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "night"],
  },
};

