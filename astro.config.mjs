import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true
  //   }
  // }),

  integrations: [solidJs()],
});