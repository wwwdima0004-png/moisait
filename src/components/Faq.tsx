import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/markdown";
import { blocksToText } from "@/lib/markdown";
import Markdown from "./Markdown";
import JsonLd from "./JsonLd";

// Аккордеон на нативных <details>: работает без JavaScript и индексируется целиком.
export default function Faq({ items, title = "Частые вопросы", id = "faq" }: { items: FaqItem[]; title?: string; id?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={id} className="mt-16">
      <h2 id={id} className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 border-t border-white/10">
        {items.map((item) => (
          <details key={item.question} className="faq-item group border-b border-white/10">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-white sm:text-lg">
              {item.question}
              <Plus
                size={20}
                aria-hidden="true"
                className="shrink-0 text-white/60 transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <div className="pb-5 text-white/70">
              <Markdown blocks={item.answer} />
            </div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: blocksToText(item.answer) },
          })),
        }}
      />
    </section>
  );
}
