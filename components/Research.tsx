import SectionTitle from "./ui/SectionTitle";

const areas = [
  {
    title: "Climate Resilience",
    description:
      "Studying long-term climate trends, building adaptive capacity frameworks, and designing resilience pathways for vulnerable communities across Bangladesh.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    accent: "bg-green-500",
    bg: "bg-green-50",
    text: "text-green-700",
  },
  {
    title: "Flood & River Management",
    description:
      "Hydrodynamic modeling, riverbank erosion analysis, floodplain mapping, and integrated flood risk management for Bangladesh's major river systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    accent: "bg-sky-500",
    bg: "bg-sky-50",
    text: "text-sky-700",
  },
  {
    title: "Coastal Vulnerability",
    description:
      "Sea-level rise projections, cyclone risk profiling, tidal river management, mangrove dynamics, and coastal erosion assessment for the Bay of Bengal coastline.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    accent: "bg-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    title: "Urban Heat & Air Quality",
    description:
      "Urban heat island effect measurement, ambient air quality monitoring, particulate matter analysis, and green-cool city design strategies for Dhaka and other cities.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: "bg-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-700",
  },
  {
    title: "Hill Ecology & Forest Conservation",
    description:
      "Biodiversity surveys, deforestation monitoring, forest carbon stock assessment, and conservation planning for the Chittagong Hill Tracts and sylhet forests.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    accent: "bg-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    title: "Renewable Energy & Sustainability",
    description:
      "Solar potential mapping, wind resource assessment, energy transition planning, and sustainability indicators for low-carbon development in Bangladesh.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "bg-yellow-500",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
  },
  {
    title: "Citizen Science & Environmental Education",
    description:
      "Crowd-sourced environmental data collection, community-based monitoring networks, school programs, and digital environmental awareness platforms.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accent: "bg-teal-500",
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
];

export default function Research() {
  return (
    <section id="research" className="section-padding bg-white">
      <div className="container-max">
        <SectionTitle
          eyebrow="Research Focus"
          title="Our Research Areas"
          subtitle="We tackle Bangladesh's most critical environmental challenges through focused, applied, and interdisciplinary research."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className={`${area.bg} rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 group`}
            >
              {/* Icon with accent bar */}
              <div className="flex items-start gap-3">
                <div className={`${area.text} flex-shrink-0 mt-0.5`}>{area.icon}</div>
              </div>
              <div className={`w-8 h-0.5 rounded ${area.accent}`} />
              <h3 className={`font-bold text-gray-900 text-base leading-snug`}>{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
