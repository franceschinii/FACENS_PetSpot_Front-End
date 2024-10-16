import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('ion-'), // Definindo o tipo de 'tag' como string
        },
      },
    }),
  ],
  base: "/",
  server: {
    host: "0.0.0.0",  
    port: 5173,
  },
});
