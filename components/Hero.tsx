import type { HeroData } from "@/types/content";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container-max relative z-10 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {data.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-balance mb-6">
            {data.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
              {data.titleHighlight}
            </span>
            {data.titleEnd}
          </h1>

          <p className="text-lg md:text-xl text-green-100/80 leading-relaxed max-w-3xl mx-auto mb-10">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={data.cta1.href} className="btn-primary text-base px-8 py-4">
              {data.cta1.label}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href={data.cta2.href} className="btn-secondary text-base px-8 py-4">{data.cta2.label}</a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {data.stats.map((s) => (
              <div key={s.id} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="text-2xl font-extrabold text-white">{s.value}</span>
                <span className="text-green-200 text-xs font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
