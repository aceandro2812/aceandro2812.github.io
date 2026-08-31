import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this from the domain root (user site), so base is '/'.
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    // Source maps were being published alongside the bundle, exposing the full
    // original source and inflating the deploy by ~14MB. Off for production.
    sourcemap: mode !== "production",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Split vendor code so the browser can cache React/router separately
        // from the heavy, rarely-used three.js chunk.
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
}));
