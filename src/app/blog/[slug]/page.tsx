import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Markdown from "@/components/Markdown";
import Faq from "@/components/Faq";
import Toc from "@/components/Toc";
import CtaBox from "@/components/CtaBox";
import ArticleCard from "@/components/ArticleCard";
import ServiceIcon from "@/components/ServiceIcon";
import JsonLd from "@/components/JsonLd";
import { getPost, getPosts, getRelatedPosts, getService, type Service } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { pageMetadata, ogImage } from "@/lib/seo";
import { site } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const services = post.services.map(getService).filter((s): s is Service => Boolean(s));
  const toc = post.faq.length ? [...post.toc, { id: "faq", text: post.faqTitle }] : post.toc;
  const url = `${site.url}/blog/${slug}`;

  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-16">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
          <Breadcrumbs
            items={[
              { name: "Блог", href: "/blog" },
              { name: post.title, href: `/blog/${slug}` },
            ]}
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <article className="min-w-0 max-w-[720px]">
            <header>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60">
                <span className="rounded-full border border-white/15 px-3 py-1 text-white/85">{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime} мин чтения</span>
              </div>
              <h1 className="page-heading mt-6 font-display font-bold">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{post.description}</p>
            </header>

            <Toc items={toc} variant="mobile" />

            <div className="mt-10">
              <Markdown blocks={post.body} />
            </div>

            <CtaBox />

            <Faq items={post.faq} title={post.faqTitle} />

            {services.length > 0 && (
              <section aria-labelledby="services-heading" className="mt-16">
                <h2 id="services-heading" className="font-display text-2xl font-semibold tracking-tight">
                  Услуги по теме
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/uslugi/${s.slug}`}
                        className="group flex min-h-16 items-center gap-4 rounded-xl border border-white/12 px-4 py-3 transition-colors hover:border-white/35"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                          <ServiceIcon name={s.icon} size={18} />
                        </span>
                        <span className="flex-1 font-medium text-white/90">{s.name}</span>
                        <ArrowRight size={16} className="text-white/50 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Toc items={toc} variant="desktop" />
            </div>
          </aside>
        </div>

        <section aria-labelledby="related-heading" className="border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="related-heading" className="section-heading font-display font-semibold tracking-tight">
              Читайте также
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
              {related.map((p) => (
                <ArticleCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "ru",
          articleSection: post.category,
          wordCount: post.words,
          url,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          image: `${site.url}${ogImage.url}`,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
