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
        green: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        earth: {
          50:  "#fdf8f0",
          100: "#faefd9",
          200: "#f3d9a8",
          300: "#e9bc6e",
          400: "#de9c3c",
          500: "#c97d1f",
          600: "#a86318",
          700: "#864c17",
          800: "#6c3d18",
          900: "#593318",
        },
        sky: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #052e16 0%, #065f46 40%, #0c4a6e 100%)",
        "section-gradient": "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
        "card-gradient": "linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
