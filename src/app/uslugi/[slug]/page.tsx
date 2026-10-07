import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Markdown from "@/components/Markdown";
import Faq from "@/components/Faq";
import CtaBox from "@/components/CtaBox";
import LatestPosts from "@/components/LatestPosts";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { getPost, getPosts, getService, getServices, type Post } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site, contactLinks } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/uslugi/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.description, path: `/uslugi/${slug}` });
}

export default async function ServicePage({ params }: PageProps<"/uslugi/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = getServices().filter((s) => s.slug !== slug);
  const linked = service.posts.map(getPost).filter((p): p is Post => Boolean(p));
  const posts = [...linked, ...getPosts().filter((p) => p.services.includes(slug) && !linked.includes(p))].slice(0, 3);

  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-16">
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
            <Breadcrumbs
              items={[
                { name: "Услуги", href: "/uslugi" },
                { name: service.name, href: `/uslugi/${slug}` },
              ]}
            />
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]">
              <ServiceIcon name={service.icon} size={22} />
            </div>
            <h1 className="page-heading mt-6 max-w-4xl font-display font-bold">{service.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{service.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <WhatsAppButton fullOnMobile />
              <a href={contactLinks.phone} className="inline-flex min-h-12 items-center justify-center gap-2 text-white/75 hover:text-white">
                <Phone size={16} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <article className="min-w-0 max-w-[720px]">
            <Markdown blocks={service.body} />
            <CtaBox
              title={`Обсудим ваш проект: ${service.name.toLowerCase()}`}
              text="Расскажите о задаче в WhatsApp. Зададим вопросы, предложим решение и сориентируем по срокам и стоимости."
            />
            <Faq items={service.faq} title={service.faqTitle} />
          </article>

          <aside className="lg:pt-1">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">Другие услуги</p>
              <ul className="mt-4 border-t border-white/10">
                {others.map((s) => (
                  <li key={s.slug} className="border-b border-white/10">
                    <Link
                      href={`/uslugi/${s.slug}`}
                      className="group flex min-h-12 items-center justify-between gap-3 py-2 text-sm text-white/75 transition-colors hover:text-white"
                    >
                      <span className="flex items-center gap-3">
                        <ServiceIcon name={s.icon} size={16} className="text-white/60" />
                        {s.name}
                      </span>
                      <ArrowRight size={14} className="text-white/40 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <LatestPosts posts={posts} title="Статьи по теме" />
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.description,
          url: `${site.url}/uslugi/${slug}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: [
            { "@type": "City", name: site.city },
            { "@type": "Country", name: site.country },
          ],
        }}
      />
    </>
  );
}
