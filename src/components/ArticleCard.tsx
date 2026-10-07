import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/format";

export default function ArticleCard({ post, headingLevel = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 p-6 transition-[border-color,background-color] duration-300 hover:border-white/30 hover:bg-white/[0.03] sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-white/60">
        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-white/80">{post.category}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>{post.readingTime} мин</span>
      </div>
      <Heading className="mt-5 font-display text-lg font-semibold leading-snug text-white sm:text-xl">{post.title}</Heading>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/65">{post.description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
        Читать статью
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
