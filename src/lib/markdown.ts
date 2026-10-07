// Минимальный парсер Markdown без зависимостей: статьи и страницы услуг
// рендерятся на этапе сборки, поэтому тяжёлые MD/MDX-библиотеки не нужны.
// Поддерживается: ## и ### заголовки, абзацы, списки (- и 1.), цитаты (>),
// таблицы (| a | b |), **жирный**, *курсив* и [ссылки](/путь).

export type Inline =
  | { type: "text"; value: string }
  | { type: "strong"; children: Inline[] }
  | { type: "em"; children: Inline[] }
  | { type: "link"; href: string; children: Inline[] };

export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "p"; children: Inline[] }
  | { type: "ul"; items: Inline[][]; checklist?: boolean }
  | { type: "ol"; items: Inline[][] }
  | { type: "quote"; children: Inline[][] }
  | { type: "table"; head: Inline[][]; rows: Inline[][][] };

export type FaqItem = { question: string; answer: Block[] };

const translit: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y",
  к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
  х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .split("")
    .map((ch) => translit[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function parseInline(src: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|\*(?!\s)(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push({ type: "text", value: src.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ type: "strong", children: parseInline(m[1]) });
    else if (m[2] !== undefined) out.push({ type: "link", href: m[3], children: parseInline(m[2]) });
    else if (m[4] !== undefined) out.push({ type: "em", children: parseInline(m[4]) });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ type: "text", value: src.slice(last) });
  return out;
}

export function inlineToText(nodes: Inline[]): string {
  return nodes.map((n) => (n.type === "text" ? n.value : inlineToText(n.children))).join("");
}

export function blocksToText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "h2":
        case "h3":
          return b.text;
        case "p":
          return inlineToText(b.children);
        case "ul":
        case "ol":
          return b.items.map(inlineToText).join(" ");
        case "quote":
          return b.children.map(inlineToText).join(" ");
        case "table":
          return [b.head, ...b.rows].map((r) => r.map(inlineToText).join(" ")).join(" ");
      }
    })
    .join("\n");
}

const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => parseInline(c.trim()));

export function parseMarkdown(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  const usedIds = new Map<string, number>();
  const uniqueId = (text: string) => {
    const base = slugify(text) || "section";
    const n = usedIds.get(base) ?? 0;
    usedIds.set(base, n + 1);
    return n ? `${base}-${n + 1}` : base;
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4).trim();
      blocks.push({ type: "h3", id: uniqueId(text), text });
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3).trim();
      blocks.push({ type: "h2", id: uniqueId(text), text });
      i++;
      continue;
    }

    if (/^[-*] /.test(trimmed)) {
      const raw: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i].trim())) {
        raw.push(lines[i].trim().slice(2));
        i++;
      }
      // «- [ ] пункт» — чек-лист: квадратик вместо маркера.
      const checklist = raw.every((r) => /^\[[ xх]\] /i.test(r));
      const items = raw.map((r) => parseInline(checklist ? r.slice(4) : r));
      blocks.push({ type: "ul", items, ...(checklist && { checklist }) });
      continue;
    }

    if (/^\d+[.)] /.test(trimmed)) {
      const items: Inline[][] = [];
      while (i < lines.length && /^\d+[.)] /.test(lines[i].trim())) {
        items.push(parseInline(lines[i].trim().replace(/^\d+[.)] /, "")));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const parts: Inline[][] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        const text = lines[i].trim().replace(/^>\s?/, "");
        if (text) parts.push(parseInline(text));
        i++;
      }
      blocks.push({ type: "quote", children: parts });
      continue;
    }

    if (trimmed.startsWith("|")) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i]);
        i++;
      }
      const body = rows.filter((r) => !/^\s*\|[\s:|-]+\|\s*$/.test(r));
      const [head, ...rest] = body;
      blocks.push({ type: "table", head: splitRow(head), rows: rest.map(splitRow) });
      continue;
    }

    // Абзац: собираем подряд идущие строки до пустой строки или нового блока.
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3} |[-*] |\d+[.)] |>|\|)/.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", children: parseInline(para.join(" ")) });
  }

  return blocks;
}

const FAQ_HEADING = /^(частые вопросы|вопросы и ответы|faq)/i;

// Отделяет блок «Частые вопросы» (## заголовок + ### вопросы) от основного текста.
export function extractFaq(blocks: Block[]): { body: Block[]; faq: FaqItem[]; faqTitle?: string } {
  const start = blocks.findIndex((b) => b.type === "h2" && FAQ_HEADING.test(b.text));
  if (start === -1) return { body: blocks, faq: [] };

  let end = blocks.findIndex((b, idx) => idx > start && b.type === "h2");
  if (end === -1) end = blocks.length;

  const faq: FaqItem[] = [];
  for (const b of blocks.slice(start + 1, end)) {
    if (b.type === "h3") faq.push({ question: b.text, answer: [] });
    else if (faq.length) faq[faq.length - 1].answer.push(b);
  }

  const heading = blocks[start];
  return {
    body: [...blocks.slice(0, start), ...blocks.slice(end)],
    faq,
    faqTitle: heading.type === "h2" ? heading.text : undefined,
  };
}

export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}
