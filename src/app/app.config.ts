import { ApplicationConfig } from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideClientHydration() enables the HttpClient Transfer Cache.
    // Without this, Angular SSR will fire every API call twice —
    // once on the server, once on the client after hydration.
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
};
