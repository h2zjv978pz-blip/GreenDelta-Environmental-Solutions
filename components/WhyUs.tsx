import type { WhyUsData } from "@/types/content";
import { getIcon } from "@/lib/icons";
import SectionTitle from "./ui/SectionTitle";

export default function WhyUs({ data }: { data: WhyUsData }) {
  return (
    <section id="why-us" className="section-padding bg-hero-gradient relative overflow-hidden">
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
          {data.reasons.map((r, i) => (
            <div
              key={r.id}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 flex flex-col gap-4 hover:bg-white/15 transition-all duration-300 ${
                i === data.reasons.length - 1 && data.reasons.length % 3 === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="absolute top-5 right-6 text-4xl font-black text-white/10 select-none">{r.number}</span>
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-500/20 text-green-300">
                {getIcon(r.iconKey)}
              </div>
              <h3 className="font-bold text-white text-lg leading-snug">{r.title}</h3>
              <p className="text-green-100/75 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-green-200 text-lg mb-5">Ready to work with Bangladesh&rsquo;s leading environmental research team?</p>
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Start a Conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
