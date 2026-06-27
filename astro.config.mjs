import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Production canonical used by sitemap and SEO metadata.
const SITE_URL = process.env.SITE_URL || 'https://nicho-digital.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Use next-gen formats
        formats: ['avif', 'webp', 'png', 'jpg'],
        // Image quality optimization
        quality: 80,
        // Cache optimized images
        cacheDir: './.astro/image-cache',
      }
    },
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        return ['/', '/medicos-cuenca/'].includes(url.pathname);
      },
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        return {
          ...item,
          priority: 0.7,
        };
      },
    }),
  ],
});
