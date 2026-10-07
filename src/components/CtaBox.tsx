import WhatsAppButton from "./WhatsAppButton";

// Встроенный призыв к действию внутри статей и страниц услуг.
export default function CtaBox({
  title = "Обсудим вашу задачу?",
  text = "Опишите проект в WhatsApp своими словами: зададим уточняющие вопросы и подскажем, с чего начать.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <aside className="mt-14 rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8">
      <p className="font-display text-xl font-semibold text-white sm:text-2xl">{title}</p>
      <p className="mt-2 max-w-xl text-white/70">{text}</p>
      <WhatsAppButton className="mt-6" fullOnMobile />
    </aside>
  );
}
