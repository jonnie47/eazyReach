import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug?: string[] }> }
) {
  const params = await context.params;
  const slug = params.slug ? params.slug.join('/') : '';
  const targetUrl = `https://blogs.vocallabs.ai/blogs/${slug}`;
  
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      return new NextResponse('Blog not found', { status: 404 });
    }

    let html = await response.text();
    
    // Replace all blog URLs to use our domain
    html = html.replace(/https?:\/\/blogs\.vocallabs\.ai\/blogs/g, '/blogs');
    html = html.replace(/https?:\/\/blogs\.vocallabs\.ai\/blog/g, '/blog');
    html = html.replace(/https?:\/\/blogs\.vocallabs\.ai/g, '');
    
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (error) {
    console.error('Blog proxy error:', error);
    return new NextResponse('Failed to load blog', { status: 500 });
  }
}
