import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['"Poiret One"', '"Metropolis"', "Arial", "Helvetica", "sans-serif"],
      },
      animation: {
        cloth: "cloth 3s ease-in-out infinite",
        slide: "slide 1s ease-out forwards",
      },
      keyframes: {
        cloth: {
          "0%, 100%": { transform: "translateY(5px) rotate(1deg)" },
          "50%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        slide: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
