/**
 * Bildoptimierung für KSL Boxing
 * Ausführen: node scripts/optimize-images.js
 *
 * Komprimiert alle neuen Bilder in public/ auf max. 1600px Breite und ~75% JPEG-Qualität.
 * Bereits optimierte Bilder (< 600 KB) werden übersprungen.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FOLDERS = ['public/club-fotos', 'public/kindertraining', 'public/galerie'];
const MAX_WIDTH = 1600;
const QUALITY = 75;
const SKIP_BELOW_KB = 600;

async function optimizeFile(filePath) {
  const statBefore = fs.statSync(filePath).size;
  if (statBefore < SKIP_BELOW_KB * 1024) {
    console.log(`  skip  ${path.basename(filePath)} (${Math.round(statBefore / 1024)} KB – already small)`);
    return;
  }
  const tmp = filePath + '.tmp';
  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true })
    .toFile(tmp);
  fs.renameSync(tmp, filePath);
  const statAfter = fs.statSync(filePath).size;
  console.log(`  ok    ${path.basename(filePath)}: ${Math.round(statBefore / 1024)} KB → ${Math.round(statAfter / 1024)} KB`);
}

(async () => {
  for (const folder of FOLDERS) {
    if (!fs.existsSync(folder)) continue;
    const files = fs.readdirSync(folder).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    if (files.length === 0) continue;
    console.log(`\n${folder}/`);
    for (const f of files) {
      await optimizeFile(path.join(folder, f));
    }
  }
  console.log('\nFertig.');
})();
