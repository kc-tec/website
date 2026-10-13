/** @type {import('next').NextConfig} */

/*
 * GitHub Pages serves a project site from a subpath:
 *   https://<user>.github.io/<repo>/
 * so every asset and link needs that repo name prefixed. The deploy
 * workflow sets NEXT_PUBLIC_BASE_PATH automatically — see
 * .github/workflows/deploy.yml. Locally it stays empty, so
 * `npm run dev` serves from "/" as usual.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Emit a plain static site into out/ — no Node server needed.
  output: "export",
  basePath,

  // Produces about/index.html instead of about.html, so GitHub Pages
  // resolves /about/ without surprises.
  trailingSlash: true,

  // next/image optimisation needs a server, which GitHub Pages has not got.
  images: { unoptimized: true },
};

export default nextConfig;
