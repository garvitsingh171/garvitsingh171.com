export function isExternalWebLink(href: string) {
  return /^https?:\/\//.test(href);
}

export function isEmailLink(href: string) {
  return href.startsWith("mailto:");
}
