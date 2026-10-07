import type { Service } from "@/lib/content";
import ServiceCard from "./ServiceCard";
import WhatsAppButton from "./WhatsAppButton";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <p className="eyebrow">Услуги</p>
          <h2 className="section-heading mt-3 font-display font-semibold tracking-tight">Что мы создаём</h2>
          <p className="mt-4 max-w-2xl text-white/65">
            От сайта-визитки до внутренней CRM: подбираем формат под задачу и бюджет, а не продаём один
            шаблонный продукт всем подряд.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <div key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </div>
          ))}
          <div className="h-full">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-dashed border-white/20 p-6 sm:p-7">
              <div>
                <h3 className="font-display text-lg font-semibold">Не нашли свою задачу?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Опишите её своими словами, подскажем, какое решение подойдёт.
                </p>
              </div>
              <WhatsAppButton size="md" label="Написать" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
