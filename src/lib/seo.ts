import type { Metadata } from "next";
import { site } from "@/config/site";

// Общая OG-картинка (1200×630, ч/б): public/og-image.png.
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Pulse Tech — разработка сайтов, Telegram-ботов и приложений в Бишкеке",
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
};

// Единый конструктор метаданных страницы: title, description, canonical, OG и Twitter.
// Каждая страница обязана задавать свой canonical, поэтому он не наследуется из layout.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
}: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
      ...(type === "article" && { publishedTime, modifiedTime: modifiedTime ?? publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
