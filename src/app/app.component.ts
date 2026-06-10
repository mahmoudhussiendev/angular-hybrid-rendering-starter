import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/blog">Blog</a>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    nav { display: flex; gap: 1rem; padding: 1rem; background: #1f2024; }
    nav a { color: #0088ff; text-decoration: none; }
    main { padding: 2rem; }
  `],
})
export class AppComponent {}
