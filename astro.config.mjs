import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  prefetch: {
    prefetchAll: true,
  },
  output: "server",
  // adapter: vercel(),
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
    // edgeMiddleware: true,
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});
