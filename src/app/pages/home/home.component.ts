import { Component } from '@angular/core';

/**
 * Render mode: Prerender (SSG)
 * Configured in app.routes.server.ts → RenderMode.Prerender
 *
 * This page is generated at build time as a static HTML file.
 * No server is needed to serve it — fastest possible TTFB.
 * Use for pages that don't change between deployments.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Home</h1>
    <p><strong>Render mode: Prerender (SSG)</strong></p>
    <p>This page was generated at build time. It's served as a static HTML file.</p>
    <p>TTFB is near-zero because there's no server processing on each request.</p>
  `,
})
export class HomeComponent {}
