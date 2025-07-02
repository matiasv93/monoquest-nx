# MonoquestNx

## Monorepo Architecture & Conventions

- **Nx** is used for workspace orchestration, code generation, and task running, enabling modular, maintainable, and scalable codebases.
- **Apps** live in `apps/`, libraries in `libs/`—enforcing clear separation of concerns and boundaries between deployable units and shared code.
- **UI components** are in `libs/ui`, with colocated stories and styles for discoverability and rapid UI iteration.
- **Tailwind CSS and PostCSS configs** are centralized at the monorepo root for consistency, DRYness, and single-source-of-truth theming.
- **Vite** is used as the build tool for apps and Storybook, providing fast local development and optimized builds.
- **shadcn/ui** is used for modern, accessible React components and design tokens, with all design tokens and theme customizations managed centrally.
- **Storybook** is included (though not required) to showcase and visually test UI components. For larger monorepos, Storybook instances can be isolated in `libs/docs/` to keep documentation and demos separate from implementation code.
- **Context & State**: React Context is used for global, cross-route state (e.g., breadcrumb labels), avoiding prop drilling and enabling global UI updates from any page.
- **Routing**: All route definitions are colocated in a single file for maintainability, with nested routes and layouts for shared UI (e.g., breadcrumbs, controls).
- **Testing**: Unit and integration tests are colocated with their respective apps/libs for fast feedback and clear ownership.

### Folder Structure

```
monoquest-nx/
  apps/
    web/                        # Main web application
      src/
        app/
          components/
            BreadcrumbNav/      # Breadcrumb navigation component (clickable, context-driven)
          contexts/
            BreadcrumbContext.tsx # React context for breadcrumb state and randomization
          layouts/
            BreadcrumbControls/ # Layout for breadcrumbs and randomize button, with spacing/styling
          pages/
            Bar/                # Page component for /foo/bar
            Baz/                # Page component for /foo/bar/baz
            Foo/                # Page component for /foo
            index.tsx           # Page index/barrel
          routes/
            index.tsx           # React Router route definitions (nested, maintainable)
          app.tsx               # App entry, sets up routing/layout
          app.spec.tsx          # App-level tests
        utils/
          breadcrumb.ts         # Breadcrumb label defaults and randomization logic (moved from breadcrumbConfig.ts)
        styles.css              # Tailwind CSS entrypoint for the app
      vite.config.ts            # Vite config for the web app
  libs/
    ui/                        # Shared UI component library
      src/
        components/            # Reusable UI components (with colocated stories)
        styles/                # Global styles (e.g., global.css)
        lib/                   # Utilities (e.g., cn)
        index.ts               # Barrel export for the UI lib
      tailwind.config.cjs      # (If present) Only for CLI compatibility, not used for builds
      vite.config.ts           # Vite config for the UI lib
  tailwind.config.cjs          # Centralized Tailwind config (used by all apps/libs)
  postcss.config.cjs           # Centralized PostCSS config
  package.json                 # Monorepo dependencies and scripts
  nx.json                      # Nx workspace configuration
  tsconfig.base.json           # Base TypeScript config
  README.md                    # Project documentation (this file)
  ...
```

#### Architectural Rationale

- **Separation of Concerns**: Apps, libs, and configs are strictly separated, making it easy to scale, test, and deploy independently.
- **Context for Global State**: Breadcrumb labels and randomization logic are managed via React Context, with the logic now in `apps/web/src/utils/breadcrumb.ts` for better utility reuse and organization.
- **Centralized Theming & Config**: All Tailwind and PostCSS configuration is at the root, ensuring a single source of truth for design tokens and build pipeline.
- **Colocation for Discoverability**: Components, stories, and tests are colocated for fast onboarding and easier refactoring.
- **Barrel Exports**: Used throughout for clean, maintainable imports and to avoid deep relative paths.
- **Routing & Layouts**: Nested routes and shared layouts (e.g., for breadcrumbs and controls) enable DRY, maintainable UI composition.

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

## Scalability & Future Improvements

As the app and monorepo grow, consider the following enhancements to ensure maintainability, performance, and developer velocity:

### Nx Cloud, Caching, and CI/CD

- **Nx Cloud Integration**: Enable Nx Cloud for distributed computation caching, remote task execution, and detailed analytics. This dramatically speeds up CI and local builds by reusing results across machines and contributors.
- **Incremental Builds & Affected Commands**: Use Nx's `affected:*` commands to only build, test, or lint what has changed, reducing CI times and resource usage.
- **CI/CD Pipelines**: Integrate Nx with your CI provider (GitHub Actions, GitLab CI, etc.) to run affected tasks, cache results, and enforce code quality. Example: run `npx nx affected --target=build --parallel` in CI.
- **Distributed Task Execution**: For large teams, Nx Cloud can distribute builds and tests across multiple agents, further reducing feedback loops.

### Codebase & Architecture

- **Domain-Driven Libraries**: As features grow, split shared code into domain-specific libraries (e.g., `libs/auth`, `libs/data-access`) for better encapsulation and ownership.
- **API Layer**: Add a dedicated API library for data fetching, caching, and type-safe API contracts (e.g., using tRPC or GraphQL).
- **State Management**: For more complex state, consider libraries like Zustand, Jotai, or Redux Toolkit, but keep context for truly global, cross-cutting state.
- **Code Splitting & Lazy Loading**: Use React's `lazy` and `Suspense` to split large routes/pages for faster initial loads.
- **Theming & Design Tokens**: If supporting multiple brands/themes, extract design tokens into a dedicated library and use CSS variables for runtime theming.
- **Storybook Docs Mode**: For design systems, enable Storybook Docs mode and consider publishing Storybook as a static site for internal/external consumers.
- **Automated Dependency Updates**: Use tools like Renovate or Dependabot to keep dependencies up to date and secure.

### Testing & Quality

- **E2E Testing**: Add Cypress or Playwright for end-to-end tests, colocated in `apps/web-e2e` or similar.
- **Visual Regression Testing**: Integrate Chromatic or Loki with Storybook to catch UI regressions automatically.
- **Strict TypeScript Settings**: Enforce strict TS settings for long-term maintainability.
- **Linting & Formatting**: Use Nx plugins for ESLint, Prettier, and Stylelint to enforce code quality and consistency.

### Observability & Operations

- **Error Monitoring**: Integrate Sentry or a similar tool for real-time error tracking.
- **Performance Monitoring**: Use tools like Web Vitals, Lighthouse CI, or Datadog for continuous performance insights.
- **Bundle Analysis**: Regularly analyze bundle size with Vite or Nx plugins to prevent bloat.

---

## References

- [Nx Documentation](https://nx.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
