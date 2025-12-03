import { MetadataRoute } from 'next';

const BASE_URL = 'https://eazyreach.app';
const BLOG_SOURCE_URL = 'https://blogs.vocallabs.ai';

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/partners', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/dashboard', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/coming-soon', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/director-phone', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/unlimited-email', priority: 0.8, changeFrequency: 'weekly' as const },
  
  // Feature pages
  { path: '/features/ai-calendar', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-chat', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-enrichment', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-inbound', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-inbox', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-linkedin', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-notetaker', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/ai-outbound', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/features/chrome-extension', priority: 0.9, changeFrequency: 'weekly' as const },
  
  // India SEO pages
  { path: '/india', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/india/mumbai', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/india/bangalore', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/india/delhi', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/india/pune', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/india/chennai', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/india/hyderabad', priority: 0.8, changeFrequency: 'weekly' as const },
  
  // Comparison pages
  { path: '/compare/peakai-vs-easyleadz-vs-eazyreach', priority: 0.8, changeFrequency: 'monthly' as const },
  
  // Blog listing page
  { path: '/blogs', priority: 0.8, changeFrequency: 'daily' as const },
];

interface BlogPost {
  slug: string;
  updatedAt?: string;
  publishedAt?: string;
}

// Function to fetch blog posts from the source
async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try to fetch sitemap from the blog source
    const sitemapResponse = await fetch(`${BLOG_SOURCE_URL}/sitemap.xml`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (sitemapResponse.ok) {
      const sitemapXml = await sitemapResponse.text();
      return parseBlogUrlsFromSitemap(sitemapXml);
    }

    // Fallback: Try to fetch blog listing page and extract links
    const blogListResponse = await fetch(`${BLOG_SOURCE_URL}/blogs`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 3600 }
    });

    if (blogListResponse.ok) {
      const html = await blogListResponse.text();
      return extractBlogLinksFromHtml(html);
    }

    return [];
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

// Parse blog URLs from sitemap XML
function parseBlogUrlsFromSitemap(xml: string): BlogPost[] {
  const blogs: BlogPost[] = [];
  
  // Extract URLs that match /blog/ or /blogs/ pattern
  const urlRegex = /<url>\s*<loc>([^<]*(?:\/blog\/|\/blogs\/)[^<]*)<\/loc>(?:\s*<lastmod>([^<]*)<\/lastmod>)?/g;
  let match;
  
  while ((match = urlRegex.exec(xml)) !== null) {
    const fullUrl = match[1];
    const lastmod = match[2];
    
    // Extract slug from URL
    const blogMatch = fullUrl.match(/\/blogs?\/(.+?)(?:\/)?$/);
    if (blogMatch && blogMatch[1]) {
      blogs.push({
        slug: blogMatch[1],
        updatedAt: lastmod
      });
    }
  }
  
  return blogs;
}

// Extract blog links from HTML page
function extractBlogLinksFromHtml(html: string): BlogPost[] {
  const blogs: BlogPost[] = [];
  const seen = new Set<string>();
  
  // Match href patterns for blog posts
  const hrefRegex = /href=["'](?:https?:\/\/[^"']*)?\/blogs?\/([^"'#?]+)["']/g;
  let match;
  
  while ((match = hrefRegex.exec(html)) !== null) {
    const slug = match[1].replace(/\/$/, ''); // Remove trailing slash
    
    // Skip non-article slugs
    if (slug && !seen.has(slug) && !slug.includes('.') && slug !== 'blogs' && slug !== 'blog') {
      seen.add(slug);
      blogs.push({ slug });
    }
  }
  
  return blogs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  
  // Generate static page entries
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
  
  // Fetch and generate blog entries
  const blogPosts = await fetchBlogPosts();
  
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  // Also add /blogs/:slug entries if needed (in case both routes are used)
  const blogsEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  return [...staticEntries, ...blogEntries, ...blogsEntries];
}

// Enable revalidation every hour
export const revalidate = 3600;
