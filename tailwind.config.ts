import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1E1E2E",
        darkPurple: "#3B3B58",
      },
      backgroundImage: {
        'gradient-dark': "linear-gradient(to bottom, #1E1E2E, #3B3B58)",
      }
    },
  },
  plugins: [],
} satisfies Config;
