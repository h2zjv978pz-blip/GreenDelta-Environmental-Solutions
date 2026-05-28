interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: "Completed" | "Ongoing" | "Planned";
  color?: string;
}

const statusStyles: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Ongoing:   "bg-sky-100 text-sky-700",
  Planned:   "bg-amber-100 text-amber-700",
};

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  status,
  color = "from-green-500 to-teal-600",
}: ProjectCardProps) {
  return (
    <div className="card overflow-hidden flex flex-col h-full group">
      {/* Top gradient banner */}
      <div className={`h-2 bg-gradient-to-r ${color}`} />

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Category + status row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
            {category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}>
            {status}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-green-700 transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
