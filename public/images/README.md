# Images

Every photo slot on the website is already wired up. To use the college's own
photographs, just **replace the files in this folder with the same file names**.
No code changes and no rebuild configuration changes are needed.

## How to swap in real photos

1. Open this folder in Explorer or Finder.
2. Delete (or overwrite) the `.png` placeholder with your own image, keeping the
   **exact same file name and extension**:
   - To use a JPEG photo named `hero.jpg`, rename your file to `hero.png`? No —
     keep it simple: **replace `hero.png` with your photo saved as `hero.png`**,
     or rename the photo and update the one file name in the page source.
3. Run `npm run build` to check the result locally, then commit and push.

> The pages reference the files with plain root-relative paths such as
> `/images/hero.png`. That is deliberate: the site is served from a custom
> domain at the root, so paths must not carry a repository sub-path.

## What each image is for

| File | Where it appears | Suggested subject |
| --- | --- | --- |
| `hero.png` | Home page banner | Main college building, wide shot (1600×900) |
| `campus.png` | About page | Campus grounds or main hall (1200×800) |
| `programs.png` | Programs page banner | A classroom or teaching activity (1200×800) |
| `admissions.png` | Admissions page banner | New students or registration desk (1200×800) |
| `contact.png` | Contact page | School entrance, gate, or a map screenshot (1200×800) |
| `campus-life-1.png` … `campus-life-6.png` | Campus life gallery on the About page | Library, laboratory, sport, art, students, graduation (800×600) |

## Recommended sizes

- Hero and banners: about **1600 × 900** pixels
- Gallery photos: about **800 × 600** pixels (4:3)
- Keep each file under roughly **300 KB** so the pages stay fast. Large photos
  can be resized in Windows with Paint, or with any free image resizer.

## Accessibility

Each image on the site carries a Khmer and English `alt` description in the page
source. When you add a photo, open the page file and update that text so screen
reader users hear what the picture shows, for example:

```tsx
alt="សាលាស្នាកដ្ឋាន / The main college building"
```

## Regenerating the placeholders

If a placeholder is overwritten by mistake, restore all of them with:

```
node scripts/make-placeholders.mjs
```

This overwrites every file in this folder, so only run it when you intend to go
back to placeholders.