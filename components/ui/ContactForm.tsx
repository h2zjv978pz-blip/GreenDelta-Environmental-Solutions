"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", organization: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24–48 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",organization:"",message:"" }); }}
          className="btn-outline mt-2"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
        <input
          type="text" name="name" required value={form.name}
          onChange={handleChange} placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email" name="email" required value={form.email}
          onChange={handleChange} placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel" name="phone" value={form.phone}
          onChange={handleChange} placeholder="+880 1XXX-XXXXXX"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Organization</label>
        <input
          type="text" name="organization" value={form.organization}
          onChange={handleChange} placeholder="Company / Institution"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2 flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
        <textarea
          name="message" required value={form.message}
          onChange={handleChange}
          placeholder="Describe your project, research need, or inquiry…"
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
