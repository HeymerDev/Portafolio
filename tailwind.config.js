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
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "night"],
  },
};

