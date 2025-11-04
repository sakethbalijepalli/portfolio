/**** @type {import('tailwindcss').Config} ****/
export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)'
      },
      boxShadow: {
        ring: '0 0 0 3px var(--ring)'
      }
    }
  },
  plugins: [import('@tailwindcss/typography')]
};
