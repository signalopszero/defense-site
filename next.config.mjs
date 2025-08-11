/**
 * Update configuration to enable development on Cloudflare Pages.
 *
 * When developing locally against Cloudflare Pages with the `@cloudflare/next-on-pages`
 * adapter installed, we need to hook into Next.js' dev server so that Cloudflare
 * bindings (for example KV, D1, R2) are available. The `setupDevPlatform` helper
 * from `@cloudflare/next-on-pages/next-dev` does exactly that. According to
 * Cloudflare's official documentation, you should import this helper and call
 * it when `process.env.NODE_ENV === 'development'`【425952267815898†L75-L83】.
 */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  // Top‑level await is allowed in ECMAScript modules (which Next.js config files are)
  // See Cloudflare docs for details【425952267815898†L75-L83】. This will patch the dev
  // server so that Pages bindings work locally.
  await setupDevPlatform();
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    // restrict remote images; all assets served from /public
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'", // example CSP; adjust for analytics if added
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
