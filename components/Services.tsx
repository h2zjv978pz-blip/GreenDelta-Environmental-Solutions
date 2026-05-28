import type { Service } from "@/types/content";
import { getIcon } from "@/lib/icons";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";

export default function Services({ data }: { data: Service[] }) {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="From field research to policy advisory — we cover the full spectrum of environmental consulting needs with expertise and integrity."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((s) => (
            <ServiceCard key={s.id} icon={getIcon(s.iconKey)} color={s.color} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
