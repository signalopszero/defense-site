export const runtime = 'edge';

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const content = `User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain' } });
}
