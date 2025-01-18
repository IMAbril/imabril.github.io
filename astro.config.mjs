import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://imabril.github.io', 
  base: '/imabril.github.io/', 
  output: 'static', 
  devToolbar: {
    enabled: true,
  },
  integrations: [react(), tailwind(), sitemap()],
});

