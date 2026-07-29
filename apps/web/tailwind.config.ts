import type { Config } from "tailwindcss";

// Official Chosen Visuals brand palette, confirmed from the brand guide PDF.
// Every component reads from these tokens, so the whole site re-themes from this one file.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cv-navy": "#001B60",
        "cv-gold": "#F8A328",
        "cv-cream": "#F8EEE1",
        "brand-blue": "#0052FF", // Main vibrant blue for primary buttons
        "brand-orange": "#FF6B00", // Bright orange for logo swoosh and accents
        "brand-navy": "#0A1128", // Very dark navy/black for headings
        "brand-gray": "#F4F7F9", // Light gray for app backgrounds
        "brand-border": "#E2E8F0", // Border color
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
