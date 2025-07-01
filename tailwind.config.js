const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

// Add more app or buildable lib roots here as needed
const projectRoots = ['apps/web', 'libs/ui'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{apps/web,src,pages,components,app,libs}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(__dirname, 'libs/ui/src/**/*.{ts,tsx,html}'),
    ...projectRoots.flatMap((projectRoot) =>
      createGlobPatternsForDependencies(join(__dirname, projectRoot))
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
