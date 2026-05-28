import type { ResearchArea } from "@/types/content";
import { getIcon } from "@/lib/icons";
import SectionTitle from "./ui/SectionTitle";

const colorThemeMap: Record<string, { accent: string; bg: string; text: string }> = {
  green:   { accent: "bg-green-500",   bg: "bg-green-50",   text: "text-green-700" },
  sky:     { accent: "bg-sky-500",     bg: "bg-sky-50",     text: "text-sky-700" },
  blue:    { accent: "bg-blue-500",    bg: "bg-blue-50",    text: "text-blue-700" },
  orange:  { accent: "bg-orange-500",  bg: "bg-orange-50",  text: "text-orange-700" },
  emerald: { accent: "bg-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700" },
  yellow:  { accent: "bg-yellow-500",  bg: "bg-yellow-50",  text: "text-yellow-700" },
  teal:    { accent: "bg-teal-500",    bg: "bg-teal-50",    text: "text-teal-700" },
  amber:   { accent: "bg-amber-500",   bg: "bg-amber-50",   text: "text-amber-700" },
  cyan:    { accent: "bg-cyan-500",    bg: "bg-cyan-50",    text: "text-cyan-700" },
  lime:    { accent: "bg-lime-500",    bg: "bg-lime-50",    text: "text-lime-700" },
};

export default function Research({ data }: { data: ResearchArea[] }) {
  return (
    <section id="research" className="section-padding bg-white">
      <div className="container-max">
        <SectionTitle
          eyebrow="Research Focus"
          title="Our Research Areas"
          subtitle="We tackle Bangladesh's most critical environmental challenges through focused, applied, and interdisciplinary research."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((area) => {
            const colors = colorThemeMap[area.colorTheme] ?? colorThemeMap.green;
            return (
              <div key={area.id} className={`${colors.bg} rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300`}>
                <div className={`${colors.text} flex-shrink-0`}>{getIcon(area.iconKey, "w-7 h-7")}</div>
                <div className={`w-8 h-0.5 rounded ${colors.accent}`} />
                <h3 className="font-bold text-gray-900 text-base leading-snug">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
