import WhatsAppButton from "./WhatsAppButton";

// Призыв к действию внутри статей и страниц услуг: заметная карточка с кнопкой WhatsApp.
// В Markdown вставляется блоком «:::cta Заголовок … :::», в конце статьи выводится страницей.
export default function CtaBox({
  title = "Хотите так же для своего бизнеса?",
  text = "Напишите мне в WhatsApp и в двух словах опишите задачу. Отвечу, задам пару вопросов и назову цену.",
  children,
  className = "",
}: {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={`cta-card ${className}`}>
      <p className="cta-card-title font-display">{title}</p>
      <div className="cta-card-text">{children ?? <p>{text}</p>}</div>
      <WhatsAppButton className="mt-6" fullOnMobile />
    </aside>
  );
}
