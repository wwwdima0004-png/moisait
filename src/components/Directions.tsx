import Link from "next/link";
import { Globe, Send, Grid2x2, Zap, ArrowRight } from "lucide-react";
import { directions, contactLinks, type Direction } from "@/config/site";
import Reveal from "./Reveal";

const iconMap: Record<Direction["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  site: Globe,
  bot: Send,
  app: Grid2x2,
  automation: Zap,
};

const linkMap: Record<Direction["icon"], string> = {
  site: "/portfolio",
  bot: contactLinks.telegram,
  app: contactLinks.telegram,
  automation: contactLinks.telegram,
};

export default function Directions() {
  return (
    <section id="directions" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="section-heading font-display font-semibold tracking-tight">
            Что мы создаём
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction, i) => {
            const Icon = iconMap[direction.icon];
            const href = linkMap[direction.icon];
            const external = href.startsWith("http");
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/70 transition-colors group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_20px_-4px_rgba(var(--accent-rgb),0.5)]">
                  <Icon size={20} />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold">{direction.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {direction.description}
                </p>
                <ArrowRight
                  size={18}
                  className="mt-6 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-accent"
                />
              </>
            );

            return (
              <Reveal key={direction.title} delay={i * 0.08}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.03]"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.03]"
                  >
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
