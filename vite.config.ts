import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "housy-lib",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format}.js`,
      cssFileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Excluir dependencias de la build
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist",
    }),
  ],
});
