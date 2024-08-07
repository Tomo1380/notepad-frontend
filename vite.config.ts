import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    host: true, // 0.0.0.0 を使用してホストからアクセス可能にする
    port: 5173
  },
  plugins: [
    remix({
      basename: "/",
      buildDirectory: "build",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      ignoredRouteFiles: ["**/*.css"],
      routes(defineRoutes) {
        return defineRoutes(route => {
          route("/", "routes/index.tsx");
          route("/memo", "routes/memo/index.tsx");
          route("/memo/:memoId", "routes/memo/$memoId.tsx");
        });
      }
    }),
    tsconfigPaths(),
  ],
});
