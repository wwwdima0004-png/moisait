import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Блог о разработке сайтов, Telegram-ботов и приложений",
  description:
    "Статьи Pulse Tech для бизнеса в Бишкеке: сколько стоит сайт и Telegram-бот, как выбрать разработчика, что такое мини-приложения и CRM, как автоматизировать процессы.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <Header />
      <main id="main" className="flex-1 pt-16">
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
          <Breadcrumbs items={[{ name: "Блог", href: "/blog" }]} />
          <h1 className="page-heading mt-6 max-w-3xl font-display font-bold">Блог Pulse Tech</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Простым языком о сайтах, Telegram-ботах, мини-приложениях и автоматизации: сколько это стоит,
            как устроена разработка и что выбрать для вашего бизнеса.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} headingLevel="h2" />
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Блог Pulse Tech",
          url: `${site.url}/blog`,
          inLanguage: "ru",
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
    </>
  );
}
