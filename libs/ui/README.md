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

## Generating a Storybook Story for a Component

To generate a Storybook story for a component (e.g., Button):

1. **Generate the story file:**
   ```sh
   nx g @nx/react:component-story --component button --project @monoquest-nx/ui
   ```
   - When prompted for the path, enter the path to your component relative to the library root (e.g., `src/components/button.tsx`).
2. **If the generator does not work or you want to add a story manually:**

   - Create a file like `libs/ui/src/components/button.stories.tsx` with the following content:

     ```tsx
     import type { Meta, StoryObj } from '@storybook/react';
     import { Button } from './button';

     const meta: Meta<typeof Button> = {
       title: 'Components/Button',
       component: Button,
     };
     export default meta;
     type Story = StoryObj<typeof Button>;

     export const Primary: Story = {
       args: { children: 'Button' },
     };
     ```

## Running unit tests

Run `nx test @monoquest-nx/ui` to execute the unit tests via [Vitest](https://vitest.dev/).
