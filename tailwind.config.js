/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F3F0EA',
        paper: '#EDE8DF',
        taupe: '#D6CAB8',
        beige: '#CFC4B4',
        charcoal: '#11223F',
        obsidian: '#0A1128',
        'dark-surface': '#14213D',
        'muted-dark': '#475569',
        'muted-light': '#94A3B8',
        'border-light': 'rgba(17, 34, 63, 0.16)',
        'border-dark': 'rgba(243, 240, 234, 0.16)',
        'stitch-ivory': '#F3F0EA',
        'stitch-paper-warm': '#EDE8DF',
        'stitch-taupe': '#D6CAB8',
        'stitch-beige': '#CFC4B4',
        'stitch-charcoal': '#11223F',
        'stitch-obsidian': '#0A1128',
        'stitch-dark-surface': '#14213D',
        'stitch-muted-dark': '#475569',
        'stitch-muted-light': '#94A3B8',
        'stitch-border-light': 'rgba(17, 34, 63, 0.16)',
        'stitch-border-dark': 'rgba(243, 240, 234, 0.16)',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        sidebar: '300px',
        'section-gap': '8rem',
      },
    },
  },
  plugins: [],
};
