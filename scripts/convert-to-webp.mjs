import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public", "images");

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

async function convert(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const relPath = relative(root, filePath);

  const inputStats = await stat(filePath);
  const inputKB = (inputStats.size / 1024).toFixed(1);

  await sharp(filePath).webp({ quality: 82 }).toFile(webpPath);

  const outputStats = await stat(webpPath);
  const outputKB = (outputStats.size / 1024).toFixed(1);
  const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(0);

  console.log(`${relPath}: ${inputKB}KB → ${outputKB}KB (${savings}% saved)`);
}

async function main() {
  console.log("Converting images to WebP...\n");
  let count = 0;
  let totalSaved = 0;

  for await (const filePath of walk(root)) {
    await convert(filePath);
    count++;
  }

  console.log(`\nDone. ${count} images converted.`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
