import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opencovidit.github.io/coviditalia/',
  base: '/coviditalia/',
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
