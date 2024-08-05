import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio3.0/", // Replace 'your-repo-name' with your actual repo name
  plugins: [react()],
});
