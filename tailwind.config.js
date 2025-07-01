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
    extend: {},
  },
  plugins: [],
};
