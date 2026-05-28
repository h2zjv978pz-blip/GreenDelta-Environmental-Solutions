import SectionTitle from "./ui/SectionTitle";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Research-First Approach",
    text: "Every recommendation is grounded in peer-reviewed methodology, field data, and evidence-based analysis.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Bangladesh-Centered Focus",
    text: "Deep local knowledge of Bangladesh's geography, ecology, policy landscape, and community needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community & Citizen Engagement",
    text: "We bring citizens, communities, and institutions together for inclusive, participatory environmental action.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Technology & GIS Innovation",
    text: "Advanced GIS, satellite remote sensing, and spatial data science to deliver precision environmental insights.",
  },
];

const values = [
  { label: "Climate Adaptation",    color: "bg-green-100 text-green-700" },
  { label: "Biodiversity",          color: "bg-teal-100 text-teal-700" },
  { label: "Environmental Planning",color: "bg-sky-100 text-sky-700" },
  { label: "Sustainable Development",color:"bg-emerald-100 text-emerald-700" },
  { label: "Resilience Building",   color: "bg-blue-100 text-blue-700" },
  { label: "Citizen Science",       color: "bg-lime-100 text-lime-700" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-section-gradient">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <SectionTitle
              eyebrow="About Us"
              title="Who We Are"
              centered={false}
            />

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">GreenDelta Environmental Solutions</strong> is a
                research-focused environmental consultancy dedicated to working for Bangladesh&rsquo;s
                people, nature, and future resilience. We bridge the gap between rigorous scientific
                research and practical on-the-ground environmental action.
              </p>
              <p>
                From the mangrove coasts of the Sundarbans to the river basins of the north and the
                urban heat islands of Dhaka, we study and address Bangladesh&rsquo;s most pressing
                environmental challenges with data, technology, and community engagement.
              </p>
              <p>
                Our interdisciplinary team of environmental scientists, GIS specialists, climate
                researchers, and community development experts works with government agencies, NGOs,
                development partners, academic institutions, and local communities.
              </p>
            </div>

            {/* Topic pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {values.map((v) => (
                <span key={v.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${v.color}`}>
                  {v.label}
                </span>
              ))}
            </div>

            <a href="#services" className="btn-primary mt-8 inline-flex">
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card p-5 flex flex-col gap-3"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
                  {h.icon}
                </div>
                <h3 className="font-bold text-gray-900">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
