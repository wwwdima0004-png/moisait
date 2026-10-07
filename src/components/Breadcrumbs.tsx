import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/config/site";
import JsonLd from "./JsonLd";

export type Crumb = { name: string; href: string };

// Хлебные крошки + разметка BreadcrumbList. Первый пункт «Главная» добавляется автоматически.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Главная", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Хлебные крошки" className="text-[13px] text-white/60">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="line-clamp-1 text-white/80">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="py-1 transition-colors hover:text-white">
                      {c.name}
                    </Link>
                    <ChevronRight size={12} aria-hidden="true" className="text-white/30" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${site.url}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  );
}
