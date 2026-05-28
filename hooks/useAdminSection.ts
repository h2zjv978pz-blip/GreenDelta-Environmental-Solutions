"use client";
import { useState, useEffect } from "react";

export interface Toast {
  message: string;
  type: "success" | "error";
}

export function useAdminSection<T>(section: string) {
  const [data, setData]     = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [toast, setToast]     = useState<Toast | null>(null);

  useEffect(() => {
    fetch(`/api/admin/content/${section}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [section]);

  const save = async (newData: T) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/content/${section}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      if (!res.ok) throw new Error();
      setData(newData);
      show("Changes saved successfully!", "success");
    } catch {
      show("Failed to save changes.", "error");
    } finally {
      setSaving(false);
    }
  };

  const show = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  return { data, setData, loading, saving, toast, save };
}
