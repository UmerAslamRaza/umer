/**
 * Base path the site is deployed under (e.g. "/umer" on GitHub Pages, "" locally).
 * Defined once in next.config.mjs and inlined at build time.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Prefix a root-relative asset path with the deployment base path.
 * Needed for raw asset URLs (next/image with `unoptimized`, <video>, PDFs);
 * next/link already handles the base path for page links.
 */
export const withBasePath = (path = '') => `${BASE_PATH}${path}`;
