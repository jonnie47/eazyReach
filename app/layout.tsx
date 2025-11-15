import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingCTA } from "@/components/ui";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "EazyReach - LinkedIn Contact Finder",
  description: "Find director phone numbers, verified emails, and complete contact profiles in seconds. Pay only for what you use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
