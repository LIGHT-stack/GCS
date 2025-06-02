import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
=======

// https://vitejs.dev/config/
export default defineConfig({
>>>>>>> 345f58f175da680e4e16a649576bd9f6922fa1ff
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
=======
  ],
>>>>>>> 345f58f175da680e4e16a649576bd9f6922fa1ff
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
});
>>>>>>> 345f58f175da680e4e16a649576bd9f6922fa1ff
