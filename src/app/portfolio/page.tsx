import type { Metadata } from "next";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Портфолио — Pulse Tech",
  description: "Сайты Pulse Tech: от лендингов и каталогов до посадочных страниц под запуск продукта.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
