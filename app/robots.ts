import { NextRequest } from 'next/server'

export const runtime = 'edge'

export function GET(req: NextRequest) {
  const content = `User-agent: *\nAllow: /\nSitemap: ${req.nextUrl.origin}/sitemap.xml`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}