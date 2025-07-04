const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const projectRoots = [
  'apps/web',
  'libs/ui',
  // Add more app or buildable lib roots here as needed
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...projectRoots.flatMap((projectRoot) => [
      join(__dirname, `${projectRoot}/src/**/*.{ts,tsx,js,jsx,html}`),
      ...createGlobPatternsForDependencies(join(__dirname, projectRoot)),
    ]),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
    },
  },
  plugins: [],
};
