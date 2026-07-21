import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { indexableStaticRoutes } from "../src/data/seo.ts";
import { projects } from "../src/data/projects.ts";
import {
  buildCanonicalUrl,
  normalizePath,
  renderSeoTags,
  resolveProjectSeoMetadata,
  resolveSeoMetadata,
} from "../src/utils/seo.ts";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const distDirectory = path.join(projectRoot, "dist");
const templatePath = path.join(distDirectory, "index.html");
const seoBlockPattern = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function routeOutputPaths(routePath) {
  const normalizedPath = normalizePath(routePath);

  if (normalizedPath === "/") {
    return [templatePath];
  }

  const relativePath = normalizedPath.replace(/^\//, "");

  return [
    path.join(distDirectory, relativePath, "index.html"),
    path.join(distDirectory, `${relativePath}.html`),
  ];
}

function renderHtmlForRoute(template, route) {
  const metadata = resolveSeoMetadata(route);
  const seoBlock = `<!-- seo:start -->\n${renderSeoTags(metadata)}\n    <!-- seo:end -->`;

  if (!seoBlockPattern.test(template)) {
    throw new Error("Could not find SEO marker block in dist/index.html.");
  }

  return template.replace(seoBlockPattern, seoBlock);
}

const staticRoutes = indexableStaticRoutes.map((route) => ({
  ...route,
  path: normalizePath(route.path),
}));

const projectRoutes = projects.map((project) => {
  const metadata = resolveProjectSeoMetadata(project);

  return {
    ...metadata,
    path: normalizePath(metadata.path ?? `/projects/${project.slug}`),
  };
});

const routesByPath = new Map();

for (const route of [...staticRoutes, ...projectRoutes]) {
  routesByPath.set(route.path, route);
}

const routes = [...routesByPath.values()];
const template = await readFile(templatePath, "utf8");

for (const route of routes) {
  const html = renderHtmlForRoute(template, route);

  for (const outputPath of routeOutputPaths(route.path)) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
}

const sitemapUrls = routes.map((route) => buildCanonicalUrl(route.path));
const uniqueSitemapUrls = [...new Set(sitemapUrls)];

if (uniqueSitemapUrls.length !== sitemapUrls.length) {
  throw new Error("Duplicate sitemap URLs were generated.");
}

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueSitemapUrls.map(
    (url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`,
  ),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(distDirectory, "sitemap.xml"), sitemapXml);

console.log(
  `Generated static SEO HTML for ${routes.length} routes and ${uniqueSitemapUrls.length} sitemap URLs.`,
);
