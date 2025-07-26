import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', "Roboto", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#00955e", // Verde do logo
          50: "#e6f7f0",
          100: "#ccefe1",
          200: "#99dfc3",
          300: "#66cfa5",
          400: "#33bf87",
          500: "#00af69",
          600: "#00955e", // Base
          700: "#007a4d",
          800: "#00603c",
          900: "#00452b",
        },
        secondary: {
          DEFAULT: "#26619c", // Azul lapislázuli
          50: "#e9f0f8",
          100: "#d3e1f1",
          200: "#a7c3e3",
          300: "#7ba5d5",
          400: "#4f87c7",
          500: "#3672b9",
          600: "#26619c", // Base
          700: "#1f5080",
          800: "#183e64",
          900: "#122d48",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#00955e",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "0.25rem",
        md: "0.2rem",
        sm: "0.15rem",
        xl: "0.375rem",
        "2xl": "0.5rem",
        "3xl": "0.75rem",
        full: "9999px",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
