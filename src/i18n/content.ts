import type { Locale, SiteContent } from "../data/types";
import digitalSafetyImage from "../assets/certifications/digital-safety.png";
import industrialNetworkingImage from "../assets/certifications/industrial-networking.png";
import cybersecurityImage from "../assets/certifications/introduction-cybersecurity.png";
import iotImage from "../assets/certifications/introduction-iot.png";
import modernAiImage from "../assets/certifications/modern-ai.png";
import networkAddressingImage from "../assets/certifications/network-addressing.png";
import networkSupportImage from "../assets/certifications/network-support.png";
import networkTechnicianImage from "../assets/certifications/network-technician.png";
import networkingBasicsImage from "../assets/certifications/networking-basics.png";
import networkingDevicesImage from "../assets/certifications/networking-devices.png";

const certifications = [
  {
    id: "network-technician",
    title: "Network Technician Career Path",
    issuer: "Cisco",
    issuedAt: "2026-03",
    image: networkTechnicianImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/77fe10ff-8411-408c-95e3-dbbc32b2d43a",
  },
  {
    id: "network-support",
    title: "Network Support and Security",
    issuer: "Cisco",
    issuedAt: "2026-03",
    image: networkSupportImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/0efa4b9f-9a7b-4d47-aba4-db7abf67e8dd",
  },
  {
    id: "network-addressing",
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco",
    issuedAt: "2026-03",
    image: networkAddressingImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/ba6aa138-b2f9-44d9-80cd-5b8a7d0ea45f",
  },
  {
    id: "networking-devices",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco",
    issuedAt: "2026-03",
    image: networkingDevicesImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/888b1396-e1a3-4960-958b-a540f870f272",
  },
  {
    id: "networking-basics",
    title: "Networking Basics",
    issuer: "Cisco",
    issuedAt: "2026-03",
    image: networkingBasicsImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/18bc521f-3dfa-49c8-b273-8e69a1afac0c",
  },
  {
    id: "digital-safety",
    title: "Digital Safety and Security Awareness",
    issuer: "Cisco",
    issuedAt: "2026-02",
    image: digitalSafetyImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/3bdb7339-345d-4f3f-9620-f6d2d381bcfb",
  },
  {
    id: "industrial-networking",
    title: "Industrial Networking Essentials",
    issuer: "Cisco",
    issuedAt: "2026-02",
    image: industrialNetworkingImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/b727a3d8-0430-4933-86cb-8d8f4602386e",
  },
  {
    id: "introduction-iot",
    title: "Introduction to IoT",
    issuer: "Cisco",
    issuedAt: "2026-02",
    image: iotImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/764d1073-a1b3-4ad3-80c9-7683a61c66e4",
  },
  {
    id: "modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    issuedAt: "2026-02",
    image: modernAiImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/54bd2f62-9209-485c-a6fb-84e7ade21601",
  },
  {
    id: "cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issuedAt: "2026-02",
    image: cybersecurityImage.src,
    credentialUrl: "https://www.credly.com/earner/earned/badge/42549156-f56a-4326-887a-1358c80d2d46",
  },
] satisfies SiteContent["certifications"];

