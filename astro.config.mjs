// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      port: 8088
    },
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: netlify(),
  integrations: [vue()]
});