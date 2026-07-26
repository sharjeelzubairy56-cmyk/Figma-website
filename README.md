# SHOP.CO

**A React + Tailwind rebuild of a Figma e-commerce storefront design.**

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

---

## About

SHOP.CO takes a Figma e-commerce design and rebuilds it as an actual working app — product browsing, cart, and checkout wired up with real client-side routing and shared state, not static mockups. It's a hands-on project for practicing React fundamentals (hooks, Context, routing) by shipping something real, end to end.

## Features

- Storefront UI translated from Figma into responsive React components
- Client-side routing between pages (Home, Shop, Cart, Checkout, etc.) via React Router
- Cart and checkout state shared across routes with React Context (`useContext`) instead of prop drilling
- Utility-first styling with Tailwind CSS v4

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React (Vite) |
| Routing | React Router DOM `^7.18.1` |
| Styling | Tailwind CSS `^4.3.3` + `@tailwindcss/vite` |
| HTTP client | Axios `^1.18.1` |
| Hosting | Vercel |
| IDE | Visual Studio (`.slnx` / `.esproj`) |

## Getting Started

### Prerequisites
- Node.js 20+ (required by Tailwind CSS v4)
- npm

### Install & run
```bash
git clone <your-repo-url>
cd Figma-website/Figma-website   # folder that contains package.json
npm install
npm run dev
```
Runs at `http://localhost:5173` by default.

### Build for production
```bash
npm run build
npm run preview   # sanity-check the production build locally
```

### Opening in Visual Studio
The repo is set up as a VS solution — open `Figma-website.slnx` directly and Visual Studio loads the project through `figma-website.esproj`. Use the built-in **Git Changes** panel for source control if you'd rather not touch the CLI.

## Project Structure

```text
Figma-website/                 ← repo root (solution)
├── Figma-website.slnx         ← Visual Studio solution file
├── Figma-website/             ← Vite + React app
│   ├── figma-website.esproj
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/           ← CartContext, etc.
│       ├── App.jsx
│       └── main.jsx
├── .gitattributes
├── .gitignore
└── README.md
```
> Adjust the `src/` layout above to match what's actually there — this reflects the general shape, not a confirmed file listing.

## Development Notes

- **CSS collisions:** Tailwind's Preflight reset clashed with existing component styles, so component-specific classes are prefixed (e.g. `rf-`) to keep them isolated.
- **Case sensitivity:** Vercel builds on Linux, which is case-sensitive for filenames and imports even when local Windows dev isn't — a mismatch here has broken builds before, so import paths are kept exact-case.
- **Shared cart state:** Cart and checkout talk to each other through a `CartContext` provider instead of passing props down through every route.

## License

Personal/educational project — no license applied yet.

## Author

**Sharjeel Zubairy**
BS Artificial Intelligence, FAST-NUCES Lahore
