import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f0ff",
          100: "#e4e4ff",
          200: "#ccccff",
          300: "#a8a8fc",
          400: "#8080f8",
          500: "#6257f2",
          600: "#5139e6",
          700: "#4229cc",
          800: "#3621a6",
          900: "#2e1d84",
          950: "#1c1054",
        },
        dark: "#0D0B1E",
        surface: "#F7F7FB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
