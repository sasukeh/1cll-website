import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.1cll.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
