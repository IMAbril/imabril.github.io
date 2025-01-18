import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: '/imabril.github.io/',
  site: 'https://imabril.github.io', 
  devToolbar: {
    enabled: true
  },
  integrations: [react(), tailwind(), sitemap()],
  
});
