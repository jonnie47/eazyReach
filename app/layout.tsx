import type { Metadata } from "next";
import { Montserrat, Roboto_Flex } from "next/font/google";
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

export const metadata: Metadata = {
  title: "EazyReach - LinkedIn Contact Finder",
  description: "Find  phone numbers, verified emails, and complete contact profiles in seconds. Pay only for what you use.",
  icons: {
    icon: '/EazyE.png',
    shortcut: '/EazyE.png',
    apple: '/EazyE.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${robotoFlex.variable}`}>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
