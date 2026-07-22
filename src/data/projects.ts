import type { Locale } from "./types";

export type ProjectCategory = "professional" | "academic" | "personal";
export type CodeVisibility = "public" | "private" | "unavailable";

export interface Project {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  category: ProjectCategory;
  technologies: string[];
  codeVisibility: CodeVisibility;
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "labway-lims",
    title: { pt: "Modernização do LabWay-LIMS", en: "LabWay-LIMS modernisation" },
    description: {
      pt: "Modernização de módulos legados de um produto empresarial de gestão de informação laboratorial.",
      en: "Modernisation of legacy modules in an enterprise laboratory information management product.",
    },
    category: "professional",
    technologies: ["Blazor", "C#", "JavaScript", "HTML", "CSS", "Scrum"],
    codeVisibility: "private",
  },
  {
    id: "shoedes",
    title: { pt: "SHOEDES — Shoe Design", en: "SHOEDES — Shoe Design" },
    description: {
      pt: "Prova de Aptidão Profissional ligada ao setor do calçado e desenvolvida num contexto internacional.",
      en: "A vocational final project connected to the footwear sector and developed in an international context.",
    },
    category: "academic",
    technologies: [],
    codeVisibility: "unavailable",
  },
  {
    id: "boavista-trail",
    title: { pt: "Website Boavista Trail", en: "Boavista Trail website" },
    description: {
      pt: "Aplicação web académica com área pública e reservada para gestão de uma organização desportiva.",
      en: "An academic web application with public and restricted areas for managing a sports organisation.",
    },
    category: "academic",
    technologies: [],
    codeVisibility: "unavailable",
  },
  {
    id: "portfolio",
    title: { pt: "Portfólio pessoal", en: "Personal portfolio" },
    description: {
      pt: "Portfólio bilingue, acessível e responsivo para apresentar projetos, competências e contacto.",
      en: "A bilingual, accessible and responsive portfolio for presenting projects, skills and contact details.",
    },
    category: "personal",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "HTML"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/Portfolio",
  },
];
