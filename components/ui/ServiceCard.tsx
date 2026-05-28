interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  color = "green",
}: ServiceCardProps) {
  const colorMap: Record<string, string> = {
    green:  "bg-green-100 text-green-700",
    sky:    "bg-sky-100 text-sky-700",
    earth:  "bg-amber-100 text-amber-700",
    teal:   "bg-teal-100 text-teal-700",
    blue:   "bg-blue-100 text-blue-700",
    emerald:"bg-emerald-100 text-emerald-700",
    cyan:   "bg-cyan-100 text-cyan-700",
    lime:   "bg-lime-100 text-lime-700",
  };

  const iconBg = colorMap[color] ?? colorMap["green"];

  return (
    <div className="card p-6 flex flex-col gap-4 h-full group">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1 text-green-600 text-sm font-medium mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
