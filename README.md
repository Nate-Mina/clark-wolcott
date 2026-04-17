# Clark & Wolcott Masonry and Construction

A marketing website for Clark & Wolcott Masonry and Construction, a full-service masonry contractor based in Rochester, NY.

## About

This site mirrors the structure and content of the original [clarkandwolcott.net](https://www.clarkandwolcott.net/) with a refined, production-grade design. It showcases the company's services — residential and commercial masonry, remodeling, historic restoration, and chimney work — along with contact information, a project gallery, and customer testimonials.

## Key Technologies

| Technology | Purpose |
|---|---|
| [TanStack Start](https://tanstack.com/start) | Full-stack React framework with file-based routing |
| [TanStack Router](https://tanstack.com/router) | Type-safe client-side routing |
| [React 19](https://react.dev/) | UI rendering |
| [Vite 7](https://vitejs.dev/) | Build tooling |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Netlify](https://www.netlify.com/) | Hosting and deployment |

## Pages

- **`/`** — Full homepage with hero, services, about/stats, gallery, testimonials, and CTA sections
- **`/contact`** — Contact page with inquiry form and contact details

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server (with Netlify local emulation)
netlify dev

# Or start the Vite dev server directly
npm run dev
```

The dev server runs at [http://localhost:8888](http://localhost:8888) (via Netlify CLI) or [http://localhost:3000](http://localhost:3000) (Vite directly).

## Building for Production

```bash
npm run build
```

Output goes to `dist/client/` as configured in `netlify.toml`.

## Design

The site uses a craftsman/industrial aesthetic with:
- **Fonts**: Playfair Display (headings) + Barlow / Barlow Condensed (body & UI)
- **Colors**: Deep charcoal `#171410`, brick red `#8b3a1f`, warm cream `#f5f0e8`, golden amber `#c4902a`
- **Layout**: Sticky navigation, full-viewport hero, section-based single-page layout with a dedicated contact route
