import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const {
  SECRET_SANITY_TOKEN,
  SECRET_SANITY_PROJECT_ID,
  SECRET_SANITY_DATASET
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: 'https://naineel-blog.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sanity({
      projectId: SECRET_SANITY_PROJECT_ID,
      dataset: SECRET_SANITY_DATASET,
      apiVersion: '2022-07-03',
      useCdn: true,     //for SSR - true
      token: SECRET_SANITY_TOKEN
    })],
  output: "server",
  adapter: vercel({
    imageService: true,
  })
});