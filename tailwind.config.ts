import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '960px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1600px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'move-from-left': 'move-from-left 0.2s ease-out',
        'move-whatsapp': 'move-whatsapp 0.15s ease-out',
        'move-email': 'move-email 0.15s ease-out',
        'move-gitHub': 'move-gitHub 0.15s ease-out',
      },
      keyframes: {
        'move-from-left': {
          '0%': { opacity: '0.2', transform: 'translateX(-100%)' },
          '25%': { opacity: '0.4', transform: 'translateX(-75%)' },
          '50%': { opacity: '0.6', transform: 'translateX(-50%)' },
          '75%': { opacity: '0.8', transform: 'translateX(-25%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'move-whatsapp': {
          '0%': { opacity: '0.05', transform: 'translateX(100%)' },
          '25%': { opacity: '0.05', transform: 'translateX(75%)' },
          '50%': { opacity: '0.05', transform: 'translateX(50%)' },
          '75%': { opacity: '0.05', transform: 'translateX(25%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'move-email': {
          '0%': { opacity: '0.05', transform: 'translateX(100%) translateY(-100%)' },
          '25%': { opacity: '0.05', transform: 'translateX(75%) translateY(-75%)' },
          '50%': { opacity: '0.05', transform: 'translateX(50%) translateY(-50%)' },
          '75%': { opacity: '1', transform: 'translateX(25%) translateY(-25%)' },
          '100%': { opacity: '1', transform: 'translateX(0) translateY(-0%)' },
        },
        'move-gitHub': {
          '0%': { opacity: '0.05', transform: 'translateX(100%) translateY(-100%)' },
          '25%': { opacity: '0.05', transform: 'translateX(75%) translateY(-75%)' },
          '50%': { opacity: '0.05', transform: 'translateX(50%) translateY(-50%)' },
          '75%': { opacity: '1', transform: 'translateX(25%) translateY(-25%)' },
          '100%': { opacity: '1', transform: 'translateX(0) translateY(-0%)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
