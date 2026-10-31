// Puts the policy text in the initial HTML of /privacy/ so it reads without JavaScript.
import { readFileSync, writeFileSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const file = new URL("../dist/privacy/index.html", import.meta.url);
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
const { default: Privacy } = await vite.ssrLoadModule("/src/pages/Privacy.jsx");
await vite.close();
const root = '<div id="root"></div>';
const html = readFileSync(file, "utf8");
if (!html.includes(root)) throw new Error("privacy page root not found");
writeFileSync(file, html.replace(root, () => `<div id="root">${renderToStaticMarkup(createElement(Privacy))}</div>`));
