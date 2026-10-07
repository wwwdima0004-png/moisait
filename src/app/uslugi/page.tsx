import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Услуги: сайты, Telegram-боты, приложения и CRM в Бишкеке",
  description:
    "Разработка сайтов, Telegram-ботов, мини-приложений, мобильных и веб-приложений, CRM-систем, SaaS и автоматизация бизнеса в Бишкеке. Выберите услугу и напишите нам в WhatsApp.",
  path: "/uslugi",
});

export default function ServicesPage() {
  const services = getServices();
  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-16">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <Breadcrumbs items={[{ name: "Услуги", href: "/uslugi" }]} />
          <h1 className="page-heading mt-6 max-w-3xl font-display font-bold">Услуги Pulse Tech</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Делаем digital-продукты для бизнеса в Бишкеке и по всему Кыргызстану: от сайта до внутренней
            системы учёта. Выберите направление, чтобы узнать, как мы работаем и от чего зависит стоимость.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} headingLevel="h2" />
            ))}
          </div>
        </section>
        <Process />
        <Contact />
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Услуги Pulse Tech",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${site.url}/uslugi/${s.slug}`,
            name: s.name,
          })),
        }}
      />
    </>
  );
}
