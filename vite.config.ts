import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '');
  
  // Debug: Log loaded environment variables (remove in production)
  console.log('Vite Config - Loaded Environment Variables:', {
    hasGitHubToken: !!env.VITE_GITHUB_TOKEN,
    tokenLength: env.VITE_GITHUB_TOKEN?.length,
    nodeEnv: process.env.NODE_ENV,
    mode
  });

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean) as any[],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
