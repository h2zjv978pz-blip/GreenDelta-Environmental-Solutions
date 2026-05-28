export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max relative z-10 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Bangladesh Environmental Consultancy
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-balance mb-6">
            Climate Research &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
              Environmental Solutions
            </span>{" "}
            for Bangladesh
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-green-100/80 leading-relaxed max-w-3xl mx-auto mb-10">
            We provide research, data-driven analysis, environmental planning, and climate resilience
            solutions for citizens, communities, institutions, and development organizations across Bangladesh.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary text-base px-8 py-4">
              Explore Our Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary text-base px-8 py-4">
              Contact Us
            </a>
          </div>

          {/* Stat pills */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {[
              { value: "10+", label: "Research Areas" },
              { value: "50+", label: "Projects" },
              { value: "8+", label: "Core Services" },
              { value: "64", label: "Districts Covered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                <span className="text-green-200 text-xs font-medium mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
