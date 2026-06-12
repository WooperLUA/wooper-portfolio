import { defineConfig } from "vite";
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  server: { port: 5173 },
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components/index.ts"),
      "@views": path.resolve(__dirname, "./src/views/index.ts"),
    }
  }
});