export const content = {
  pt: {
    meta: {
      homeTitle: "Portfolio | João Jorge",
      homeDescription: "Portfólio de João Jorge, Software Developer com experiência em desenvolvimento web e aplicações empresariais.",
    },
    nav: {
      label: "Navegação principal",
      homeLabel: "João Jorge — página inicial",
      menu: "Menu",
      cv: "CV",
      items: [
        { label: "Sobre", section: "sobre" },
        { label: "Projetos", section: "projetos" },
        { label: "Competências", section: "competencias" },
        { label: "Formações", section: "formacoes" },
        { label: "Contacto", section: "contacto" },
      ],
    },
    theme: { label: "Tema", light: "Claro", dark: "Escuro" },
    hero: {
      introduction: "Olá, sou o João Jorge.",
      role: "Software Developer",
      description: "Experiência em desenvolvimento web, criação e modernização de aplicações empresariais, bases de dados e metodologias ágeis.",
      projectsAction: "Ver projetos",
      contactAction: "Contactar",
      cvAction: "Descarregar CV",
      profilesLabel: "Perfis profissionais",
      photoAlt: "João Jorge num espaço interior junto a uma escadaria",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Tecnologia, aprendizagem e experiência prática.",
      paragraphs: [
        "O meu percurso em tecnologia começou num curso profissional com plano próprio na área de Informática e evoluiu através de projetos académicos, desenvolvimento web full stack e experiência em contexto empresarial.",
        "Tenho trabalhado com bases de dados, APIs e com a criação e modernização de aplicações empresariais, desenvolvendo uma forte componente prática em desenvolvimento de software. Procuro construir soluções funcionais e bem estruturadas, com atenção à usabilidade, escalabilidade, desempenho, manutenção e qualidade do produto entregue.",
        "Valorizo uma comunicação clara, pensamento crítico, adaptação e colaboração. Procuro compreender o contexto de cada problema antes de escolher a tecnologia ou a solução a ser implementada.",
      ],
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Trabalho desenvolvido em diferentes contextos.",
      professionalGroup: "Projetos Profissionais",
      otherGroup: "Projetos Académicos e Pessoais",
      professional: "Profissional",
      academic: "Académico",
      personal: "Pessoal",
      privateCode: "Código privado",
      unavailableCode: "Código não disponível",
      publicCode: "Código público",
      repositoryAction: "Ver repositório",
      liveAction: "Ver projeto",
    },
    skillsSection: {
      eyebrow: "Competências",
      title: "Tecnologias e Ferramentas Principais.",
    },
    skillGroups: [
      { id: "web", title: "Desenvolvimento web", skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "Blazor", "ASP.NET", "ASP", "AngularJS", "jQuery", "Bootstrap", "Web design"] },
      { id: "backend", title: "Linguagens e backend", skills: ["C#", "Java", "Python", "PHP"] },
      { id: "data", title: "Bases de dados e APIs", skills: ["PostgreSQL", "MySQL", "SQL", "REST APIs", "Swagger", "Postman"] },
      { id: "tools", title: "Ferramentas e práticas", skills: ["Git", "GitHub", "Docker", "Linux", "Azure DevOps", "Scrum", "Adobe Photoshop", "Adobe Premiere Pro", "Audacity", "Microsoft Office"] },
      { id: "complementary", title: "Conhecimentos complementares", skills: ["Arduino", "Arduino IDE", "Three.js", "C", "C++", "Assembly x86"] },
    ],
    trainingSection: {
      eyebrow: "Formações",
      title: "Aprendizagem contínua.",
      description: "Tenho complementado o meu percurso com formações nas áreas de redes, cibersegurança, IoT e IA.",
      issuedDates: { "2026-02": "Emitida em fevereiro de 2026", "2026-03": "Emitida em março de 2026" },
      credlyAction: "Ver todas as certificações no Credly",
    },
    certifications,
    contact: {
      eyebrow: "Contacto",
      title: "Vamos conversar sobre o próximo desafio.",
      locationLabel: "Localização",
      location: "Ovar, Aveiro, Portugal",
      cvAction: "Descarregar CV",
    },
    footer: { developedBy: "Desenvolvido por", navigationLabel: "Ligações do rodapé" },
    language: { switchTo: "Mudar para inglês", shortAlternative: "EN" },
    common: {
      opensNewTab: "abre num novo separador",
      skipToContent: "Saltar para o conteúdo",
      notFoundTitle: "Página não encontrada",
      notFoundDescription: "A página que procuras não existe ou foi movida.",
      backHome: "Voltar à página inicial",
    },
  },
  en: {
    meta: {
      homeTitle: "Portfolio | João Jorge",
      homeDescription: "Portfolio of João Jorge, a Software Developer with experience in web development and enterprise applications.",
    },
    nav: {
      label: "Main navigation",
      homeLabel: "João Jorge — home page",
      menu: "Menu",
      cv: "CV",
      items: [
        { label: "About", section: "sobre" },
        { label: "Projects", section: "projetos" },
        { label: "Skills", section: "competencias" },
        { label: "Certifications", section: "formacoes" },
        { label: "Contact", section: "contacto" },
      ],
    },
    theme: { label: "Theme", light: "Light", dark: "Dark" },
    hero: {
      introduction: "Hello, I’m João Jorge.",
      role: "Software Developer",
      description: "Experience in web development, creation and modernisation of business applications, databases and agile methodologies.",
      projectsAction: "View projects",
      contactAction: "Contact me",
      cvAction: "Download CV",
      profilesLabel: "Professional profiles",
      photoAlt: "João Jorge indoors beside a staircase",
    },
    about: {
      eyebrow: "About me",
      title: "Technology, learning and hands-on experience.",
      paragraphs: [
        "My journey in technology began with a customized vocational program in computer science and has evolved through academic projects, full-stack web development, and experience in a business setting.",
        "I have been working with databases, APIs, and the creation and modernization of enterprise applications, gaining strong hands-on experience in software development. I strive to build functional and well-structured solutions, with a focus on usability, scalability, performance, maintainability, and the quality of the delivered product.",
        "I value clear communication, critical thinking, adaptability, and collaboration. I strive to understand the context of each problem before choosing the technology or solution to be implemented.",
      ],
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Work developed across different contexts.",
      professionalGroup: "Professional Projects",
      otherGroup: "Academic and Personal Projects",
      professional: "Professional",
      academic: "Academic",
      personal: "Personal",
      privateCode: "Private code",
      unavailableCode: "Code unavailable",
      publicCode: "Public code",
      repositoryAction: "View repository",
      liveAction: "View project",
    },
    skillsSection: {
      eyebrow: "Skills",
      title: "Main Technologies and Tools.",
    },
    skillGroups: [
      { id: "web", title: "Web development", skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "Blazor", "ASP.NET", "ASP", "AngularJS", "jQuery", "Bootstrap", "Web design"] },
      { id: "backend", title: "Languages and backend", skills: ["C#", "Java", "Python", "PHP"] },
      { id: "data", title: "Databases and APIs", skills: ["PostgreSQL", "MySQL", "SQL", "REST APIs", "Swagger", "Postman"] },
      { id: "tools", title: "Tools and practices", skills: ["Git", "GitHub", "Docker", "Linux", "Azure DevOps", "Scrum", "Adobe Photoshop", "Adobe Premiere Pro", "Audacity", "Microsoft Office"] },
      { id: "complementary", title: "Additional knowledge", skills: ["Arduino", "Arduino IDE", "Three.js", "C", "C++", "Assembly x86"] },
    ],
    trainingSection: {
      eyebrow: "Certifications",
      title: "Continuous learning.",
      description: "I have been supplementing my career with training in the fields of networking, cybersecurity, IoT and AI.",
      issuedDates: { "2026-02": "Issued in February 2026", "2026-03": "Issued in March 2026" },
      credlyAction: "View all certifications on Credly",
    },
    certifications,
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about the next challenge.",
      locationLabel: "Location",
      location: "Ovar, Aveiro, Portugal",
      cvAction: "Download CV",
    },
    footer: { developedBy: "Developed by", navigationLabel: "Footer links" },
    language: { switchTo: "Mudar para português", shortAlternative: "PT" },
    common: {
      opensNewTab: "opens in a new tab",
      skipToContent: "Skip to content",
      notFoundTitle: "Page not found",
      notFoundDescription: "The page you are looking for does not exist or has moved.",
      backHome: "Back to the home page",
    },
  },
} satisfies Record<Locale, SiteContent>;

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
