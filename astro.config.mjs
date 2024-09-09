import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  css: {
    global: true,
    files: ['src/styles/global.css'],
  },

  integrations: [preact()],
});