import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dima Dev — Telegram-боты, Mini Apps и сайты",
  description:
    "Создаю Telegram-ботов, мини-приложения (Mini Apps) и сайты. Быстро, современно, по делу — напишите в Telegram и обсудим задачу.",
  openGraph: {
    title: "Dima Dev — Telegram-боты, Mini Apps и сайты",
    description:
      "Создаю Telegram-ботов, мини-приложения (Mini Apps) и сайты. Быстро, современно, по делу.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-body">
        {children}
      </body>
    </html>
  );
}
