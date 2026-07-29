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
      },
    },
  },
  plugins: [],
};

export default config;
