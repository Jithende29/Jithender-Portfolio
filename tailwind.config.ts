import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 24px 80px rgba(71, 84, 198, 0.16)'
      },
      colors: {
        accent: '#7c3aed',
        accent2: '#2563eb'
      }
    }
  },
  plugins: []
};

export default config;
