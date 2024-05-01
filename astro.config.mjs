import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  site: "https://kahete.com",
  integrations: [mdx(), sitemap(), tailwind()],
});
