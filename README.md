# Angular Hybrid Rendering Starter

A minimal Angular 21 starter that demonstrates all three server render modes side by side: **Static (SSG)**, **Server (SSR)**, and **Hybrid** (different modes per route).

> Companion repo for: [How to Set Up Hybrid Rendering in Angular 21](https://mastercodecraft.com/angular-hybrid-rendering-setup/)
> Built by [Mahmoud Hussien](https://mastercodecraft.com/about/) · [MasterCodeCraft](https://mastercodecraft.com)

---

## What's inside

| Route | Render Mode | Why |
|---|---|---|
| `/` | `RenderMode.Prerender` | Static homepage — fastest TTFB |
| `/about` | `RenderMode.Prerender` | Never changes |
| `/blog` | `RenderMode.Server` | Dynamic content, always fresh |

---

## Prerequisites

- Node.js 20+
- Angular CLI 21+

```bash
npm install -g @angular/cli@21
```

---

## Getting started

```bash
git clone https://github.com/mastercodecraft/angular-hybrid-rendering-starter
cd angular-hybrid-rendering-starter
npm install
```

### Dev server
```bash
npm run dev
```

### Production build
```bash
npm run build
```

### Preview SSR locally
```bash
npm run serve:ssr
```

---

## Key files

```
src/
  app/
    app.config.ts          ← hydration + transfer cache setup
    app.routes.server.ts   ← per-route render mode config
    app.routes.ts          ← client-side routes
    pages/
      home/                ← Prerender (SSG)
      about/               ← Prerender (SSG)
      blog/                ← Server (SSR)
```

---

## The three render modes explained

### Static (Prerender)
HTML generated at build time. Zero server cost at runtime. Best for pages that don't change.

```typescript
{ path: '', renderMode: RenderMode.Prerender }
```

### Server (SSR)
HTML generated on every request. Always fresh. Best for dynamic data.

```typescript
{ path: 'blog', renderMode: RenderMode.Server }
```

### Hybrid
Mix both in the same app. Static routes get SSG performance; dynamic routes get SSR freshness.

---

## Common mistakes this repo avoids

- ❌ Forgetting `provideClientHydration()` → causes duplicate API calls
- ❌ Setting `outputMode: "static"` globally and wondering why SSR doesn't work
- ❌ Missing `server.ts` entry in `angular.json`

---

## Related posts on MasterCodeCraft

- [How to Stop Duplicate API Calls in Angular SSR](https://mastercodecraft.com/angular-ssr-duplicate-api-calls/)
- [Angular SSR vs Next.js: How to Choose](https://mastercodecraft.com/angular-ssr-vs-nextjs/)
- [Angular Render Modes Explained](https://mastercodecraft.com/angular-render-modes/)

---

## License

MIT
