/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep Spiritual Purple & Gold Theme
        primary: '#6B46C1',      // Deep Purple
        secondary: '#4C1D95',    // Royal Purple
        accent: '#D97706',       // Rich Gold
        gold: '#F59E0B',         // Bright Gold
        'purple-light': '#9333EA', // Vibrant Purple
        'purple-dark': '#581C87',  // Dark Purple
        'gold-light': '#FCD34D',   // Light Gold
        'spiritual': '#7C3AED',    // Spiritual Violet
      },
      fontFamily: {
        'display': ['serif'],
        'body': ['sans-serif'],
      },
      boxShadow: {
        'spiritual': '0 10px 40px -10px rgba(107, 70, 193, 0.3)',
        'gold': '0 10px 40px -10px rgba(217, 119, 6, 0.25)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    }
  },
  plugins: []
};
