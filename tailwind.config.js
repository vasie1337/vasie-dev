/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0f0f13',
        'darker-gray': '#0a0a0e',
        'cyber-green': '#10b981',
        'electric-blue': '#3b82f6',
        'deep-purple': '#8b5cf6',
        'dark-purple': '#4c1d95',
        'deep-blue': '#1e40af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
