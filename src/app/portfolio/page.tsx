import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import { portfolioCases } from "@/config/site";
import { getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Портфолио: проекты Pulse Tech",
  description:
    "Портфолио Pulse Tech: сайты, Telegram-боты, мини-приложения и веб-сервисы. Раздел пополняется, первые кейсы готовятся к публикации.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const services = getServices().slice(0, 3);
  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-16">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
          <Breadcrumbs items={[{ name: "Портфолио", href: "/portfolio" }]} />
          <h1 className="page-heading mt-6 font-display font-bold">Портфолио</h1>

          {portfolioCases.length > 0 ? (
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {portfolioCases.map((item) => (
                <article key={item.id} className="flex flex-col overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[4/3] bg-white/[0.04]">
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-semibold">{item.title}</h2>
                    <p className="mt-3 text-sm text-white/65">
                      <span className="text-white/85">Задача: </span>
                      {item.task}
                    </p>
                    <p className="mt-3 text-sm text-white/65">
                      <span className="text-white/85">Результат: </span>
                      {item.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-dashed border-white/20 p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-white/70">
                <span className="pulse-dot" aria-hidden="true" />
                Скоро
              </span>
              <h2 className="mt-6 max-w-2xl font-display text-2xl font-semibold sm:text-3xl">
                Первые кейсы готовятся к публикации
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Мы не выдумываем проекты для красоты: здесь появятся только реальные работы с описанием
                задачи и результата. Пока раздел пуст, можно обсудить вашу задачу напрямую.
              </p>
              <WhatsAppButton className="mt-8" fullOnMobile />
            </div>
          )}

          <h2 className="mt-20 font-display text-2xl font-semibold sm:text-3xl">Чем можем помочь уже сейчас</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
