import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Ruda, Inter, JetBrains_Mono } from "next/font/google";
import { site, contactLinks, socialProfiles, verification } from "@/config/site";
import JsonLd from "@/components/JsonLd";
import { ogImage } from "@/lib/seo";
import "./globals.css";

// Все четыре гарнитуры вариативные: без списка начертаний next/font грузит
// один файл на набор символов вместо отдельного файла на каждый вес.

// Space Grotesk не имеет кириллицы — только латинский wordmark «Pulse Tech».
const spaceGrotesk = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// Ruda — заголовки (h1–h3), полноценная кириллица.
const ruda = Ruda({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

// Моноширинный — мелкие технические подписи, не критичен для первого экрана.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: false,
});

const defaultTitle = "Разработка сайтов, Telegram-ботов и приложений в Бишкеке — Pulse Tech";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  verification: {
    ...(verification.google && { google: verification.google }),
    ...(verification.yandex && { yandex: verification.yandex }),
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}${ogImage.url}`,
  description: site.description,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.countryCode,
  },
  areaServed: [
    { "@type": "City", name: site.city },
    { "@type": "Country", name: site.country },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    contactType: "customer service",
    availableLanguage: ["ru"],
    url: contactLinks.whatsapp,
  },
  sameAs: socialProfiles,
  knowsAbout: [
    "Разработка сайтов",
    "Telegram-боты",
    "Telegram Mini Apps",
    "Мобильные приложения",
    "CRM-системы",
    "SaaS",
    "Автоматизация бизнес-процессов",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "ru",
  publisher: { "@id": `${site.url}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${ruda.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-body text-foreground">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
        >
          Перейти к содержимому
        </a>
        {children}
        <JsonLd data={[organization, website]} />
      </body>
    </html>
  );
}
