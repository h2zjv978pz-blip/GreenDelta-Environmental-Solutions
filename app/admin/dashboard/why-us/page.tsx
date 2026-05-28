"use client";
import { useAdminSection } from "@/hooks/useAdminSection";
import type { WhyUsData } from "@/types/content";
import Toast from "@/components/admin/Toast";
import ListEditor from "@/components/admin/ListEditor";

export default function WhyUsEditor() {
  const { data, setData, loading, saving, toast, save } = useAdminSection<WhyUsData>("whyUs");

  if (loading) return <Shell title="Why Choose Us"><LoadingState /></Shell>;
  if (!data)   return <Shell title="Why Choose Us"><ErrorState /></Shell>;

  const handleChange = (items: Record<string, unknown>[]) => {
    const reNumbered = items.map((it, i) => ({ ...it, number: String(i + 1).padStart(2, "0") }));
    setData({ reasons: reNumbered as typeof data.reasons });
  };

  return (
    <Shell title="Why Choose Us" onSave={() => save(data)} saving={saving}>
      <Toast toast={toast} />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-800">Reason Cards</h2>
          <span className="text-xs text-gray-400">Numbers auto-assigned by order</span>
        </div>
        <div className="p-6">
          <ListEditor
            items={data.reasons as unknown as Record<string, unknown>[]}
            fields={[
              { key: "iconKey",     label: "Icon",        type: "icon-select" },
              { key: "title",       label: "Title",       type: "text",     placeholder: "Reason title" },
              { key: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
            itemTitleKey="title"
            onChange={handleChange}
            newItemDefaults={{ iconKey: "check", title: "", description: "" }}
            addLabel="Add Reason"
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
