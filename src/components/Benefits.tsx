import { Zap, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { benefits, type Benefit } from "@/config/site";
import Reveal from "./Reveal";

const iconMap: Record<Benefit["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  fast: Zap,
  reliable: ShieldCheck,
  result: TrendingUp,
  modern: Sparkles,
};

export default function Benefits() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div key={benefit.title}>
                  <Icon size={22} className="text-accent" />
                  <h3 className="font-display mt-4 text-base font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
