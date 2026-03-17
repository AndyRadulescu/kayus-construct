# GEMINI.md - Kayus Construct

## Project Overview
**Kayus Construct** is a modern web application built with [Next.js](https://nextjs.org/) (v16.1.7) and [React](https://react.dev/) (v19.2.3). The project utilizes the **Next.js App Router** architecture for efficient routing and layout management.

### Main Technologies
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
  - [Sass/SCSS](https://sass-lang.com/) (using `sass`)
- **Fonts**: Geist and Geist Mono via `next/font/google`
- **Compiler**: React Compiler is enabled (`reactCompiler: true` in `next.config.ts`)

## Project Structure
- `src/app/`: Contains the application routes, layouts, and global styles.
- `public/`: Static assets such as images and icons.
- `next.config.ts`: Next.js configuration.
- `tailwind.config.mjs` (or inline in `globals.scss`): Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Building and Running
The following commands are defined in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot-reloading. |
| `npm run build` | Compiles the application for production. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## Development Conventions
- **Routing**: Use the `src/app` directory for defining routes.
- **Styling**:
  - Global styles and Tailwind base directives are located in `src/app/globals.scss`.
  - Use Tailwind CSS utility classes for component-level styling.
  - SASS is available for more complex styling needs.
- **Components**: Prefer functional components and React Hooks.
- **Linting**: Adhere to the rules defined in `eslint.config.mjs`.
- **Fonts**: Use the CSS variables `--font-geist-sans` and `--font-geist-mono` for typography.
