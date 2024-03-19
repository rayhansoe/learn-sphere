import type { Config } from "tailwindcss"

import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "avatar": "-4px 4px 0px 0px rgba(0,33,78,1),-8px 8px 0px 0px rgba(0,22,54,1),-12px 12px 0px 0px rgba(255,245,123,1),-16px 16px 0px 0px rgba(249,244,217,1)",
        "avatar-dark": "-4px 4px 0px 0px rgba(0,33,78,1), -8px 8px 0px 0px rgba(0,22,54,1), -12px 12px 0px 0px rgba(255,245,123,1), -16px 16px 0px 0px rgba(255,218,0,1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config