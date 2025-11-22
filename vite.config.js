import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nsb-new/", // 👈 coloque exatamente igual ao nome do seu repositório
  plugins: [react()],
});
