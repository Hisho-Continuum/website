import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

async function extract() {
  // Hero image: around x: 620 to 1140, y: 220 to 670 in Screenshot 2026-10-14 023748.png
  // Let's extract the exact region
  await sharp('home/Screenshot 2026-10-14 023748.png')
    .extract({ left: 624, top: 228, width: 512, height: 435 })
    .toFile('public/images/hero-team.png');
  console.log('Extracted hero-team.png');

  // Consulting image from Screenshot 2026-10-14 023859.png
  const meta2 = await sharp('home/Screenshot 2026-10-14 023859.png').metadata();
  console.log('meta2:', meta2);
  // Consulting image is in card 04 in top area
  // Let's extract consulting image:
  await sharp('home/Screenshot 2026-10-14 023859.png')
    .extract({ left: 454, top: 72, width: 318, height: 292 })
    .toFile('public/images/consulting-session.png');
  console.log('Extracted consulting-session.png');
}

extract().catch(console.error);
