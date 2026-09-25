import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17120d",
        sand: "#efe0c2",
        cream: "#fbf7ee",
        amber: "#c98634",
        leaf: "#46583c",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 18, 10, .14)",
      },
    },
  },
  plugins: [],
};

export default config;
