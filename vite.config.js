import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "9ebd-103-55-145-6.ngrok-free.app", // ✅ Add your ngrok frontend domain here
    ],
  },
});
