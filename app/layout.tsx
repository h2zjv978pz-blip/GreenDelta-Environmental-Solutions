import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenDelta Environmental Solutions | Climate Research for Bangladesh",
  description:
    "GreenDelta Environmental Solutions provides research-driven climate adaptation, GIS & remote sensing, environmental planning, and community resilience services for Bangladesh.",
  keywords: [
    "environmental consultancy Bangladesh",
    "climate change research",
    "GIS remote sensing Bangladesh",
    "disaster risk reduction",
    "flood risk mapping",
    "environmental impact assessment",
    "climate resilience",
    "biodiversity conservation",
  ],
  authors: [{ name: "GreenDelta Environmental Solutions" }],
  openGraph: {
    title: "GreenDelta Environmental Solutions",
    description: "Climate Research & Environmental Solutions for Bangladesh",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-800">{children}</body>
    </html>
  );
}
