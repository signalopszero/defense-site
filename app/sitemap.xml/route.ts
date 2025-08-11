export const runtime = 'edge'

/**
 * Generate a simple XML sitemap listing the major pages of the site. Update this list when adding new routes.
 */
export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const pages = [
    '/',
    '/services',
    '/services/radar',
    '/services/ai',
    '/services/aerospace',
    '/case-studies',
    '/contracting',
    '/about',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/compliance',
  ]
  const urls = pages
    .map((path) => `<url><loc>${origin}${path}</loc></url>`) 
    .join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}