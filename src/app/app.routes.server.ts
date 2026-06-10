import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static routes — prerendered at build time (SSG)
  // HTML generated once, served as a file. Zero server cost.
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },

  // Dynamic route — server-rendered on every request (SSR)
  // Always fresh. Use for data that changes frequently.
  {
    path: 'blog',
    renderMode: RenderMode.Server,
  },
];
