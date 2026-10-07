import type { Metadata } from "next";
import { Fraunces, Great_Vibes, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { bakeryJsonLd, getSiteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LittleBakes | Custom celebration cakes in Mississauga",
    template: "%s | LittleBakes",
  },
  description:
    "Custom and celebration cakes in Mississauga, Ontario. Weddings, birthdays, and sweet treats. Place your order by Instagram DM.",
  applicationName: "LittleBakes",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "LittleBakes",
    title: "LittleBakes | Custom celebration cakes in Mississauga",
    description:
      "Weddings, birthdays, and sweet treats from LittleBakes in Mississauga. Order by Instagram DM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleBakes | Custom celebration cakes in Mississauga",
    description:
      "Weddings, birthdays, and sweet treats from LittleBakes in Mississauga. Order by Instagram DM.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = bakeryJsonLd(siteUrl);

  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} ${script.variable} h-full`}>
      <body className="min-h-full bg-cream text-cocoa antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
