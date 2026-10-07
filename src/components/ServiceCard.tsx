import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content";
import ServiceIcon from "./ServiceIcon";

// На телефоне — компактная строка (иконка, название, короткое описание),
// с sm и шире — вертикальная карточка одинаковой высоты в сетке.
export default function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.015] p-5 transition-[border-color,background-color,transform] duration-300 hover:border-white/30 hover:bg-white/[0.035] sm:flex-col sm:gap-0 sm:p-7 sm:hover:-translate-y-0.5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/85 transition-colors group-hover:border-white/40 group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col sm:mt-6">
        <Heading className="font-display text-[17px] font-semibold leading-snug sm:text-lg">{service.name}</Heading>
        <span className="mt-1.5 flex-1 text-sm leading-relaxed text-white/65 sm:mt-2">{service.card}</span>
        <span className="mt-6 hidden items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white sm:inline-flex">
          Подробнее
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </span>
      <ArrowRight size={18} aria-hidden="true" className="mt-3 shrink-0 text-white/45 sm:hidden" />
    </Link>
  );
}
