import { Component } from '@angular/core';

/**
 * Render mode: Prerender (SSG)
 * Static content that never changes between deployments.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About</h1>
    <p><strong>Render mode: Prerender (SSG)</strong></p>
    <p>This page is also prerendered at build time.</p>
    <p>Good for: contact pages, about pages, pricing pages with static content.</p>
  `,
})
export class AboutComponent {}
