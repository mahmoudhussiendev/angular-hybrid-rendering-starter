import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  title: string;
  body: string;
}

/**
 * Render mode: Server (SSR)
 * Configured in app.routes.server.ts → RenderMode.Server
 *
 * HTML is generated on every request, always fresh.
 * provideClientHydration() ensures this HttpClient call fires only
 * once (on the server) — the response is transferred to the client
 * via the HttpClient Transfer Cache, preventing a duplicate API call.
 */
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  template: `
    <h1>Blog</h1>
    <p><strong>Render mode: Server (SSR)</strong></p>
    <p>Rendered on every request. The API call below fires once (server-side)
       and is transferred to the client — no duplicate request.</p>

    <h2>Latest posts (from API)</h2>
    @if (posts$ | async; as posts) {
      @for (post of posts; track post.id) {
        <article style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #eee;">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </article>
      }
    } @else {
      <p>Loading...</p>
    }
  `,
})
export class BlogComponent implements OnInit {
  private http = inject(HttpClient);
  posts$!: Observable<Post[]>;

  ngOnInit() {
    // This request is cached by the HttpClient Transfer Cache.
    // Open DevTools → Network → you will see it fire once, on the server.
    // The client reuses the cached response. Zero duplicate call.
    this.posts$ = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
  }
}
