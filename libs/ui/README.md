# @monoquest-nx/ui

This library was generated with [Nx](https://nx.dev).

## Adding a shadcn/ui Component to the UI Library

To add a shadcn/ui component (e.g., Button) to this library, follow these steps:

1. **Run the shadcn CLI:**

   ```sh
   npx shadcn@latest add button -c libs/ui
   ```

   This will generate the component in the appropriate directory.

2. **Manual Fix: Update Internal Imports**

   - The generated component may import utilities (like `cn`) using the library's public API, e.g.:
     ```ts
     import { cn } from '@monoquest-nx/ui';
     ```
   - **Change this to a relative import** (required by Nx's enforce-module-boundaries rule):
     ```ts
     import { cn } from '../lib/utils';
     ```
   - Adjust the path as needed based on your file structure.

3. **Export the Component**
   - In `libs/ui/src/components/index.ts`, export the new component:
     ```ts
     export * from './button';
     ```
   - This makes the component available to consumers of the UI library.

## Running unit tests

Run `nx test @monoquest-nx/ui` to execute the unit tests via [Vitest](https://vitest.dev/).
