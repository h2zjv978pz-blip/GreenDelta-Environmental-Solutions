"use client";
import { useState } from "react";
import { iconOptions } from "@/lib/icons";

export interface FieldDef {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "tags" | "icon-select";
  options?: { value: string; label: string }[];
  placeholder?: string;
  rows?: number;
}

interface Props {
  items: Record<string, unknown>[];
  fields: FieldDef[];
  itemTitleKey: string;
  onChange: (items: Record<string, unknown>[]) => void;
  newItemDefaults: Record<string, unknown>;
  addLabel?: string;
}

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ListEditor({ items, fields, itemTitleKey, onChange, newItemDefaults, addLabel = "Add Item" }: Props) {
  const [editingId, setEditingId]   = useState<string | null>(null);
  const [editForm, setEditForm]     = useState<Record<string, unknown>>({});
  const [expandedAdd, setExpandAdd] = useState(false);
  const [newForm, setNewForm]       = useState<Record<string, unknown>>(newItemDefaults);

  const startEdit = (item: Record<string, unknown>) => {
    setEditingId(item.id as string);
    setEditForm({ ...item });
  };

  const saveEdit = () => {
    onChange(items.map((it) => (it.id === editingId ? editForm : it)));
    setEditingId(null);
  };

  const deleteItem = (id: string) => {
    onChange(items.filter((it) => it.id !== id));
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const next = [...items];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    onChange(next);
  };

  const moveDown = (idx: number) => {
    if (idx === items.length - 1) return;
    const next = [...items];
    [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
    onChange(next);
  };

  const addItem = () => {
    onChange([...items, { ...newForm, id: generateId() }]);
    setNewForm(newItemDefaults);
    setExpandAdd(false);
  };

  const renderField = (
    fd: FieldDef,
    val: unknown,
    onChange2: (key: string, v: unknown) => void
  ) => {
    const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent";

    if (fd.type === "textarea") {
      return (
        <textarea
          key={fd.key}
          value={val as string ?? ""}
          onChange={(e) => onChange2(fd.key, e.target.value)}
          rows={fd.rows ?? 3}
          placeholder={fd.placeholder}
          className={`${inputCls} resize-none`}
        />
      );
    }
    if (fd.type === "select") {
      return (
        <select
          key={fd.key}
          value={val as string ?? ""}
          onChange={(e) => onChange2(fd.key, e.target.value)}
          className={inputCls}
        >
          {fd.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      );
    }
    if (fd.type === "tags") {
      const tags = (val as string[]) ?? [];
      return (
        <div key={fd.key} className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, ti) => (
              <span key={ti} className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                {tag}
                <button onClick={() => onChange2(fd.key, tags.filter((_, i) => i !== ti))} className="hover:text-red-500">×</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type tag and press Enter"
            className={inputCls}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value.trim()) {
                onChange2(fd.key, [...tags, e.currentTarget.value.trim()]);
                e.currentTarget.value = "";
              }
            }}
          />
        </div>
      );
    }
    if (fd.type === "icon-select") {
      return (
        <div key={fd.key} className="flex flex-wrap gap-2">
          {iconOptions.map((ic) => (
            <button
              key={ic.key}
              type="button"
              onClick={() => onChange2(fd.key, ic.key)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm transition-all ${
                val === ic.key ? "bg-green-600 border-green-600 text-white" : "border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600"
              }`}
              title={ic.label}
            >
              {ic.key.slice(0, 2)}
            </button>
          ))}
        </div>
      );
    }
    return (
      <input
        key={fd.key}
        type="text"
        value={val as string ?? ""}
        onChange={(e) => onChange2(fd.key, e.target.value)}
        placeholder={fd.placeholder}
        className={inputCls}
      />
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.id as string} className="border border-gray-200 rounded-xl overflow-hidden">
          {editingId === item.id ? (
            <div className="p-4 bg-green-50 space-y-3">
              {fields.map((fd) => (
                <div key={fd.key} className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{fd.label}</label>
                  {renderField(fd, editForm[fd.key], (k, v) => setEditForm({ ...editForm, [k]: v }))}
                </div>
              ))}
              <div className="flex gap-2 pt-1">
                <button onClick={saveEdit} className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  Save
                </button>
                <button onClick={() => setEditingId(null)} className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-800 font-medium truncate flex-1">{String(item[itemTitleKey] ?? "(Untitled)")}</span>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => moveUp(idx)} disabled={idx === 0} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/></svg>
                </button>
                <button onClick={() => moveDown(idx)} disabled={idx === items.length - 1} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <button onClick={() => startEdit(item)} className="p-1.5 rounded-lg text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button onClick={() => deleteItem(item.id as string)} className="p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add new */}
      {expandedAdd ? (
        <div className="border-2 border-dashed border-green-400 rounded-xl p-4 bg-green-50 space-y-3">
          {fields.map((fd) => (
            <div key={fd.key} className="space-y-1">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{fd.label}</label>
              {renderField(fd, newForm[fd.key], (k, v) => setNewForm({ ...newForm, [k]: v }))}
            </div>
          ))}
          <div className="flex gap-2 pt-1">
            <button onClick={addItem} className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
              Add
            </button>
            <button onClick={() => { setExpandAdd(false); setNewForm(newItemDefaults); }} className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Cancel</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpandAdd(true)}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-green-400 text-gray-500 hover:text-green-600 rounded-xl py-3 text-sm font-medium transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
          {addLabel}
        </button>
      )}
    </div>
  );
}
