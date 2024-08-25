import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  output: "static",
  adapter: vercel()
});