interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
            light
              ? "bg-white/15 text-white"
              : "bg-green-100 text-green-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight text-balance ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div className={`section-divider ${centered ? "" : "mx-0"}`} />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-green-100" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
