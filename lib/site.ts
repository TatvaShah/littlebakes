export const instagramUrl = "https://www.instagram.com/littlebakes.ca/";
export const instagramDmUrl = "https://ig.me/m/littlebakes.ca";
export const tiktokUrl = "https://www.tiktok.com/@littlebakes.ca";
export const facebookUrl = "https://www.facebook.com/p/Little-Bakes-61575265015788/";
export const linktreeUrl = "https://linktr.ee/littlebakes.ca";
export const valentineFormUrl = "https://form.jotform.com/260232484024044";
export const emailAddress = "littlebakes.ca@gmail.com";
export const claudauraUrl = "https://www.claudaura.ca";

export function getSiteUrl() {
  const host = process.env.VERCEL_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (host) return `https://${host}`;
  return "http://localhost:3000";
}

export function bakeryJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "LittleBakes",
    alternateName: "LittleBakes | Mississauga Cakes",
    description:
      "Custom and celebration cakes in Mississauga, Ontario. Weddings, birthdays, and sweet treats. Orders are placed by Instagram DM.",
    url: siteUrl,
    image: `${siteUrl}/cakes/wedding.webp`,
    logo: `${siteUrl}/cakes/logo.png`,
    email: emailAddress,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: ["Mississauga", "Greater Toronto Area"],
    sameAs: [instagramUrl, tiktokUrl, facebookUrl, linktreeUrl],
    servesCuisine: "Custom cakes",
  };
}
