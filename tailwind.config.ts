import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        harbor: {
          DEFAULT: "#2872BE", // Light Blue (theme)
          light: "#4A94D6",
          dark: "#1B5590",
        },
        route: {
          DEFAULT: "#3FA0F0", // Bright Sky Blue
          light: "#6DBBF7",
        },
        sail: {
          DEFAULT: "#B8BCC2", // Silver Sail
          light: "#DCDEE2",
        },
        manifest: "#F6F7F9", // Manifest White (page background)
        signal: {
          DEFAULT: "#C97A3D", // Signal Copper accent
          light: "#DE9860",
          dark: "#A6602C",
        },
        ink: "#10151C",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "horizon-gradient":
          "linear-gradient(180deg, #EAF3FC 0%, #DCEBFA 55%, #CFE4F7 100%)",
      },
      keyframes: {
        "route-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "marker-move": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "route-draw": "route-draw 2.4s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
