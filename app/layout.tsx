import type { Metadata } from "next";
import { Montserrat, Roboto_Flex } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingCTA } from "@/components/ui";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

const BASE_URL = 'https://eazyreach.app';

export const metadata: Metadata = {
  title: {
    default: "EazyReach — AI-First B2B Contact Enrichment & Outreach Platform India",
    template: "%s | EazyReach",
  },
  description:
    "Verified phone numbers, emails & LinkedIn contacts for Indian decision-makers. The AI-first Apollo, Lusha & EasyLeadz alternative — enrichment, browser calling & outreach automation in one platform.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "LinkedIn phone number finder",
    "LinkedIn contact finder",
    "best LinkedIn contact finder India",
    "B2B contact database India",
    "sales prospecting tool India",
    "EasyLeadz alternative India",
    "Apollo alternative India",
    "Lusha alternative India",
    "AI calling platform",
    "B2B outreach automation",
    "DIN director phone lookup",
    "director contact India",
  ],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "EazyReach",
    title: "EazyReach — AI-First B2B Contact Enrichment & Outreach Platform India",
    description:
      "The AI-first Apollo, Lusha & EasyLeadz alternative for Indian sales teams. Verified phone numbers, LinkedIn enrichment, browser calling & outreach automation in one platform.",
    images: [
      {
        url: `${BASE_URL}/EazyE.png`,
        width: 1200,
        height: 630,
        alt: "EazyReach — AI-First B2B Outreach Platform",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eazyreach",
    title: "EazyReach — AI-First B2B Contact Enrichment & Outreach Platform India",
    description:
      "The AI-first Apollo, Lusha & EasyLeadz alternative. Verified phones, LinkedIn enrichment & AI calling for Indian sales teams.",
    images: [`${BASE_URL}/EazyE.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/EazyE.png',
    shortcut: '/EazyE.png',
    apple: '/EazyE.png',
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EazyReach",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Chrome Extension",
  url: BASE_URL,
  description:
    "AI-first B2B contact enrichment and outreach execution platform for Indian sales teams. Find verified LinkedIn phone numbers, emails, and director contacts using DIN intelligence.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0",
    description: "Credit-based model. No seat penalties. Shared credit pool.",
  },
  featureList: [
    "LinkedIn contact finder",
    "B2B contact enrichment",
    "AI calling platform",
    "DIN-based director intelligence",
    "Browser-based calling",
    "AI voice agents",
    "Shared credit pool",
  ],
  applicationSubCategory: "Sales Intelligence",
  inLanguage: "en-IN",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EazyReach",
  url: BASE_URL,
  logo: `${BASE_URL}/EazyReach.png`,
  description:
    "AI-first B2B contact enrichment and outreach platform built for Indian sales teams.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://twitter.com/eazyreach",
    "https://x.com/eazyreach",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${montserrat.className} ${robotoFlex.variable}`}>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
          <FloatingCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
