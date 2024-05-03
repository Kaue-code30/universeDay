import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animations: {
        'moveModal': 'moveModal 1s ease-in-out forwards',
      },
      keyframes: {
        moveModal: {
          from: {
            transform: 'translateY(-20%)',
          },
          to: {
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
