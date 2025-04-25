import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Advice App",
        short_name: "Advice",
        description: "Get random advice anytime!",
        theme_color: "#0f172a",
        background_color: "#f8fafc",
        display: "standalone",
        start_url: "./index.html",
        icons: [
          {
            src: "/icons/download.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/images.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});