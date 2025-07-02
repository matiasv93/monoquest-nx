# MonoquestNx

## Monorepo Architecture & Conventions

- **Nx** is used for workspace orchestration, code generation, and task running.
- **Apps** live in `apps/`, libraries in `libs/`.
- **UI components** are in `libs/ui`, with colocated stories and styles.
- **Tailwind CSS and PostCSS configs** are centralized at the monorepo root for consistency and DRYness.
- **Vite** is used as the build tool for apps and Storybook.
- **shadcn/ui** is used for modern, accessible React components and design tokens.
- **Storybook** is included (though not required) to showcase and visually test UI components. For larger monorepos, Storybook instances can be isolated in `libs/docs/` to keep documentation and demos separate from implementation code.

### Folder Structure

```
monoquest-nx/
  apps/
    web/                # Main web app
      src/
        app/
        styles.css      # Tailwind entry for app
      vite.config.ts
  libs/
    ui/                # Shared UI library
      src/
        components/     # Reusable components (with stories)
        styles/         # Global styles (e.g., global.css)
        lib/            # Utilities (e.g., cn)
        index.ts        # Barrel export
  tailwind.config.js    # Centralized Tailwind config
  postcss.config.js     # Centralized PostCSS config
  package.json
  ...
```

---

## Setup & Usage

- **Node version:**

  - Use `nvm use` to match the version in `.nvmrc` (20.18.1).

- **Running the web app:**

  ```sh
  npx nx serve web
  ```

- **Building for production:**

  ```sh
  npx nx build web
  ```

- **Running Storybook for UI lib:**

  ```sh
  npx nx storybook ui
  ```

- **Testing:**
  ```sh
  npx nx test <project>
  ```

---

## Tailwind CSS Integration

- The root `tailwind.config.js` must include all relevant app and lib source files in its `content` array.
- If you add a new app or lib that uses Tailwind, add its root to the `projectRoots` array in `tailwind.config.js`.
- All Tailwind theme customizations (e.g., colors for shadcn/ui) should be defined in the root config for consistency.
- Each app must import a CSS file with Tailwind directives (`@tailwind base; ...`).

---

## shadcn/ui & Component Development

- Use the shadcn CLI to scaffold new components in `libs/ui`:
  ```sh
  npx shadcn@latest add <component> -c libs/ui
  ```
- After generation, update any internal imports (e.g., `cn`) to use relative paths to comply with Nx's enforce-module-boundaries rule.
- Export new components from `libs/ui/src/components/index.ts` and `libs/ui/src/index.ts`.
- Add or update Storybook stories for each component in the same folder.

---

## Best Practices & Notes

- **Centralize configuration**: Keep Tailwind, PostCSS, and other shared configs at the root.
- **No duplicate configs**: Do not create per-lib or per-app Tailwind/PostCSS configs unless absolutely necessary.
- **Consistent exports**: Use barrel files (`index.ts`) for clean imports.
- **Semantic theming**: Use CSS variables and semantic color names in Tailwind for easy theming and shadcn/ui compatibility.
- **Keep README up to date**: Document any architectural or workflow decisions here.

---

## Nx & Useful Commands

- List all projects:
  ```sh
  npx nx show projects
  ```
- Visualize the project graph:
  ```sh
  npx nx graph
  ```
- Generate new apps/libs/components with Nx generators.

---

## References

- [Nx Documentation](https://nx.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
