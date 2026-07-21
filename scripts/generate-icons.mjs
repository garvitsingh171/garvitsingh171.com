import { mkdtemp, rm, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const publicDirectory = path.join(projectRoot, "public");
const sourceSvgPath = path.join(publicDirectory, "favicon.svg");
const iconBackground = "#171817";

const pngTargets = [
  { filename: "favicon-16x16.png", size: 16, purpose: "Browser favicon" },
  { filename: "favicon-32x32.png", size: 32, purpose: "Browser favicon" },
  { filename: "apple-touch-icon.png", size: 180, purpose: "Apple touch icon" },
  { filename: "icon-192x192.png", size: 192, purpose: "Application icon" },
  { filename: "icon-512x512.png", size: 512, purpose: "Application icon" },
];

const icoSizes = [16, 32, 48];

function formatBytes(bytes) {
  return `${new Intl.NumberFormat("en-US").format(bytes)} B`;
}

async function renderPng(outputPath, size) {
  await sharp(sourceSvgPath)
    .resize(size, size, {
      fit: "contain",
      withoutEnlargement: false,
    })
    .flatten({ background: iconBackground })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false,
    })
    .toFile(outputPath);

  const metadata = await sharp(outputPath).metadata();

  if (metadata.width !== size || metadata.height !== size) {
    throw new Error(
      `${path.relative(projectRoot, outputPath)} generated as ${metadata.width}x${metadata.height}, expected ${size}x${size}.`,
    );
  }

  if (metadata.hasAlpha) {
    throw new Error(
      `${path.relative(projectRoot, outputPath)} should be opaque but has an alpha channel.`,
    );
  }

  return metadata;
}

const generatedFiles = [];
const tempDirectory = await mkdtemp(path.join(os.tmpdir(), "garvit-icons-"));

try {
  for (const target of pngTargets) {
    const outputPath = path.join(publicDirectory, target.filename);
    await renderPng(outputPath, target.size);
    const fileStats = await stat(outputPath);

    generatedFiles.push({
      file: path.relative(projectRoot, outputPath),
      dimensions: `${target.size}x${target.size}`,
      size: formatBytes(fileStats.size),
      purpose: target.purpose,
    });
  }

  const icoInputPaths = [];

  for (const size of icoSizes) {
    const existingTarget = pngTargets.find((target) => target.size === size);

    if (existingTarget) {
      icoInputPaths.push(path.join(publicDirectory, existingTarget.filename));
      continue;
    }

    const tempPngPath = path.join(tempDirectory, `favicon-${size}x${size}.png`);
    await renderPng(tempPngPath, size);
    icoInputPaths.push(tempPngPath);
  }

  const icoOutputPath = path.join(publicDirectory, "favicon.ico");
  const icoBuffer = await pngToIco(icoInputPaths);
  await writeFile(icoOutputPath, icoBuffer);
  const icoStats = await stat(icoOutputPath);

  generatedFiles.push({
    file: path.relative(projectRoot, icoOutputPath),
    dimensions: icoSizes.map((size) => `${size}x${size}`).join(", "),
    size: formatBytes(icoStats.size),
    purpose: "ICO favicon fallback",
  });
} finally {
  await rm(tempDirectory, { recursive: true, force: true });
}

console.log("Generated icon assets from public/favicon.svg:");

for (const generatedFile of generatedFiles) {
  console.log(
    `- ${generatedFile.file} | ${generatedFile.dimensions} | ${generatedFile.size} | ${generatedFile.purpose}`,
  );
}
