import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/blog", label: "Блог" },
  { href: "/portfolio", label: "Портфолио" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center pt-16">
        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-mono text-sm text-white/55">Ошибка 404</p>
          <h1 className="page-heading mt-4 max-w-2xl font-display font-bold">
            Такой страницы нет, но <span className="hero-mark" style={{ marginLeft: 0 }}>решение</span> найдётся
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Возможно, ссылка устарела или в адресе опечатка. Перейдите в нужный раздел или напишите нам.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-white/85 transition-colors hover:border-white/50 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-6" fullOnMobile />
        </section>
      </main>
      <Footer />
    </>
  );
}
