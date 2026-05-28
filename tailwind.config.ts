import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kiln: {
          cream: '#F8F1E7',
          'cream-dark': '#EFE9DE',
          clay: '#B96A50',
          'clay-dark': '#9C5640',
          terracotta: '#CC6B49',
          'terracotta-light': '#E08060',
          ink: '#2E2A27',
          muted: '#8A7E75',
          'muted-light': '#A89F96',
          accent: '#6FA8DC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial Narrow', 'Impact', 'Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.5rem',
        xl: '0.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(46, 42, 39, 0.05)',
        md: '0 4px 6px -1px rgba(46, 42, 39, 0.1)',
        lg: '0 10px 15px -3px rgba(46, 42, 39, 0.1)',
      },
      backgroundImage: {
        'tile-ocean-wave':
          'repeating-radial-gradient(ellipse at 20% 70%, transparent 0 12px, rgba(255,255,255,0.88) 13px 16px, transparent 17px 28px), linear-gradient(135deg, #2F4A7F 0%, #6FA8DC 100%)',
        'tile-forest-fern':
          'linear-gradient(45deg, transparent 0 46%, rgba(255,255,255,0.78) 47% 53%, transparent 54% 100%), repeating-linear-gradient(135deg, #2E6F63 0 7px, #6AA84F 8px 15px, #E6F0D9 16px 22px)',
        'tile-terracotta-dot':
          'radial-gradient(circle at 28% 28%, #CC6B49 0 12%, transparent 13%), radial-gradient(circle at 72% 30%, #B96A50 0 10%, transparent 11%), radial-gradient(circle at 48% 72%, #CC6B49 0 14%, transparent 15%), linear-gradient(135deg, #F8F1E7 0%, #EFE9DE 100%)',
        'tile-yellow-star':
          'conic-gradient(from 18deg at 50% 50%, #F1C232 0 10%, transparent 11% 20%, #F1C232 21% 30%, transparent 31% 40%, #F1C232 41% 50%, transparent 51% 60%, #F1C232 61% 70%, transparent 71% 80%, #F1C232 81% 90%, transparent 91% 100%), linear-gradient(135deg, #FFF8D9 0%, #F8F1E7 100%)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.4s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
