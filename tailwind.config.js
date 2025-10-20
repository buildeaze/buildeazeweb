/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A472A',
          dark: '#143621',
          light: '#2C5D3F',
          lighter: '#3E7454',
        },
        secondary: {
          DEFAULT: '#F9F6F2',
          dark: '#EFE9E1',
          darker: '#E5DDD2',
        },
        accent: {
          DEFAULT: '#DAA520',
          dark: '#C69320',
          light: '#E5B534',
        },
        text: {
          DEFAULT: '#2F2F2F',
          light: '#4F4F4F',
          lighter: '#6F6F6F',
        },
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}