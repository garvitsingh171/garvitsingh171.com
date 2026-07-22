import { useEffect, useMemo } from "react";
import {
  resolveSeoMetadata,
  type ResolvedSeoMetadata,
  type SeoInput,
} from "@/lib/seo";

const managedAttribute = "data-seo-managed";

function ensureMeta(attribute: "name" | "property", key: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) {
    return existing;
  }

  const element = document.createElement("meta");
  element.setAttribute(attribute, key);
  document.head.append(element);

  return element;
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  const element = ensureMeta(attribute, key);
  element.setAttribute("content", content);
  element.setAttribute(managedAttribute, "true");
}

function setCanonical(canonicalUrl?: string) {
  const existing = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonicalUrl) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("link");
  element.setAttribute("rel", "canonical");
  element.setAttribute("href", canonicalUrl);
  element.setAttribute(managedAttribute, "true");

  if (!existing) {
    document.head.append(element);
  }
}

function applyMetadata(metadata: ResolvedSeoMetadata) {
  document.title = metadata.title;

  const titleElement = document.head.querySelector("title");
  titleElement?.setAttribute(managedAttribute, "true");

  setMeta("name", "description", metadata.description);
  setMeta("name", "robots", metadata.robots);
  setCanonical(metadata.canonicalUrl);

  setMeta("property", "og:title", metadata.openGraph.title);
  setMeta("property", "og:description", metadata.openGraph.description);
  setMeta("property", "og:type", metadata.openGraph.type);
  setMeta("property", "og:url", metadata.openGraph.url);
  setMeta("property", "og:image", metadata.openGraph.image);
  setMeta("property", "og:site_name", metadata.openGraph.siteName);
  setMeta("property", "og:locale", metadata.openGraph.locale);

  setMeta("name", "twitter:card", metadata.twitter.card);
  setMeta("name", "twitter:title", metadata.twitter.title);
  setMeta("name", "twitter:description", metadata.twitter.description);
  setMeta("name", "twitter:image", metadata.twitter.image);
}

export function SEO({
  canonicalUrl,
  description,
  image,
  noIndex,
  path,
  title,
  type,
}: SeoInput) {
  const metadata = useMemo(
    () =>
      resolveSeoMetadata({
        canonicalUrl,
        description,
        image,
        noIndex,
        path,
        title,
        type,
      }),
    [canonicalUrl, description, image, noIndex, path, title, type],
  );

  useEffect(() => {
    applyMetadata(metadata);
  }, [metadata]);

  return null;
}
