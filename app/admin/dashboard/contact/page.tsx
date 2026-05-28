"use client";
import { useAdminSection } from "@/hooks/useAdminSection";
import type { ContactData } from "@/types/content";
import Toast from "@/components/admin/Toast";

export default function ContactEditor() {
  const { data, setData, loading, saving, toast, save } = useAdminSection<ContactData>("contact");

  if (loading) return <Shell title="Contact Info"><LoadingState /></Shell>;
  if (!data)   return <Shell title="Contact Info"><ErrorState /></Shell>;

  const update = (field: keyof ContactData, value: string) => setData({ ...data, [field]: value });

  const fields: { key: keyof ContactData; label: string; placeholder: string; type?: string }[] = [
    { key: "email",    label: "Email Address",  placeholder: "info@greendeltaenvironment.com", type: "email" },
    { key: "location", label: "Location",       placeholder: "Dhaka, Bangladesh" },
    { key: "hours",    label: "Working Hours",  placeholder: "Sun – Thu, 9:00 AM – 6:00 PM" },
  ];

  return (
    <Shell title="Contact Info" onSave={() => save(data)} saving={saving}>
      <Toast toast={toast} />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="font-bold text-gray-800">Contact Details</h2>
          <p className="text-xs text-gray-400 mt-0.5">Displayed in the contact section and footer.</p>
        </div>
        <div className="p-6 space-y-5">
          {fields.map((f) => (
            <div key={f.key} className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">{f.label}</label>
              <input
                type={f.type ?? "text"}
                value={data[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function Shell({ title, children, onSave, saving }: { title: string; children: React.ReactNode; onSave?: () => void; saving?: boolean }) {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      <div className="max-w-xl mx-auto">
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
