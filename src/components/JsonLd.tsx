// Структурированные данные schema.org. Символ "<" экранируется, чтобы
// содержимое не могло закрыть тег script (рекомендация из документации Next.js).
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
