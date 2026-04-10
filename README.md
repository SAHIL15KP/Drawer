# Drawer

**Drawer** is a full-stack, scalable application built as a monorepo using **Turborepo**. It features a fast and modern **Next.js** frontend, accompanied by dedicated HTTP and WebSocket backend services.

## 🚀 Architecture & Tech Stack

This project is structured as a monorepo to seamlessly share code, types, and UI components across the frontend and backend services.

### Apps
- **`apps/web`**: The main frontend application built with **Next.js 16** and React 19. It consumes the backend APIs and provides the user interface.
- **`apps/http-backend`**: A RESTful API server built with **Node.js** and **Express**. Handles core business logic, user authentication (via JWT), and database interactions.
- **`apps/ws-backend`**: A real-time **WebSocket** server built with the `ws` library for live bidirectional communication.

### Packages (Shared)
- **`@repo/ui`**: Shared React component library.
- **`@repo/db`**: Database schema, client, and configuration.
- **`@repo/common`**: Shared utilities and constants.
- **`@repo/eslint-config`**: Standardized ESLint configurations.
- **`@repo/typescript-config`**: Shared `tsconfig.json` files for consistent type checking.

---

## 🛠 Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v18 or higher)
- npm (v11+)

---

## 💻 Getting Started

### 1. Clone & Install
Clone the repository and install all dependencies from the root directory. Turborepo and npm workspaces will handle hoisting everything correctly.

```bash
git clone https://github.com/SAHIL15KP/Drawer.git
cd drawer
npm install
```

### 2. Run the Development Environment
Start all applications (Next.js frontend, HTTP backend, and WebSocket backend) simultaneously:

```bash
npm run dev
```

This command uses `turbo run dev` to efficiently orchestrate the startup of all apps in parallel. 
- The Next.js web app will be available at `http://localhost:3000`.

---

## ⚙️ Scripts

Run these from the root of the project:

- `npm run dev`: Starts the development servers for all apps.
- `npm run build`: Builds all apps and packages for production utilizing Turbo's caching.
- `npm run lint`: Runs ESLint across the entire workspace.
- `npm run format`: Formats all `.ts`, `.tsx`, and `.md` files using Prettier.
- `npm run check-types`: Runs TypeScript compiler checks without emitting files.

---

## ⚡ Turborepo Features

This repository utilizes **Turborepo** to manage its complex architecture, providing:
- **Fast Building**: Caches outputs of tasks like `build` and `lint` so you never do the same work twice.
- **Parallel Execution**: Maximizes CPU usage by running tasks simultaneously.
- **Task Pipelines**: Defines relationships between tasks (e.g., ensuring `@repo/ui` is built before `apps/web`).
