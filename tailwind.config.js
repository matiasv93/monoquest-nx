import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const projectRoots = [
  'apps/web',
  'libs/ui',
  // Add more app or buildable lib roots here as needed
];

/** @type {import('tailwindcss').Config} */
export const content = [
  ...projectRoots.flatMap((projectRoot) => [
    join(__dirname, `${projectRoot}/src/**/*.{ts,tsx,js,jsx,html}`),
    ...createGlobPatternsForDependencies(join(__dirname, projectRoot)),
  ]),
];
export const theme = {
  extend: {},
};
export const plugins = [];
