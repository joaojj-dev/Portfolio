export type Locale = "pt" | "en";

export type SectionId = "sobre" | "projetos" | "competencias" | "formacoes" | "contacto";

export interface NavigationItem {
  label: string;
  section: SectionId;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedAt: "2026-02" | "2026-03";
  image: string;
  credentialUrl: string;
}

export interface SiteContent {
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    label: string;
    homeLabel: string;
    menu: string;
    cv: string;
    items: NavigationItem[];
  };
  theme: {
    label: string;
    light: string;
    dark: string;
  };
  hero: {
    introduction: string;
    role: string;
    description: string;
    projectsAction: string;
    contactAction: string;
    cvAction: string;
    profilesLabel: string;
    photoAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    professionalGroup: string;
    otherGroup: string;
    professional: string;
    academic: string;
    personal: string;
    privateCode: string;
    unavailableCode: string;
    publicCode: string;
    repositoryAction: string;
    liveAction: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
  };
  skillGroups: SkillGroup[];
  trainingSection: {
    eyebrow: string;
    title: string;
    description: string;
    issuedDates: Record<Certification["issuedAt"], string>;
    credlyAction: string;
  };
  certifications: Certification[];
  contact: {
    eyebrow: string;
    title: string;
    locationLabel: string;
    location: string;
    cvAction: string;
  };
  footer: {
    developedBy: string;
    navigationLabel: string;
  };
  language: {
    switchTo: string;
    shortAlternative: string;
  };
  common: {
    opensNewTab: string;
    skipToContent: string;
    notFoundTitle: string;
    notFoundDescription: string;
    backHome: string;
  };
}
