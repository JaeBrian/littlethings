import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream-white': '#FFFFFF',
        'light-beige': '#ESE4E0',
        'med-beige': '#DACFC6',
        'dark-beige': '#BDB2A7',
        'custom-brown': '#926B65',
        'custom-gray': '#595552',
      },
    },
  },
  plugins: [],
};
export default config;
