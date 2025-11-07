export default async (request: Request) => {
  const url = new URL(request.url);
  const targetUrl = `https://blogs.vocallabs.ai${url.pathname}${url.search}`;
  
  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
    });
    
    let body = await response.text();
    
    // Replace blog URLs to keep them on our domain
    body = body.replace(/https?:\/\/blogs\.vocallabs\.ai/g, '');
    
    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/html',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (error) {
    return new Response('Blog proxy error', { status: 500 });
  }
};

export const config = {
  path: ['/blogs/*', '/blog/*'],
};
