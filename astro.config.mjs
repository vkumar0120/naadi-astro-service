import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap({
      filter: (page) => 
        !page.includes('/404') && 
        !page.includes('/draft') &&
        !page.includes('/test')
    })
  ],
  output: 'static',
  site: 'https://naadiastroservice.com'
});