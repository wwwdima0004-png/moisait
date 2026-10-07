import { MessagesSquare, ShieldCheck, Target, Sparkles } from "lucide-react";
import { benefits, type Benefit } from "@/config/site";

const iconMap: Record<Benefit["icon"], React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  fast: MessagesSquare,
  reliable: ShieldCheck,
  result: Target,
  modern: Sparkles,
};

export default function Benefits() {
  return (
    <section className="border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <p className="eyebrow">Почему с нами удобно</p>
          <h2 className="section-heading mt-3 font-display font-semibold tracking-tight">Работаем на результат бизнеса</h2>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div key={benefit.title}>
                <Icon size={22} strokeWidth={1.75} className="text-white" />
                <h3 className="mt-4 font-display text-base font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
