import { processSteps } from "@/config/site";

export default function Process() {
  return (
    <section className="border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <p className="eyebrow">Как мы работаем</p>
          <h2 className="section-heading mt-3 font-display font-semibold tracking-tight">От сообщения до запуска</h2>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="bg-black p-6 sm:p-7">
              <span className="font-mono text-sm text-white/50">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
