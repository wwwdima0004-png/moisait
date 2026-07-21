import { contactLinks } from "@/config/site";
import { TelegramIcon, WhatsAppIcon, InstagramIcon } from "./icons";
import Reveal from "./Reveal";

const contactButtons = [
  {
    href: contactLinks.telegram,
    label: "Telegram",
    Icon: TelegramIcon,
  },
  {
    href: contactLinks.whatsapp,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
  {
    href: contactLinks.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="cta-heading font-display font-semibold tracking-tight">
            Есть идея бота, мини-приложения или сайта?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Напишите напрямую — отвечаю быстро и сразу обсуждаем детали, без анкет и
            долгих согласований.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {contactButtons.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-medium transition-all hover:scale-105 hover:border-white hover:bg-white hover:text-black"
              >
                <Icon className="h-5 w-5" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
