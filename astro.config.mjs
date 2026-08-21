import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Note: @astrojs/sitemap integration has compatibility issues
// Using custom sitemap generation script instead (scripts/generate-sitemap.js)

export default defineConfig({
  site: 'https://naadiastroservice.com',
  output: 'static',
  integrations: [
    tailwind()
  ]
});