import type { Project } from "@/types/content";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";

export default function Projects({ data }: { data: Project[] }) {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Real-world research and environmental solutions making a measurable difference across Bangladesh."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <ProjectCard key={p.id} title={p.title} category={p.category} description={p.description} tags={p.tags} status={p.status} color={p.gradientColor} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-outline">
            Discuss a Project with Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
