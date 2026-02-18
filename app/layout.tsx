import type { Metadata } from "next";
import { Montserrat, Roboto_Flex } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingCTA } from "@/components/ui";

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
    "Find verified phone numbers, emails & LinkedIn contacts for Indian decision-makers. AI-powered B2B contact enrichment, browser calling & outreach automation — built for Indian sales teams.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "LinkedIn contact finder",
    "B2B contact enrichment tool",
    "sales prospecting tool India",
    "AI calling platform",
    "B2B outreach automation",
    "Apollo alternative India",
    "Lusha alternative India",
    "B2B contact database India",
    "LinkedIn phone number finder",
    "director contact India",
  ],
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "EazyReach",
    title: "EazyReach — AI-First B2B Contact Enrichment & Outreach Platform India",
    description:
      "Find verified phone numbers, emails & LinkedIn contacts for Indian decision-makers. AI-powered enrichment, browser calling & outreach automation — built for Indian sales teams.",
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
      "Find verified phone numbers, emails & LinkedIn contacts for Indian decision-makers. AI-powered enrichment & outreach automation.",
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
    description: "Pay-per-use model. No seat penalties. Shared credit pool.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${montserrat.className} ${robotoFlex.variable}`}>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
