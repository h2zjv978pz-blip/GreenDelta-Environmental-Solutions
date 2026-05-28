import { getContent } from "@/lib/content";

const sections = [
  { key: "hero",     label: "Hero Section",    href: "/admin/dashboard/hero",     desc: "Banner title, subtitle, stats, and CTA buttons",            icon: "⭐", color: "border-yellow-200 bg-yellow-50" },
  { key: "about",    label: "About Section",   href: "/admin/dashboard/about",    desc: "Company description, values, and highlight cards",           icon: "ℹ️", color: "border-blue-200 bg-blue-50" },
  { key: "services", label: "Services",        href: "/admin/dashboard/services", desc: "Service cards shown on the services section",                icon: "🛠", color: "border-green-200 bg-green-50" },
  { key: "research", label: "Research Areas",  href: "/admin/dashboard/research", desc: "Research focus areas and descriptions",                      icon: "🔬", color: "border-purple-200 bg-purple-50" },
  { key: "projects", label: "Projects",        href: "/admin/dashboard/projects", desc: "Featured project cards with status and tags",                icon: "📁", color: "border-sky-200 bg-sky-50" },
  { key: "whyUs",    label: "Why Choose Us",   href: "/admin/dashboard/why-us",   desc: "Reasons and value propositions",                            icon: "✅", color: "border-teal-200 bg-teal-50" },
  { key: "contact",  label: "Contact Info",    href: "/admin/dashboard/contact",  desc: "Email address, location, and working hours",                icon: "📬", color: "border-orange-200 bg-orange-50" },
];

function getItemCount(content: Record<string, unknown>, key: string): number | null {
  const val = content[key];
  if (Array.isArray(val)) return val.length;
  if (val && typeof val === "object") {
    const nested = (val as Record<string, unknown>).reasons ?? (val as Record<string, unknown>).items;
    if (Array.isArray(nested)) return nested.length;
  }
  return null;
}

export default function DashboardOverview() {
  const content = getContent() as unknown as Record<string, unknown>;
  const lastUpdated = content.updatedAt
    ? new Date(content.updatedAt as string).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })
    : "Never";

  return (
    <main className="flex-1 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage all website content from here. Last updated: <span className="font-medium text-gray-700">{lastUpdated}</span>
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Services",       val: (content.services as unknown[])?.length ?? 0 },
          { label: "Projects",       val: (content.projects as unknown[])?.length ?? 0 },
          { label: "Research Areas", val: (content.research as unknown[])?.length ?? 0 },
          { label: "Why Us Reasons", val: ((content.whyUs as Record<string, unknown>)?.reasons as unknown[])?.length ?? 0 },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4">
            <p className="text-3xl font-extrabold text-green-600">{s.val}</p>
            <p className="text-gray-500 text-xs mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Edit Sections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {sections.map((s) => {
          const count = getItemCount(content, s.key);
          return (
            <a
              key={s.key}
              href={s.href}
              className={`group block border-2 ${s.color} rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-2xl">{s.icon}</span>
                {count !== null && (
                  <span className="text-xs font-bold bg-white/70 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">
                    {count} item{count !== 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{s.label}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium">
                Edit section
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
