import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://coviditalia.github.io',
  base: 'coviditalia',
  vite: {
    optimizeDeps: {
      include: ['chart.js/auto'],
    },
    resolve: {
      alias: {
        '/bootstrap-italia/dist/svg/sprites.svg/':
          '../node_modules/bootstrap-italia/dist/svg/sprites.svg/',
      },
    },
  },
});
