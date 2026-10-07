import { Phone, MapPin } from "lucide-react";
import { site, contactLinks } from "@/config/site";
import { TelegramIcon, InstagramIcon } from "./icons";
import WhatsAppButton from "./WhatsAppButton";

export default function Contact({
  title = "Обсудим ваш проект?",
  text = "Напишите в WhatsApp: расскажите о задаче в двух словах, мы зададим уточняющие вопросы и предложим следующий шаг.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] p-6 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="cta-heading font-display font-semibold tracking-tight">{title}</h2>
              <p className="mt-4 text-white/70">{text}</p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:gap-6">
                <li>
                  <a href={contactLinks.phone} className="inline-flex min-h-11 items-center gap-2 hover:text-white">
                    <Phone size={16} aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="inline-flex min-h-11 items-center gap-2">
                  <MapPin size={16} aria-hidden="true" />
                  {site.city}, {site.country}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton fullOnMobile />
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/50 sm:hidden">или</span>
                <a
                  href={contactLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-white/45 hover:text-white"
                >
                  <TelegramIcon className="h-5 w-5" />
                </a>
                <a
                  href={contactLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-white/45 hover:text-white"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
