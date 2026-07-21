import Link from "next/link";
import { brand, contactLinks } from "@/config/site";
import { TelegramIcon, WhatsAppIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-white/50 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-display font-semibold text-white/80">{brand.name}</span>
          <span>© {new Date().getFullYear()} Все права защищены</span>
        </div>

        <Link href="/blog" className="hover:text-white/80 transition-colors">
          Блог
        </Link>

        <div className="flex items-center gap-5">
          <a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-white transition-colors">
            <TelegramIcon className="h-5 w-5" />
          </a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white transition-colors">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
