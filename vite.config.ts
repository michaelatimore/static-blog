import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildPostsFromMarkdown } from "./parse-markdown";

const base = process.env.NODE_ENV === "production" ? "/React-blog/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), buildPostsFromMarkdown()],
  base,
});
