import { SITE_CONFIG } from "../data/site.ts";
import type { Project } from "@/types/project.js";

export type SeoImage = string;

export type SeoInput = {
  title?: string;
  description?: string;
  path?: string | null;
  canonicalUrl?: string | null;
  image?: SeoImage;
  type?: "website" | "article";
  noIndex?: boolean;
};

export type ResolvedSeoMetadata = {
  title: string;
  description: string;
  canonicalUrl?: string;
  robots: "index, follow" | "noindex, nofollow";
  openGraph: {
    title: string;
    description: string;
    type: "website" | "article";
    url: string;
    image: string;
    siteName: string;
    locale: string;
  };
  twitter: {
    card: typeof SITE_CONFIG.twitterCard;
    title: string;
    description: string;
    image: string;
  };
};

const absoluteUrlPattern = /^https?:\/\//i;

function stripQueryAndHash(path: string) {
  return path.split(/[?#]/, 1)[0] ?? "";
}

export function normalizePath(path = "/") {
  const withoutOrigin = absoluteUrlPattern.test(path)
    ? new URL(path).pathname
    : path;
  const withoutQuery = stripQueryAndHash(withoutOrigin).trim();
  const withLeadingSlash = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`;
  const collapsed = withLeadingSlash.replace(/\/{2,}/g, "/");

  if (collapsed === "" || collapsed === "/") {
    return "/";
  }

  return collapsed.replace(/\/+$/g, "");
}

export function buildCanonicalUrl(path = "/") {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return `${SITE_CONFIG.url}/`;
  }

  return `${SITE_CONFIG.url}${normalizedPath}`;
}

export function buildAbsoluteUrl(pathOrUrl: string) {
  if (absoluteUrlPattern.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return buildCanonicalUrl(pathOrUrl);
}

export function toMetaDescription(description?: string) {
  const fallback = SITE_CONFIG.defaultDescription;
  const normalized = (description ?? fallback).replace(/\s+/g, " ").trim();

  if (normalized.length <= 165) {
    return normalized;
  }

  const trimmed = normalized.slice(0, 162);
  const lastSpace = trimmed.lastIndexOf(" ");
  const clean = lastSpace > 120 ? trimmed.slice(0, lastSpace) : trimmed;

  return `${clean.replace(/[,.!?;:]$/g, "")}...`;
}

export function resolveSeoMetadata(input: SeoInput = {}): ResolvedSeoMetadata {
  const title = input.title?.trim() || SITE_CONFIG.defaultTitle;
  const description = toMetaDescription(input.description);
  const canonicalUrl =
    input.canonicalUrl === null
      ? undefined
      : buildCanonicalUrl(input.canonicalUrl ?? input.path ?? "/");
  const image = buildAbsoluteUrl(input.image ?? SITE_CONFIG.defaultOgImage);
  const robots = input.noIndex ? "noindex, nofollow" : "index, follow";
  const url = canonicalUrl ?? buildCanonicalUrl("/");

  return {
    title,
    description,
    canonicalUrl,
    robots,
    openGraph: {
      title,
      description,
      type: input.type ?? "website",
      url,
      image,
      siteName: SITE_CONFIG.siteName,
      locale: SITE_CONFIG.locale,
    },
    twitter: {
      card: SITE_CONFIG.twitterCard,
      title,
      description,
      image,
    },
  };
}

export function resolveProjectSeoMetadata(project: Project): SeoInput {
  const image =
    project.seo?.image ??
    project.image?.light ??
    project.image?.src ??
    project.image?.dark;

  return {
    title: project.seo?.title ?? `${project.title} Case Study | Garvit Singh`,
    description:
      project.seo?.description ?? project.summary ?? project.description,
    path: `/projects/${project.slug}`,
    image,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function renderSeoTags(metadata: ResolvedSeoMetadata) {
  const canonical = metadata.canonicalUrl
    ? `    <link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" data-seo-managed="true" />\n`
    : "";

  return [
    `    <title data-seo-managed="true">${escapeHtml(metadata.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(metadata.description)}" data-seo-managed="true" />`,
    `    <meta name="robots" content="${metadata.robots}" data-seo-managed="true" />`,
    canonical.trimEnd(),
    `    <meta property="og:title" content="${escapeHtml(metadata.openGraph.title)}" data-seo-managed="true" />`,
    `    <meta property="og:description" content="${escapeHtml(metadata.openGraph.description)}" data-seo-managed="true" />`,
    `    <meta property="og:type" content="${metadata.openGraph.type}" data-seo-managed="true" />`,
    `    <meta property="og:url" content="${escapeHtml(metadata.openGraph.url)}" data-seo-managed="true" />`,
    `    <meta property="og:image" content="${escapeHtml(metadata.openGraph.image)}" data-seo-managed="true" />`,
    `    <meta property="og:site_name" content="${escapeHtml(metadata.openGraph.siteName)}" data-seo-managed="true" />`,
    `    <meta property="og:locale" content="${metadata.openGraph.locale}" data-seo-managed="true" />`,
    `    <meta name="twitter:card" content="${metadata.twitter.card}" data-seo-managed="true" />`,
    `    <meta name="twitter:title" content="${escapeHtml(metadata.twitter.title)}" data-seo-managed="true" />`,
    `    <meta name="twitter:description" content="${escapeHtml(metadata.twitter.description)}" data-seo-managed="true" />`,
    `    <meta name="twitter:image" content="${escapeHtml(metadata.twitter.image)}" data-seo-managed="true" />`,
  ]
    .filter(Boolean)
    .join("\n");
}
