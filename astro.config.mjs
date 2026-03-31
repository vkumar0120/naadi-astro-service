import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://naadiastroservice.com',
  output: 'static',
  integrations: [
    tailwind()
  ]
});