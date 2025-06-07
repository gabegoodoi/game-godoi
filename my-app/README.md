# Game Godoi – Board Game Design Portfolio

[🌐 Live Demo](https://gamegodoi.com)

---

## Features

- 🎨 **Custom Themes:** Instantly switch between Light Mode, Dark Mode, and a unique Party Mode for a dynamic, playful experience.
- 📱 **Fully Responsive:** Designed to look and work great on any device, from mobile to desktop.
- 🖱️ **Interactive UI:** Handcrafted animated bullets, audio triggers, and custom cursor effects for an engaging user experience.
- 📬 **Contact Form:** Secure, backend-free messaging via EmailJS.
- 🚀 **Modern Stack:** Built with React 19, TypeScript, Vite, and Tailwind CSS.
- ☁️ **Cloudflare Deployment:** Fast, global hosting with Cloudflare Pages and domain managed via Namecheap.

---

## Overview

Game Godoi is a portfolio and resource hub for board game design, built to showcase projects, share resources, and connect with other designers. The site features a designer portfolio, resource hub, and a contact form—all with a highly interactive, custom-themed UI.

---

## Project Structure

- **src/**  
  Main source code, including:
  - `App.tsx`: Main app component and routing.
  - `App.css`: Global styles (Tailwind + custom).
  - `Components/`: All React components (Home, About, Resources, Unsigned, Contact, etc.).
  - `assets/`: Images, audio, and other static assets.

- **public/**  
  Static files served as-is (e.g., favicon, images).

- **index.html**  
  Main HTML entry point.

- **vite.config.ts**  
  Vite configuration, including path aliases.

- **tsconfig.json / tsconfig.app.json / tsconfig.node.json**  
  TypeScript configuration files.

- **package.json**  
  Project dependencies and scripts.

---

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm

### Install Dependencies

```sh
npm install
```

### Development Server

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

---

## Linting

Lint your code with:

```sh
npm run lint
```

ESLint is configured for React, TypeScript, and React Hooks.

---

## Styling

- Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- Custom styles in [`src/App.css`](src/App.css).
- Theme switching (Light, Dark, Party) is available via the navigation bar.

---

## Routing

- Uses [react-router-dom](https://reactrouter.com/) for client-side routing.
- Main routes: `/`, `/about`, `/resources`, `/available`, `/contact`.

---

## Aliases

Path aliases are set up in [`vite.config.ts`](vite.config.ts) and `tsconfig.json`:
- `@/components` → `src/Components`
- `@/lib` → `src/lib`
- `@/components/ui` → `src/Components/ui`
- etc.

---

## Deployment

The site is built with Vite and deployed using [Cloudflare Pages](https://pages.cloudflare.com/).  
The domain is managed and hosted through [Namecheap](https://www.namecheap.com/).

- The production site is available at [https://gamegodoi.com](https://gamegodoi.com).
- To deploy, push changes to the main branch; Cloudflare Pages will automatically build and deploy.

---

## Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly from the frontend, with no backend server required.

- EmailJS is initialized with environment variables for the public key, service ID, and template ID.
- When a user submits the form, their message is sent via EmailJS to your configured email address.
- Notifications are shown for success or error, and are cleared on route change.

**Environment variables required:**
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

Set these in your `.env` file for local development and in Cloudflare Pages project settings for production.

---

## Usage Tips

- Switch between Light, Dark, and Party modes using the theme toggle in the navigation bar.
- Enjoy interactive feedback with animated bullets, sound effects, and a custom cursor as you explore the site.
- On the About Me Page: Click the stars or my face for some fun gags!

---

## Author

All UI animations, audio triggers, and cursor effects were personally designed and coded by Gabe Godoi.

---

## Credits

- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).
- Icons by [Lucide](https://lucide.dev/).

---