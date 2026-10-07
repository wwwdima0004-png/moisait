import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/content";
import ArticleCard from "./ArticleCard";

export default function LatestPosts({ posts, title = "Полезное в блоге" }: { posts: Post[]; title?: string }) {
  if (!posts.length) return null;
  return (
    <section className="border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Блог</p>
            <h2 className="section-heading mt-3 font-display font-semibold tracking-tight">{title}</h2>
          </div>
          <Link href="/blog" className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/75 hover:text-white">
            Все статьи
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {posts.map((post) => (
            <div key={post.slug} className="h-full">
              <ArticleCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
