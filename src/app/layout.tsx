import type { Metadata } from "next";
import { Exo_2, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pulse Tech — Telegram-боты, Mini Apps и сайты",
  description:
    "Pulse Tech создаёт Telegram-ботов, мини-приложения (Mini Apps) и сайты. Быстро, современно, по делу — напишите в Telegram и обсудим задачу.",
  openGraph: {
    title: "Pulse Tech — Telegram-боты, Mini Apps и сайты",
    description:
      "Pulse Tech создаёт Telegram-ботов, мини-приложения (Mini Apps) и сайты. Быстро, современно, по делу.",
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
      className={`${exo2.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-body">
        {children}
      </body>
    </html>
  );
}
