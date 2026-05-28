import SectionTitle from "./ui/SectionTitle";

const reasons = [
  {
    number: "01",
    title: "Bangladesh-Focused Research",
    description:
      "Our work is rooted in deep local knowledge — from the chars of the north to the haors of the northeast and the mangrove coasts of the south. We understand Bangladesh's unique environmental context.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Data-Driven Environmental Solutions",
    description:
      "Every finding and recommendation is backed by field surveys, satellite data, spatial analysis, and quantitative modelling — not assumptions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Citizen-Centered Approach",
    description:
      "We place communities at the heart of environmental work — involving citizens in research design, data collection, and awareness — ensuring solutions are inclusive and locally owned.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "GIS & Climate Technology Expertise",
    description:
      "We deploy state-of-the-art GIS, satellite remote sensing, machine learning, and climate modelling tools to generate precise, actionable environmental intelligence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Sustainable & Practical Recommendations",
    description:
      "Our advice is designed to be implementable — balancing scientific rigour with real-world feasibility, cultural context, and long-term sustainability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionTitle
          eyebrow="Why GreenDelta"
          title="Why Choose Us"
          subtitle="We combine local knowledge, scientific rigour, and technological innovation to deliver environmental solutions that genuinely work for Bangladesh."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 flex flex-col gap-4 hover:bg-white/15 transition-all duration-300 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-4xl font-black text-white/10 select-none">
                {r.number}
              </span>

              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-500/20 text-green-300">
                {r.icon}
              </div>

              <h3 className="font-bold text-white text-lg leading-snug">{r.title}</h3>
              <p className="text-green-100/75 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 text-center">
          <p className="text-green-200 text-lg mb-5">
            Ready to work with Bangladesh&rsquo;s leading environmental research team?
          </p>
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Start a Conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
