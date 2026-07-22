import { Bot, Smartphone, Globe, AppWindow, Layers } from "lucide-react";
import { directions, type Direction } from "@/config/site";
import Reveal from "./Reveal";

const iconMap: Record<Direction["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  bot: Bot,
  app: Smartphone,
  site: Globe,
  webapp: AppWindow,
  saas: Layers,
};

export default function Directions() {
  return (
    <section id="directions" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="section-heading font-display font-semibold tracking-tight">
            Направления
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            Каждое направление — законченный продукт: мы закрываем задачу полностью,
            от идеи и дизайна до запуска и поддержки.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((direction, i) => {
            const Icon = iconMap[direction.icon];
            return (
              <Reveal key={direction.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.03]">
                  <Icon size={28} className="text-white/70 transition-colors group-hover:text-white" />
                  <h3 className="font-display mt-6 text-xl font-semibold">{direction.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {direction.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
