import type { AboutData } from "@/types/content";
import { getIcon } from "@/lib/icons";
import SectionTitle from "./ui/SectionTitle";

const valueBadgeColors = [
  "bg-green-100 text-green-700",
  "bg-teal-100 text-teal-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-blue-100 text-blue-700",
  "bg-lime-100 text-lime-700",
];

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="section-padding bg-section-gradient">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle eyebrow="About Us" title="Who We Are" centered={false} />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{i === 0 ? <><strong className="text-gray-900">GreenDelta Environmental Solutions</strong>{p.replace("GreenDelta Environmental Solutions", "")}</> : p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {data.values.map((v, i) => (
                <span key={v} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${valueBadgeColors[i % valueBadgeColors.length]}`}>{v}</span>
              ))}
            </div>
            <a href="#services" className="btn-primary mt-8 inline-flex">
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.highlights.map((h) => (
              <div key={h.id} className="card p-5 flex flex-col gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
                  {getIcon(h.iconKey)}
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
