import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5EFE4",

        secondary: "#32675E",
        accent: "#E07E2E",
        primaryText: "#18181b",
      },
    },
  },
  plugins: [],
};
