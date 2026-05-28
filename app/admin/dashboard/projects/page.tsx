"use client";
import { useAdminSection } from "@/hooks/useAdminSection";
import type { Project } from "@/types/content";
import Toast from "@/components/admin/Toast";
import ListEditor from "@/components/admin/ListEditor";

const statusOptions = [
  { value: "Completed", label: "Completed" },
  { value: "Ongoing",   label: "Ongoing" },
  { value: "Planned",   label: "Planned" },
];

const gradientOptions = [
  { value: "from-green-500 to-teal-600",    label: "Green → Teal" },
  { value: "from-emerald-400 to-green-600", label: "Emerald → Green" },
  { value: "from-sky-400 to-blue-600",      label: "Sky → Blue" },
  { value: "from-lime-400 to-green-500",    label: "Lime → Green" },
  { value: "from-cyan-400 to-sky-600",      label: "Cyan → Sky" },
  { value: "from-yellow-400 to-orange-500", label: "Yellow → Orange" },
  { value: "from-teal-400 to-emerald-600",  label: "Teal → Emerald" },
  { value: "from-blue-400 to-indigo-600",   label: "Blue → Indigo" },
];

export default function ProjectsEditor() {
  const { data, setData, loading, saving, toast, save } = useAdminSection<Project[]>("projects");

  if (loading) return <Shell title="Projects"><LoadingState /></Shell>;
  if (!data)   return <Shell title="Projects"><ErrorState /></Shell>;

  return (
    <Shell title="Projects" onSave={() => save(data)} saving={saving}>
      <Toast toast={toast} />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-800">Project Cards</h2>
          <span className="text-xs text-gray-400">{data.length} projects</span>
        </div>
        <div className="p-6">
          <ListEditor
            items={data as unknown as Record<string, unknown>[]}
            fields={[
              { key: "title",         label: "Project Title",   type: "text",     placeholder: "Project name" },
              { key: "category",      label: "Category",        type: "text",     placeholder: "e.g. Climate Research" },
              { key: "description",   label: "Description",     type: "textarea", rows: 3 },
              { key: "tags",          label: "Tags",            type: "tags" },
              { key: "status",        label: "Status",          type: "select",   options: statusOptions },
              { key: "gradientColor", label: "Banner Gradient", type: "select",   options: gradientOptions },
            ]}
            itemTitleKey="title"
            onChange={(items) => setData(items as unknown as Project[])}
            newItemDefaults={{ title: "", category: "", description: "", tags: [], status: "Planned", gradientColor: "from-green-500 to-teal-600" }}
            addLabel="Add Project"
          />
        </div>
      </div>
    </Shell>
  );
}

function Shell({ title, children, onSave, saving }: { title: string; children: React.ReactNode; onSave?: () => void; saving?: boolean }) {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div><p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">Admin</p><h1 className="text-2xl font-extrabold text-gray-900">{title}</h1></div>
          {onSave && <button onClick={onSave} disabled={saving} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow transition-all">{saving ? "Saving…" : "Save Changes"}</button>}
        </div>
        {children}
      </div>
    </main>
  );
}
function LoadingState() { return <div className="flex items-center justify-center py-20 text-gray-400"><svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg></div>; }
function ErrorState() { return <div className="text-center py-20 text-red-500">Failed to load content.</div>; }
