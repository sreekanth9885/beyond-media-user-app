// src/config/theme.ts
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#111827',
      light: '#1F2937',
      dark: '#0F172A',
    },
    secondary: {
      DEFAULT: '#1F2937',
      light: '#374151',
    },
    accent: {
      DEFAULT: '#D4AF37',
      light: '#E2C75A',
      dark: '#B8962E',
    },
    white: '#FFFFFF',
    gold: {
      50: '#FDF8E6',
      100: '#FBF0CC',
      200: '#F7E199',
      300: '#F3D266',
      400: '#EFC333',
      500: '#D4AF37',
      600: '#B8962E',
      700: '#9C7D25',
      800: '#7F641C',
      900: '#634B13',
    }
  },
  fonts: {
    poppins: ['Poppins', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
  },
  gradients: {
    gold: 'linear-gradient(135deg, #D4AF37 0%, #F3D266 50%, #D4AF37 100%)',
    dark: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
    hero: 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.85) 100%)',
  },
  shadows: {
    gold: '0 4px 20px rgba(212, 175, 55, 0.3)',
    goldLg: '0 10px 40px rgba(212, 175, 55, 0.4)',
    glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
    glow: '0 0 30px rgba(212, 175, 55, 0.1)',
  },
} as const;

export type Theme = typeof theme;