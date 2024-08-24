import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '847px'
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1420px",
      }
    },
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#555555",
        base: "#F8F1E6",
        third: "#f97316 "
      }
    },
  },
  plugins: [],
};
export default config;
