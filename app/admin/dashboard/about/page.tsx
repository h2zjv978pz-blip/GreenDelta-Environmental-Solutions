"use client";
import { useAdminSection } from "@/hooks/useAdminSection";
import type { AboutData } from "@/types/content";
import Toast from "@/components/admin/Toast";
import ListEditor from "@/components/admin/ListEditor";

export default function AboutEditor() {
  const { data, setData, loading, saving, toast, save } = useAdminSection<AboutData>("about");

  if (loading) return <PageShell title="About Section"><LoadingState /></PageShell>;
  if (!data)   return <PageShell title="About Section"><ErrorState /></PageShell>;

  return (
    <PageShell title="About Section" onSave={() => save(data)} saving={saving}>
      <Toast toast={toast} />
      <div className="space-y-6">
        <Card title="Company Paragraphs">
          <p className="text-xs text-gray-400 mb-3">Each entry is a separate paragraph in the About section.</p>
          <ListEditor
            items={data.paragraphs.map((p, i) => ({ id: String(i), text: p }))}
            fields={[{ key: "text", label: "Paragraph Text", type: "textarea", rows: 3 }]}
            itemTitleKey="text"
            onChange={(items) => setData({ ...data, paragraphs: items.map((it) => it.text as string) })}
            newItemDefaults={{ text: "" }}
            addLabel="Add Paragraph"
          />
        </Card>

        <Card title="Value Badges">
          <p className="text-xs text-gray-400 mb-3">Pill tags shown below the company description.</p>
          <ListEditor
            items={data.values.map((v, i) => ({ id: String(i), value: v }))}
            fields={[{ key: "value", label: "Value", type: "text", placeholder: "e.g. Climate Adaptation" }]}
            itemTitleKey="value"
            onChange={(items) => setData({ ...data, values: items.map((it) => it.value as string) })}
            newItemDefaults={{ value: "" }}
            addLabel="Add Value"
          />
        </Card>

        <Card title="Highlight Cards">
          <ListEditor
            items={data.highlights as unknown as Record<string, unknown>[]}
            fields={[
              { key: "iconKey",  label: "Icon",        type: "icon-select" },
              { key: "title",    label: "Card Title",   type: "text",     placeholder: "Research-First Approach" },
              { key: "text",     label: "Description",  type: "textarea", rows: 2 },
            ]}
            itemTitleKey="title"
            onChange={(items) => setData({ ...data, highlights: items as unknown as typeof data.highlights })}
            newItemDefaults={{ iconKey: "check", title: "", text: "" }}
            addLabel="Add Highlight Card"
          />
        </Card>
      </div>
    </PageShell>
  );
}

function PageShell({ title, children, onSave, saving }: { title: string; children: React.ReactNode; onSave?: () => void; saving?: boolean }) {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div><p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">Admin</p><h1 className="text-2xl font-extrabold text-gray-900">{title}</h1></div>
          {onSave && <SaveBtn onSave={onSave} saving={!!saving} />}
        </div>
        {children}
      </div>
    </main>
  );
}
function SaveBtn({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <button onClick={onSave} disabled={saving} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow transition-all disabled:cursor-not-allowed">
      {saving ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Saving…</> : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Save Changes</>}
    </button>
  );
}
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"><div className="px-6 py-4 border-b border-gray-100 bg-gray-50"><h2 className="font-bold text-gray-800">{title}</h2></div><div className="p-6">{children}</div></div>;
}
function LoadingState() { return <div className="flex items-center justify-center py-20 text-gray-400"><svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg></div>; }
function ErrorState() { return <div className="text-center py-20 text-red-500">Failed to load content.</div>; }
