import type { Metadata } from "next";
import { Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | Clearing, Forwarding & Logistics — Karachi, Pakistan`,
    template: `%s | ${site.name}`,
  },
  description:
    "Alhanif Group is a family-run clearing, forwarding, transportation, and logistics company in Karachi, Pakistan, with a legacy spanning four generations.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${site.name} | Clearing, Forwarding & Logistics`,
    description:
      "Customs clearance, freight, transportation, and documentation from Karachi, Pakistan — a family legacy spanning four generations.",
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/logo.png", width: 1024, height: 559, alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Clearing, Forwarding & Logistics`,
    description:
      "Customs clearance, freight, transportation, and documentation from Karachi, Pakistan — a family legacy spanning four generations.",
    images: ["/images/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.domain,
  logo: `${site.domain}/images/logo.png`,
  telephone: site.contact.phoneDisplay,
  email: site.contact.emails[0],
  foundingDate: site.foundedYear,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLine,
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: Object.values(site.social).filter((url) => url !== "#"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
