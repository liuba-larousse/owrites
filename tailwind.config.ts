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
        navy: {
          DEFAULT: "#1a2744",
          deep: "#0f1a2e",
          light: "#243352",
        },
        orange: {
          DEFAULT: "#e8862a",
          light: "#f5a54b",
        },
        blue: {
          DEFAULT: "#4ba3c7",
          light: "#6dc0df",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Lora", "Georgia", "serif"],
      },
      borderRadius: {
        pill: "100px",
      },
    },
  },
  plugins: [],
};

export default config;
