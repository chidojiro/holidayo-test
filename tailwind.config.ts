import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        27: '6.75rem',
      },
      height: {
        23: '5.75rem',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#0C0C26',
      cyan: {
        '25': '#F1FEFF',
        '100': '#CFFAFE',
        '400': '#04CEDB',
        '500': '#06B6D4',
        '800': '#155E75',
      },
      gray: {
        '100': '#F3F4F6',
        '200': '#E5E7EB',
        '300': '#D1D5DB',
        '400': '#9CA3AF',
        '500': '#6B7280',
        '600': '#4B5563',
        '900': '#111827',
      },
      red: {
        500: '#EF4444',
      },
    },
  },
  plugins: [],
};
export default config;
