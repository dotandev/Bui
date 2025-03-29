import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'
import tailwindScrollbar from "tailwind-scrollbar";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),tailwindScrollbar()],
});