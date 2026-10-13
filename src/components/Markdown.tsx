import Link from "next/link";
import { CircleAlert, Lightbulb, ListChecks, MessageSquareText } from "lucide-react";
import { calloutLabels, type Block, type CalloutKind, type Inline } from "@/lib/markdown";
import CtaBox from "./CtaBox";

const calloutIcons: Record<CalloutKind, typeof Lightbulb> = {
  summary: ListChecks,
  tip: Lightbulb,
  important: CircleAlert,
  example: MessageSquareText,
};

function InlineNodes({ nodes }: { nodes: Inline[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.type) {
          case "text":
            return <span key={i}>{n.value}</span>;
          case "strong":
            return (
              <strong key={i} className="font-semibold text-white">
                <InlineNodes nodes={n.children} />
              </strong>
            );
          case "em":
            return (
              <em key={i}>
                <InlineNodes nodes={n.children} />
              </em>
            );
          case "link": {
            const cls = "text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white";
            return n.href.startsWith("/") ? (
              <Link key={i} href={n.href} className={cls}>
                <InlineNodes nodes={n.children} />
              </Link>
            ) : (
              <a key={i} href={n.href} target="_blank" rel="noopener noreferrer" className={cls}>
                <InlineNodes nodes={n.children} />
              </a>
            );
          }
        }
      })}
    </>
  );
}

// Типографика длинного текста: короткая строка (~68 знаков), воздух между блоками.
// Все статьи и страницы услуг оформляются этими классами (globals.css, раздел
// «Длинный текст»), поэтому новые материалы автоматически выглядят так же.
export default function Markdown({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-pulse">
      <Blocks blocks={blocks} />
    </div>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={b.id}>
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i}>
                <InlineNodes nodes={b.children} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className={b.checklist ? "checklist" : undefined}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <InlineNodes nodes={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <InlineNodes nodes={item} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i}>
                {b.children.map((line, j) => (
                  <p key={j}>
                    <InlineNodes nodes={line} />
                  </p>
                ))}
              </blockquote>
            );
          case "callout": {
            const Icon = calloutIcons[b.kind];
            return (
              <aside key={i} className={`callout callout-${b.kind}`} aria-label={calloutLabels[b.kind]}>
                <p className="callout-label">
                  <Icon size={16} aria-hidden="true" />
                  {calloutLabels[b.kind]}
                </p>
                <Blocks blocks={b.children} />
              </aside>
            );
          }
          case "steps":
            return (
              <ol key={i} className="steps">
                {b.items.map((item, j) => (
                  <li key={j}>
                    <span className="steps-num" aria-hidden="true">
                      {j + 1}
                    </span>
                    <div>
                      <InlineNodes nodes={item} />
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "cards":
            return (
              <ul key={i} className="cards">
                {b.items.map((item, j) => (
                  <li key={j}>
                    {item.title.length > 0 && (
                      <p className="cards-title">
                        <InlineNodes nodes={item.title} />
                      </p>
                    )}
                    <p>
                      <InlineNodes nodes={item.text} />
                    </p>
                  </li>
                ))}
              </ul>
            );
          case "compare":
            return (
              <div key={i} className="compare">
                {b.columns.map((col, j) => (
                  <div key={j} className="compare-col">
                    <p className="compare-title">{col.title}</p>
                    <Blocks blocks={col.children} />
                  </div>
                ))}
              </div>
            );
          case "cta":
            return (
              <CtaBox key={i} title={b.title || undefined} className="cta-inline">
                <Blocks blocks={b.children} />
              </CtaBox>
            );
          case "table":
            return (
              <div key={i} className="table-wrap" role="region" aria-label="Таблица" tabIndex={0}>
                <table className={b.head.length > 3 ? "table-wide" : undefined}>
                  <thead>
                    <tr>
                      {b.head.map((cell, j) => (
                        <th key={j} scope="col">
                          <InlineNodes nodes={cell} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, j) => (
                          <td key={j}>
                            <InlineNodes nodes={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </>
  );
}
