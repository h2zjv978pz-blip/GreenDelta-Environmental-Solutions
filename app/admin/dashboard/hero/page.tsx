"use client";
import { useAdminSection } from "@/hooks/useAdminSection";
import type { HeroData } from "@/types/content";
import Toast from "@/components/admin/Toast";
import ListEditor from "@/components/admin/ListEditor";

export default function HeroEditor() {
  const { data, setData, loading, saving, toast, save } = useAdminSection<HeroData>("hero");

  if (loading) return <PageShell title="Hero Section"><LoadingState /></PageShell>;
  if (!data)   return <PageShell title="Hero Section"><ErrorState /></PageShell>;

  const update = (field: keyof HeroData, value: unknown) => setData({ ...data, [field]: value });
  const updateCta = (cta: "cta1" | "cta2", field: "label" | "href", value: string) =>
    setData({ ...data, [cta]: { ...data[cta], [field]: value } });

  return (
    <PageShell title="Hero Section" onSave={() => save(data)} saving={saving}>
      <Toast toast={toast} />
      <div className="space-y-6">
        <Card title="Badge & Headline">
          <Field label="Badge Text">
            <Input value={data.badge} onChange={(v) => update("badge", v)} placeholder="Badge text above title" />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="Title Start">
              <Input value={data.titleStart} onChange={(v) => update("titleStart", v)} />
            </Field>
            <Field label="Title Highlight (gradient)">
              <Input value={data.titleHighlight} onChange={(v) => update("titleHighlight", v)} />
            </Field>
            <Field label="Title End">
              <Input value={data.titleEnd} onChange={(v) => update("titleEnd", v)} />
            </Field>
          </div>
          <Field label="Subtitle">
            <Textarea value={data.subtitle} onChange={(v) => update("subtitle", v)} rows={3} />
          </Field>
        </Card>

        <Card title="Call-to-Action Buttons">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Button 1 — Label">
              <Input value={data.cta1.label} onChange={(v) => updateCta("cta1", "label", v)} />
            </Field>
            <Field label="Button 1 — Link (href)">
              <Input value={data.cta1.href} onChange={(v) => updateCta("cta1", "href", v)} />
            </Field>
            <Field label="Button 2 — Label">
              <Input value={data.cta2.label} onChange={(v) => updateCta("cta2", "label", v)} />
            </Field>
            <Field label="Button 2 — Link (href)">
              <Input value={data.cta2.href} onChange={(v) => updateCta("cta2", "href", v)} />
            </Field>
          </div>
        </Card>

        <Card title="Stats">
          <ListEditor
            items={data.stats as unknown as Record<string, unknown>[]}
            fields={[
              { key: "value", label: "Value (e.g. 10+)", type: "text", placeholder: "10+" },
              { key: "label", label: "Label",             type: "text", placeholder: "Research Areas" },
            ]}
            itemTitleKey="label"
            onChange={(items) => update("stats", items)}
            newItemDefaults={{ value: "", label: "" }}
            addLabel="Add Stat"
          />
        </Card>
      </div>
    </PageShell>
  );
}

// ─── Shared helpers ────────────────────────────────────────────────────────────
function PageShell({ title, children, onSave, saving }: { title: string; children: React.ReactNode; onSave?: () => void; saving?: boolean }) {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">Admin</p>
            <h1 className="text-2xl font-extrabold text-gray-900">{title}</h1>
          </div>
          {onSave && (
            <button onClick={onSave} disabled={saving} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow transition-all disabled:cursor-not-allowed">
              {saving ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Saving…</> : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Save Changes</>}
            </button>
          )}
        </div>
        {children}
      </div>
    </main>
  );
}
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
        <h2 className="font-bold text-gray-800">{title}</h2>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}
function Input({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all" />;
}
function Textarea({ value, onChange, rows = 3 }: { value: string; onChange: (v: string) => void; rows?: number }) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none" />;
}
function LoadingState() { return <div className="flex items-center justify-center py-20 text-gray-400"><svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg></div>; }
function ErrorState() { return <div className="text-center py-20 text-red-500">Failed to load content.</div>; }
