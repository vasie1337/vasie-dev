// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
  // Performance optimizations
  build: {
    // Minify HTML, CSS, and JS
    inlineStylesheets: 'auto',
  },
  
  // Enable compression
  compressHTML: true,
  
  // Optimize assets
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Rollup optimizations
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
    // CSS optimization
    css: {
      transformer: 'lightningcss',
    },
    // Asset optimization
    assetsInclude: ['**/*.woff2'],
  },
  
  // Prefetch configuration
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  
  // Image optimization
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689,
      },
    },
  },

  // Output configuration
  output: 'static',
  adapter: undefined,
  
  // Server configuration for development
  server: {
    port: 3000,
    host: true
  },
});