import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { countWords, blocksToText, extractFaq, parseMarkdown, type Block, type FaqItem } from "./markdown";
import type { ServiceIcon } from "@/config/site";

// Контент хранится в Markdown-файлах с frontmatter:
//   src/content/blog/<slug>.md      — статьи блога
//   src/content/services/<slug>.md  — посадочные страницы услуг
// Имя файла = адрес страницы. Чтобы добавить статью, скопируй любой файл
// из src/content/blog, переименуй и поменяй поля во frontmatter и текст.
// Всё читается только во время сборки: страницы генерируются статически.

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

type Frontmatter = Record<string, string>;

function parseFile(file: string): { data: Frontmatter; content: string } {
  const raw = fs.readFileSync(file, "utf8").replace(/^﻿/, "");
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1 || line.trim().startsWith("#")) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["'](.*)["']$/, "$1");
    if (key) data[key] = value;
  }
  return { data, content: match[2] };
}

const list = (value?: string) =>
  (value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

function readDir(dir: string) {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => ({ slug: f.replace(/\.md$/, ""), ...parseFile(path.join(full, f)) }));
}

type Parsed = {
  body: Block[];
  faq: FaqItem[];
  faqTitle: string;
  toc: { id: string; text: string }[];
  words: number;
};

function parseBody(content: string): Parsed {
  const blocks = parseMarkdown(content);
  const { body, faq, faqTitle } = extractFaq(blocks);
  const toc = body.flatMap((b) => (b.type === "h2" ? [{ id: b.id, text: b.text }] : []));
  return {
    body,
    faq,
    faqTitle: faqTitle ?? "Частые вопросы",
    toc,
    words: countWords(blocksToText(blocks)),
  };
}

export type Post = Parsed & {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  readingTime: number;
  services: string[];
  related: string[];
};

export const getPosts = cache((): Post[] => {
  return readDir("blog")
    .map(({ slug, data, content }) => {
      const parsed = parseBody(content);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "2026-01-01",
        updated: data.updated || undefined,
        category: data.category ?? "Статьи",
        readingTime: Number(data.readingTime) || Math.max(1, Math.round(parsed.words / 180)),
        services: list(data.services),
        related: list(data.related),
        ...parsed,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
});

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export type Service = Parsed & {
  slug: string;
  title: string;
  h1: string;
  description: string;
  name: string;
  short: string;
  icon: ServiceIcon;
  order: number;
  lead: string;
  card: string;
  posts: string[];
};

export const getServices = cache((): Service[] => {
  return readDir("services")
    .map(({ slug, data, content }) => ({
      slug,
      title: data.title ?? slug,
      h1: data.h1 ?? data.title ?? slug,
      description: data.description ?? "",
      name: data.name ?? data.title ?? slug,
      short: data.short ?? "",
      icon: (data.icon as ServiceIcon) ?? "site",
      order: Number(data.order) || 99,
      lead: data.lead ?? "",
      card: data.card ?? data.lead ?? "",
      posts: list(data.posts),
      ...parseBody(content),
    }))
    .sort((a, b) => a.order - b.order);
});

export const getService = (slug: string) => getServices().find((s) => s.slug === slug);

// Похожие статьи: сначала явно указанные в related, затем той же категории, затем свежие.
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const all = getPosts().filter((p) => p.slug !== post.slug);
  const picked: Post[] = [];
  const add = (p?: Post) => {
    if (p && !picked.includes(p) && picked.length < limit) picked.push(p);
  };
  post.related.forEach((slug) => add(all.find((p) => p.slug === slug)));
  all.filter((p) => p.category === post.category).forEach(add);
  all.forEach(add);
  return picked;
}
