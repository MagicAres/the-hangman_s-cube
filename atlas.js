// make‑atlas.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// recréer __dirname dans un module ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function makeAtlas() {
  const inputDir = path.join(__dirname, "textures");
  const files = fs.readdirSync(inputDir)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort();

  if (files.length === 0) {
    console.error("Aucune image trouvée dans", inputDir);
    return;
  }

  const firstMeta = await sharp(path.join(inputDir, files[0])).metadata();
  const width = firstMeta.width;
  const height = firstMeta.height;

  const canvas = sharp({
    create: {
      width: width * files.length,
      height: height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  });

  const composites = files.map((f, idx) => ({
    input: path.join(inputDir, f),
    left: idx * width,
    top: 0
  }));

  try {
    await canvas.composite(composites).png().toFile(path.join(__dirname, "atlas.png"));
    console.log("✅ atlas.png créé —", files.length, "images combinées.");
  } catch (err) {
    console.error("Erreur lors de la création de l'atlas :", err);
  }
}

makeAtlas();
