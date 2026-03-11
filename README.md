# React + TypeScript Application

## Project Overview

This is a modern web application built with React, TypeScript, and Vite. It uses Tailwind CSS for styling and shadcn-ui for component primitives. The project follows best practices for maintainability and performance.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm (comes with Node.js) or yarn/pnpm

You can manage Node versions with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Local Development

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` with hot module replacement.

### Building for Production

To create an optimized production build:
```sh
npm run build
```
The output will be in the `dist` folder, ready for deployment to any static hosting service.

## Development Workflow

### Using an IDE

You can work on this project locally with your preferred editor (VS Code, WebStorm, etc.). All standard Git workflows apply.

### Editing Directly on GitHub

- Navigate to the desired file on GitHub.
- Click the pencil icon to edit.
- Commit changes directly or create a pull request.

### Using GitHub Codespaces

- From the repository main page, click the green "Code" button.
- Select the "Codespaces" tab.
- Create a new codespace – you'll have a full VS Code environment in your browser.

## Technology Stack

- **Vite** – Fast build tool and development server
- **React** – UI library
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn-ui** – Reusable component library built on Radix UI and Tailwind

## Deployment

This project is a static single-page application and can be deployed to any static hosting platform.

### Recommended Hosting Providers

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- AWS S3 + CloudFront

**Steps to deploy:**
1. Run `npm run build` to generate the production build.
2. Upload the contents of the `dist` folder to your hosting provider.
3. Ensure the server is configured to serve `index.html` for all routes (SPA fallback).

### Custom Domain

To use a custom domain:

1. Purchase a domain from a registrar.
2. Update your DNS records to point to your hosting provider (e.g., add a CNAME or A record).
3. In your hosting provider's dashboard, add the custom domain under your site settings.

Refer to your hosting provider's documentation for detailed instructions.
