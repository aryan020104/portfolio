import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#111111",
        cardHover: "#161618",
        border: "rgba(255, 255, 255, 0.08)",
        borderGlow: "rgba(59, 130, 246, 0.3)",
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          glow: "rgba(59, 130, 246, 0.4)",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          glow: "rgba(139, 92, 246, 0.4)",
        },
        muted: "#B5B5B5",
        surface: "#0A0A0C",
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.25)',
        'purple-glow': '0 0 25px rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
