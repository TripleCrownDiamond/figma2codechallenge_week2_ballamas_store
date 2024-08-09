import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Variable', 'sans-serif'],
        chillax: ['Chillax Variable', 'sans-serif'],
      },
      colors: {
        white: 'var(--b-white)',
        lightGray: 'var(--b-light-gray)',
        gray: 'var(--b-gray)',
        darkGray: 'var(--b-dark-gray)',
        dark: 'var(--b-dark)',
        green: 'var(--b-green)',
        purple: 'var(--b-purple)',
        ocean: 'var(--b-ocean)',
        olive: 'var(--b-olive)',
      },
      letterSpacing: {
        tighter: '-0.04rem',
      },
      fontSize: {
        'custom-10': '10px',
        'custom-42': '42px',
      },
      lineHeight: {
        'custom-12': '12px',
        'custom-44': '44px',
      }
    },
  },
  plugins: [],
};
export default config;
