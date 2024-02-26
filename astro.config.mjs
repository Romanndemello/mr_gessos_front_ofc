import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress()],
});
