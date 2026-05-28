import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    title: "Climate Vulnerability Mapping of Coastal Bangladesh",
    category: "Climate Research",
    description:
      "Multi-layered vulnerability assessment integrating sea-level rise data, cyclone frequency, livelihood profiles, and adaptive capacity indicators for 12 coastal districts.",
    tags: ["GIS", "Climate", "Coastal", "Satellite"],
    status: "Completed" as const,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Urban Green Space Assessment — Dhaka Metropolitan",
    category: "Urban Environment",
    description:
      "NDVI-based green coverage analysis, urban heat island correlation, and green infrastructure gap mapping for Dhaka city with planning recommendations.",
    tags: ["Remote Sensing", "NDVI", "Urban Planning"],
    status: "Completed" as const,
    color: "from-emerald-400 to-green-600",
  },
  {
    title: "Flood Risk Mapping — Brahmaputra-Jamuna Floodplain",
    category: "Disaster Risk",
    description:
      "Hydrodynamic modelling and multi-return-period flood extent mapping to support early warning systems and community-level flood preparedness plans.",
    tags: ["Flood Modelling", "GIS", "Risk Mapping"],
    status: "Ongoing" as const,
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Community Environmental Awareness Program",
    category: "Citizen Engagement",
    description:
      "Environmental literacy initiative reaching 5,000+ citizens across five districts — combining workshops, citizen science data collection, and digital content.",
    tags: ["Citizen Science", "Education", "Community"],
    status: "Ongoing" as const,
    color: "from-lime-400 to-green-500",
  },
  {
    title: "River and Wetland Conservation Study — Haor Basin",
    category: "Ecosystem Research",
    description:
      "Comprehensive ecological survey of haor wetlands covering biodiversity, water quality, fish habitat, and migratory bird patterns with conservation action plan.",
    tags: ["Wetland", "Biodiversity", "Haor", "Ecology"],
    status: "Completed" as const,
    color: "from-cyan-400 to-sky-600",
  },
  {
    title: "Renewable Energy Potential Assessment — Northern Chars",
    category: "Sustainability",
    description:
      "Solar irradiance mapping and wind speed analysis for off-grid char islands, informing clean energy deployment planning for 200,000+ isolated residents.",
    tags: ["Solar", "Renewable", "GIS", "Sustainability"],
    status: "Planned" as const,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Real-world research and environmental solutions making a measurable difference across Bangladesh."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="btn-outline">
            Discuss a Project with Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
