// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import vue from '@astrojs/vue';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      port: 8088
    },
    plugins: [tailwindcss()]
  },

  output: 'server',
  integrations: [vue()],

  adapter: node({
    mode: 'standalone'
  })
});