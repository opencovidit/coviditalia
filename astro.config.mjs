import { defineConfig } from 'astro/config';

export default defineConfig({
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
