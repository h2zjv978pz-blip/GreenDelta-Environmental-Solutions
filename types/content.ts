export interface Stat {
  id: string
  value: string
  label: string
}

export interface HeroData {
  badge: string
  titleStart: string
  titleHighlight: string
  titleEnd: string
  subtitle: string
  cta1: { label: string; href: string }
  cta2: { label: string; href: string }
  stats: Stat[]
}

export interface Highlight {
  id: string
  iconKey: string
  title: string
  text: string
}

export interface AboutData {
  paragraphs: string[]
  values: string[]
  highlights: Highlight[]
}

export interface Service {
  id: string
  iconKey: string
  color: string
  title: string
  description: string
}

export interface ResearchArea {
  id: string
  iconKey: string
  colorTheme: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  status: "Completed" | "Ongoing" | "Planned"
  gradientColor: string
}

export interface Reason {
  id: string
  number: string
  iconKey: string
  title: string
  description: string
}

export interface WhyUsData {
  reasons: Reason[]
}

export interface ContactData {
  email: string
  location: string
  hours: string
}

export interface ContentData {
  hero: HeroData
  about: AboutData
  services: Service[]
  research: ResearchArea[]
  projects: Project[]
  whyUs: WhyUsData
  contact: ContactData
  updatedAt?: string
}
