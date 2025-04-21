// tailwind.config.ts or .js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your files are scanned for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        customBrown: "#3d0f03", // Add your custom color
      },
      fontFamily: {
        spartan: ["'League Spartan'", "sans-serif"],
        manrope: ["'Manrope'", "sans-serif"],
        dMSerifDisplay: ["'DM Serif Display'", "serif"],

      },
    },
  },
  plugins: [],
};

export default config;
