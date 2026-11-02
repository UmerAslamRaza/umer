/** @type {import('next').NextConfig} */

// The site is served from GitHub Pages at https://<user>.github.io/<repo>/,
// so every production URL needs the repository name as a prefix.
const REPO_NAME = 'umer';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? `/${REPO_NAME}` : '';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  // Written as "key: value" (not shorthand) on purpose: GitHub's configure-pages
  // action rewrites this value during deploy and breaks the shorthand form.
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // Exposed to the client so plain asset URLs (images, videos, PDFs) can be
  // prefixed the same way Next.js prefixes its own links.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
