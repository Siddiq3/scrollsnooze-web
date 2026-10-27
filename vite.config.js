import { defineConfig, loadEnv } from "vite";
import { appAssociations } from "./scripts/app-associations.mjs";
import { fileURLToPath } from "node:url";
const entry = (path) => fileURLToPath(new URL(path, import.meta.url));
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ""), ...process.env };
  const raw = env.SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || "";
  let origin = "";
  if (raw) {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (url.protocol !== "https:" || url.pathname !== "/" || url.search || url.hash || url.username || url.password) {
      throw new Error("SITE_URL must be an HTTPS origin without a path or credentials");
    }
    origin = url.origin;
  }
  return {
  plugins: [{
    name: "production-website-urls",
    transformIndexHtml(html) {
      return origin ? html.replaceAll("__SITE_ORIGIN__", origin)
        : html.replace(/<link\s+rel="canonical"[\s\S]*?\/>/g, "")
          .replace(/<meta\s+property="og:(url|image)"[\s\S]*?\/>/g, "");
    },
    generateBundle() {
      const associations = appAssociations(env);
      this.emitFile({ type: "asset", fileName: ".well-known/assetlinks.json", source: JSON.stringify(associations.android) });
      this.emitFile({ type: "asset", fileName: ".well-known/apple-app-site-association", source: JSON.stringify(associations.apple) });
      const paths = ["/", "/privacy/", "/delete-account/", "/support/", "/terms/"];
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}` });
      if (origin) this.emitFile({ type: "asset", fileName: "sitemap.xml", source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${origin}${path}</loc></url>`).join("")}</urlset>` });
    },
  }],
  esbuild: { jsx: "automatic" },
  build: {
    rollupOptions: {
      input: {
        home: entry("./index.html"),
        privacy: entry("./privacy/index.html"),
        deleteAccount: entry("./delete-account/index.html"),
        support: entry("./support/index.html"),
        terms: entry("./terms/index.html"),
        notFound: entry("./404.html"),
      },
    },
  },
};
});
