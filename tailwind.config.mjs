/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#d97706',
        secondary: '#92400e',
        accent: '#f59e0b'
      }
    }
  },
  plugins: []
};
