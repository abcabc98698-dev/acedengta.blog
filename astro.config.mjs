import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://acedengta.blog';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  envPrefix: 'PUBLIC_',
  redirects: {
    '/signin': '/sign-in',
    '/signup': '/sign-up',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  server: {
    port: 5200,
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/elements') &&
        !page.includes('/signin') &&
        !page.includes('/signup'),
    }),
  ],
});
