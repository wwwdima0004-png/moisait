import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/config/site";

export const metadata: Metadata = {
  title: "Блог — Dima Dev",
  description: "Заметки о разработке Telegram-ботов, мини-приложений и сайтов. Скоро здесь появятся первые статьи.",
};

// Заготовка под будущие статьи: как только появятся посты,
// каждый превращается в карточку-ссылку в списке ниже.
const posts: { title: string; href: string }[] = [];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-4xl px-6 py-28">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/50">Блог</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Статьи скоро появятся
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Здесь будут разборы кейсов, заметки про Telegram-ботов, Mini Apps и веб-разработку.
            Пока список пуст — загляните позже или напишите напрямую, если есть вопрос.
          </p>

          {posts.length > 0 ? (
            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-center justify-between py-6 text-lg transition-colors hover:text-white/70"
                >
                  {post.title}
                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-white/10 p-10 text-center text-white/50">
              Первая статья в разработке.
            </div>
          )}

          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base text-white/80 transition-colors hover:border-white/50 hover:text-white"
          >
            Написать в Telegram
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
