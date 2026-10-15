/**
 * Generates the placeholder images in public/images.
 *
 * The placeholders are real PNG files so the site builds and looks
 * intentional before the college's own photographs are available.
 * Run this again at any time to reset the placeholders:
 *
 *   node scripts/make-placeholders.mjs
 *
 * To use real photos instead, overwrite the files in public/images
 * with the same names. See public/images/README.md.
 */

import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

/* Brand palette, matching app/globals.css. */
const NAVY = [11, 37, 69];
const NAVY_MID = [27, 64, 121];
const GOLD = [184, 144, 47];

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i += 1) {
    c ^= buf[i];
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Mixes two RGB colours. */
function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

/**
 * Draws a diagonal navy gradient with a soft gold arc, so each
 * placeholder is distinguishable at a glance.
 */
function renderPng(width, height, variant) {
  const raw = Buffer.alloc(height * (width * 3 + 1));
  const cx = width * (0.25 + 0.12 * variant);
  const cy = height * (0.35 + 0.08 * variant);
  const radius = Math.min(width, height) * 0.55;

  let p = 0;
  for (let y = 0; y < height; y += 1) {
    raw[p] = 0; // PNG filter type 0 (None)
    p += 1;
    for (let x = 0; x < width; x += 1) {
      const t = (x / width) * 0.45 + (y / height) * 0.55;
      let [r, g, b] = mix(NAVY, NAVY_MID, t);

      // Gold ring, faded out towards its edge.
      const d = Math.hypot(x - cx, y - cy);
      if (d < radius) {
        const edge = 1 - Math.abs(d / radius - 0.82) / 0.18;
        if (edge > 0) {
          const a = Math.min(1, edge) * 0.32;
          [r, g, b] = mix([r, g, b], GOLD, a);
        }
      }

      raw[p] = r;
      raw[p + 1] = g;
      raw[p + 2] = b;
      p += 3;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: truecolour
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* Wide images suit banners and galleries; tall ones suit side panels. */
const SLOTS = [
  { name: "hero", width: 1600, height: 900 },
  { name: "campus", width: 1200, height: 800 },
  { name: "programs", width: 1200, height: 800 },
  { name: "admissions", width: 1200, height: 800 },
  { name: "contact", width: 1200, height: 800 },
  { name: "campus-life-1", width: 800, height: 600 },
  { name: "campus-life-2", width: 800, height: 600 },
  { name: "campus-life-3", width: 800, height: 600 },
  { name: "campus-life-4", width: 800, height: 600 },
  { name: "campus-life-5", width: 800, height: 600 },
  { name: "campus-life-6", width: 800, height: 600 },
];

mkdirSync(outDir, { recursive: true });

SLOTS.forEach((slot, i) => {
  const file = join(outDir, `${slot.name}.png`);
  writeFileSync(file, renderPng(slot.width, slot.height, i));
  console.log(`wrote ${slot.name}.png (${slot.width}x${slot.height})`);
});