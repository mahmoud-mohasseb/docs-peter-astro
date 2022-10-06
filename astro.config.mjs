import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/edge-functions";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    react(),
    tailwind(),
  ],
  output: "server",
  adapter: netlify(),
  site: `http://astro.build`,
});
