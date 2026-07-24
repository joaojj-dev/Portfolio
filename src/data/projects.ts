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
      pt: "Modernização de três módulos legados do LabWay-LIMS para uma solução web em Blazor e .NET, incluindo desenvolvimento frontend e backend, testes e integração com serviços existentes.",
      en: "Modernisation of three legacy LabWay-LIMS modules into a Blazor and .NET web solution, including frontend and backend development, testing and integration with existing services.",
    },
    category: "professional",
    technologies: ["Blazor", "C#", ".NET", "JavaScript", "HTML5", "CSS", "Microsoft SQL Server", "REST API", "Postman", "Azure DevOps", "Scrum"],
    codeVisibility: "private",
    liveUrl: "https://www.labway-lims.com/",
  },
  {
    id: "boavista-trail",
    title: {
      pt: "Website Boavista Trail",
      en: "Boavista Trail Website",
    },
    description: {
      pt: "Website full stack para centralizar a informação do Boavista Trail, com uma área pública e uma área reservada para gerir atletas, utilizadores, produtos, provas e associados.",
      en: "A full-stack website that centralises Boavista Trail information, with public and restricted areas for managing athletes, users, products, competitions and members.",
    },
    category: "professional",
    technologies: ["PHP", "JavaScript", "HTML5", "CSS", "MySQL"],
    codeVisibility: "private",
    liveUrl: "https://boavistatrail.pt/",
  },
  {
    id: "shoedes",
    title: {
      pt: "ShoeDes Website",
      en: "ShoeDes Website",
    },
    description: {
      pt: "Website full stack desenvolvido no âmbito da PAP para divulgar e gerir o projeto internacional SHOEDES, uma parceria entre oito entidades de seis países europeus.",
      en: "A full-stack website developed as a vocational final project to present and manage the international SHOEDES initiative, involving eight partner organisations from six European countries.",
    },
    category: "professional",
    technologies: ["ASP.NET", "ASP", "JavaScript", "HTML5", "CSS", "MySQL"],
    codeVisibility: "private",
    liveUrl: "https://shoedes.eu/",
  },
  {
    id: "production-management-system",
    title: {
      pt: "Sistema de Gestão de Produção",
      en: "Production Management System",
    },
    description: {
      pt: "Sistema para gerir encomendas, produtos e fluxos de operações, com planeamento da produção baseado em grafos.",
      en: "A system for managing orders, products and operation flows, with graph-based production planning.",
    },
    category: "academic",
    technologies: ["Java", "C", "C++", "Assembly", "Makefile", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/SEM3_PI_24-25_G064",
  },
  {
    id: "drone-show-management-platform",
    title: {
      pt: "Plataforma de Gestão de Espetáculos com Drones",
      en: "Drone Show Management Platform",
    },
    description: {
      pt: "Plataforma para criar, validar e simular espetáculos de drones, com gestão de utilizadores, clientes, configurações e segurança.",
      en: "A platform for creating, validating and simulating drone shows, including user, client, configuration and safety management.",
    },
    category: "academic",
    technologies: ["Java", "C", "ANTLR", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/sem4pi-2024-2025-sem4pi_2024_2025_g28",
  },
  {
    id: "urban-green-space-management",
    title: {
      pt: "Gestão de Espaços Verdes Urbanos",
      en: "Urban Green Space Management",
    },
    description: {
      pt: "Solução para apoiar a manutenção de espaços verdes urbanos através da gestão de tarefas, recursos e frota de veículos.",
      en: "A solution supporting urban green space maintenance through task, resource and vehicle fleet management.",
    },
    category: "academic",
    technologies: ["Java", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/lei-24-s2-1db-g021",
  },
  {
    id: "electrical-infrastructure-data-analysis",
    title: {
      pt: "Análise de Dados de Infraestruturas Elétricas",
      en: "Electrical Infrastructure Data Analysis",
    },
    description: {
      pt: "Análise e visualização do impacto da modernização da iluminação pública na capacidade de postos de transformação e no carregamento de veículos elétricos.",
      en: "Analysis and visualisation of how public lighting modernisation affects transformer station capacity and electric vehicle charging.",
    },
    category: "academic",
    technologies: ["Jupyter Notebook", "Python", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/ANADI_1231727_1231080_1231242",
  },
  {
    id: "graph-algorithms",
    title: {
      pt: "Algoritmos de Grafos",
      en: "Graph Algorithms",
    },
    description: {
      pt: "Implementação dos algoritmos de Kruskal e Dijkstra para calcular árvores geradoras mínimas e caminhos mais curtos em grafos.",
      en: "Implementation of the Kruskal and Dijkstra algorithms to calculate minimum spanning trees and shortest paths in graphs.",
    },
    category: "academic",
    technologies: ["Java", "Gnuplot", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/MDISC-MST",
  },
  {
    id: "machine-learning-energy-efficiency",
    title: {
      pt: "Machine Learning para Eficiência Energética",
      en: "Machine Learning for Energy Efficiency",
    },
    description: {
      pt: "Análise do desempenho de técnicas de machine learning para prever a capacidade de postos de transformação e classificar os níveis de ocupação da rede.",
      en: "Performance analysis of machine learning techniques to predict transformer station capacity and classify grid occupancy levels.",
    },
    category: "academic",
    technologies: ["Jupyter Notebook", "Python", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/ANADI_1231727_1231080_1231242_TP2",
  },
  {
    id: "railway-logistics-management",
    title: {
      pt: "Sistema de Gestão Logística Ferroviária",
      en: "Railway Logistics Management System",
    },
    description: {
      pt: "Sistema para gerir operações logísticas complexas numa rede ferroviária.",
      en: "A system for managing complex logistics operations across a railway network.",
    },
    category: "academic",
    technologies: ["Jupyter Notebook", "Java", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/sem2-pi-24.25-g122-repo",
  },
  {
    id: "port-management-system",
    title: {
      pt: "Sistema de Gestão Portuária",
      en: "Port Management System",
    },
    description: {
      pt: "Sistema desenvolvido para apoiar e organizar operações de gestão portuária.",
      en: "A system developed to support and organise port management operations.",
    },
    category: "academic",
    technologies: ["C#", "TypeScript", "HTML", "JavaScript", "CSS", "Prolog", "Markdown", "Scrum"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/LEI-SEM5-PI-2025-26-3DF-02",
  },
  {
    id: "portfolio",
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
    description: {
      pt: "Portfólio com o objetivo de divulgar os projetos que desenvolvi e outras informações sobre mim.",
      en: "A portfolio designed to showcase the projects I have developed and other information about me.",
    },
    category: "personal",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "HTML", "Markdown"],
    codeVisibility: "public",
    repositoryUrl: "https://github.com/joaojj-dev/Portfolio",
  },
];
