// Оглавление по заголовкам H2. На телефоне — раскрывающийся список, на десктопе — в боковой колонке.
export default function Toc({ items, variant }: { items: { id: string; text: string }[]; variant: "mobile" | "desktop" }) {
  if (items.length < 2) return null;
  const links = (
    <ol className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block py-1.5 text-sm leading-snug text-white/65 transition-colors hover:text-white"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  if (variant === "mobile") {
    return (
      <details className="faq-item group mt-8 rounded-2xl border border-white/12 px-5 lg:hidden">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-display font-semibold">
          Содержание
          <span aria-hidden="true" className="text-white/60 transition-transform group-open:rotate-180">
            ▾
          </span>
        </summary>
        <nav aria-label="Содержание" className="pb-4">
          {links}
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="Содержание" className="hidden lg:block">
      <p className="eyebrow">Содержание</p>
      <div className="mt-4 border-l border-white/10 pl-4">{links}</div>
    </nav>
  );
}
