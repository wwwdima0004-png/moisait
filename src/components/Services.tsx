import { services } from "@/config/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="section-heading font-display font-semibold tracking-tight">
            Услуги
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            Что можно заказать — коротко, без длинных прайсов. Стоимость и сроки
            обсуждаем под конкретную задачу.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group grid gap-4 py-8 transition-colors sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-8">
                <h3 className="font-display text-xl font-semibold text-white/90 transition-colors group-hover:text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-white/55">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
