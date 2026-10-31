export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  absoluteUrl,
  rssAlternates,
  siteDescription,
  siteKeywords,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site";

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/vazirmatn-arabic-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-arabic-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-arabic-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-arabic-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-arabic-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/vazirmatn-arabic-900-normal.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName }],
  alternates: {
    ...rssAlternates,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "fa_IR",
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: absoluteUrl("/og-default.png"), alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bimenews",
    title: `${siteName} | ${siteTagline}`,
    description: siteDescription,
    images: [absoluteUrl("/og-default.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} font-vazir antialiased bg-white text-zinc-900 min-h-screen flex flex-col`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
