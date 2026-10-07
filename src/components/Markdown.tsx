import Link from "next/link";
import type { Block, Inline } from "@/lib/markdown";

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
export default function Markdown({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-pulse">
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
          case "table":
            return (
              <div key={i} className="table-wrap" role="region" aria-label="Таблица" tabIndex={0}>
                <table>
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
    </div>
  );
}
