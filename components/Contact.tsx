import type { ContactData } from "@/types/content";
import SectionTitle from "./ui/SectionTitle";
import ContactForm from "./ui/ContactForm";

export default function Contact({ data }: { data: ContactData }) {
  const info = [
    {
      label: "Email", value: data.email, href: `mailto:${data.email}`,
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    },
    {
      label: "Location", value: data.location, href: null,
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    },
    {
      label: "Working Hours", value: data.hours, href: null,
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Have a project in mind, need environmental research, or want to collaborate? We'd love to hear from you."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="card p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Contact Information</h3>
              <ul className="space-y-5">
                {info.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-green-100 text-green-700">{c.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{c.label}</p>
                      {c.href
                        ? <a href={c.href} className="text-gray-800 hover:text-green-600 transition-colors text-sm font-medium break-all">{c.value}</a>
                        : <p className="text-gray-800 text-sm font-medium">{c.value}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                What happens next?
              </h4>
              <ol className="space-y-2 text-sm text-green-700">
                <li className="flex gap-2"><span className="font-bold">1.</span> We review your inquiry within 24–48 hours.</li>
                <li className="flex gap-2"><span className="font-bold">2.</span> Our team schedules an initial consultation call.</li>
                <li className="flex gap-2"><span className="font-bold">3.</span> We propose a research or service scope tailored to you.</li>
                <li className="flex gap-2"><span className="font-bold">4.</span> Together, we design the best environmental solution.</li>
              </ol>
            </div>
          </div>
          <div className="lg:col-span-3 card p-8">
            <h3 className="font-bold text-gray-900 text-xl mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
