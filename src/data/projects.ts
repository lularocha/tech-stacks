export const siteTitle = "AI Projects / Tech Stacks";

export type Locale = "en" | "pt";

export interface ProjectEntry {
  slug: string;
  title: string;
  summary: Record<Locale, string>;
  liveUrl?: string;
  imageSrc: string;
  locales: Locale[];
}

export const projects: ProjectEntry[] = [
  {
    slug: "tech-stacks-stack",
    title: "Tech Stacks",
    summary: {
      en:
        "A bilingual static site built with Astro that serves a double function: it documents the projects and explains their tech stacks through shared layouts, reusable data, and localized routes. It also represents a foundational step in the process of learning how to build with AI.",
      pt:
        "Um site estático bilíngue construído com Astro que cumpre uma dupla função: documentar os projetos e explicar suas stacks por meio de layouts compartilhados, dados reutilizáveis e rotas localizadas. Ele também representa um passo fundamental no processo de aprendizado de como construir com IA.",
    },
    imageSrc: "/project-images/tech-stacks.png",
    locales: ["en", "pt"],
  },
  {
    slug: "mybtc-calculator-stack",
    title: "BTC Calculator",
    summary: {
      en:
        "A dependency-light Bitcoin calculator that converts between BTC, SATS, and multiple fiat currencies with live price data. It is built with plain HTML, CSS, and modular JavaScript, including multilingual UI and mobile-specific interaction handling.",
      pt:
        "Uma calculadora de Bitcoin leve que converte entre BTC, SATS e várias moedas fiduciárias com dados de preço em tempo real. Ela é construída com HTML, CSS e JavaScript modular, incluindo interface multilíngue e comportamentos de interação específicos para mobile.",
    },
    liveUrl: "https://sugiro-mybtc.vercel.app/",
    imageSrc: "/project-images/mybtc-calculator.png",
    locales: ["en", "pt"],
  },
  {
    slug: "capital-gains-calculator-stack",
    title: "Capital Gains Calculator",
    summary: {
      en:
        "A lightweight browser-based calculator for simulating tax on capital gains, IOF, and net profit on US stock buy/sell operations using PTAX exchange rates. It is built as a plain static web app with HTML, CSS, and vanilla JavaScript.",
      pt:
        "Uma calculadora leve baseada no navegador para simular imposto sobre ganho de capital, IOF e lucro líquido em operações de compra e venda de ações americanas usando cotações PTAX. Ela é construída como um app web estático com HTML, CSS e JavaScript puro.",
    },
    liveUrl: "https://sugiro.io/stonks/",
    imageSrc: "/project-images/capital-gains-calculator.png",
    locales: ["en", "pt"],
  },
  {
    slug: "card-tracker-stack",
    title: "Card Tracker",
    summary: {
      en:
        "A small full-stack finance dashboard built with Next.js. It reads credit card statements from CSV files, classifies merchants into categories, exposes server-side API routes, and renders charts and tables in a React client.",
      pt:
        "Um pequeno dashboard financeiro full-stack construído com Next.js. Ele lê faturas de cartão de crédito em arquivos CSV, classifica estabelecimentos em categorias, expõe rotas de API no servidor e renderiza gráficos e tabelas em um cliente React.",
    },
    liveUrl: "https://mycctracker.vercel.app/",
    imageSrc: "/project-images/card-tracker.png",
    locales: ["en", "pt"],
  },
  {
    slug: "dots-animation-stack",
    title: "Dots Animation Tool",
    summary: {
      en:
        "A Vite + React + TypeScript tool for live visual animation studies and SVG export. It includes local export middleware, scene generation logic, and a browser UI for exploring and saving animation variations.",
      pt:
        "Uma ferramenta em Vite + React + TypeScript para estudos visuais de animação em tempo real e exportação de SVG. Ela inclui middleware local de exportação, lógica de geração de cena e uma interface no navegador para explorar e salvar variações de animação.",
    },
    liveUrl: "https://movingdots.vercel.app/",
    imageSrc: "/project-images/dot-animation.png",
    locales: ["en", "pt"],
  },
  {
    slug: "glossary-builder-stack",
    title: "Glossary Builder",
    summary: {
      en:
        "An AI-powered glossary generator built with React, TypeScript, Vite, and Vercel serverless functions. It creates structured glossaries from a seed word, expands terms with Claude, and exports the result as markdown or DOCX.",
      pt:
        "Um gerador de glossários com IA construído com React, TypeScript, Vite e funções serverless da Vercel. Ele cria glossários estruturados a partir de uma palavra-semente, expande termos com Claude e exporta o resultado em markdown ou DOCX.",
    },
    liveUrl: "https://glossary-builder.vercel.app/",
    imageSrc: "/project-images/glossary-builder.png",
    locales: ["en", "pt"],
  },
  {
    slug: "hash-calculator-stack",
    title: "Hash Cost Calculator",
    summary: {
      en:
        "A static calculator for estimating bitcoin mining energy costs. It combines plain HTML, CSS, and JavaScript with custom UI controls, bilingual translation support, modal help panels, and miner comparison data.",
      pt:
        "Uma calculadora estática para estimar custos de energia de mineração de bitcoin. Ela combina HTML, CSS e JavaScript puros com controles de interface customizados, suporte bilíngue, painéis modais de ajuda e dados de comparação de mineradores.",
    },
    liveUrl: "https://sugiro.io/hash/",
    imageSrc: "/project-images/hash-calculator.png",
    locales: ["en", "pt"],
  },
  {
    slug: "prompt-builder-stack",
    title: "Prompt Builder",
    summary: {
      en:
        "A Next.js app for composing structured AI prompts with export, file upload, and Claude-powered image analysis. It uses React, TypeScript, Tailwind CSS, and server-side AI integration inside the App Router architecture.",
      pt:
        "Um app em Next.js para compor prompts estruturados de IA com exportação, upload de arquivos e análise de imagem com Claude. Ele usa React, TypeScript, Tailwind CSS e integração de IA no servidor dentro da arquitetura App Router.",
    },
    liveUrl: "https://sugiro-prompt.vercel.app/",
    imageSrc: "/project-images/prompt-builder.png",
    locales: ["en", "pt"],
  },
  {
    slug: "qr-code-generator-stack",
    title: "QR Code Generator",
    summary: {
      en:
        "A simple static QR code tool built with plain HTML, inline CSS, and browser-side JavaScript. It uses a CDN-loaded QR code library to generate downloadable QR codes without a framework or build system.",
      pt:
        "Uma ferramenta simples e estática de QR Code construída com HTML puro, CSS inline e JavaScript no navegador. Ela usa uma biblioteca de QR Code carregada por CDN para gerar códigos baixáveis sem framework nem etapa de build.",
    },
    liveUrl: "https://sugiro.io/qrcode/",
    imageSrc: "/project-images/qr-code-generator.png",
    locales: ["en", "pt"],
  },
];

export const orderedProjects = [
  ...projects.filter((project) => project.slug !== "tech-stacks-stack"),
  ...projects.filter((project) => project.slug === "tech-stacks-stack"),
];

export const placeholderProjects = [8, 9, 10, 11, 12].map((index) => ({
  title: `Project Placeholder 0${index}`,
  summary: {
    en:
      "Placeholder summary for another stack page. Use this slot to test how additional project cards sit in the layout.",
    pt:
      "Resumo provisório para outra página de stack. Use este espaço para testar como novos cards de projeto se comportam no layout.",
  },
}));

export const ui = {
  en: {
    locale: "en" as const,
    home: "Home",
    projectsMenuLabel: "Projects",
    closeProjectsMenu: "Close projects menu",
    techStackReview: "Tech Stack Review",
    liveAt: "Live at:",
    atAGlance: "At a glance",
    openLiveSite: "Open live site",
    footerPrefix: "Developed by Lula Rocha",
  },
  pt: {
    locale: "pt" as const,
    home: "Início",
    projectsMenuLabel: "Projetos",
    closeProjectsMenu: "Fechar menu de projetos",
    techStackReview: "Análise da Stack",
    liveAt: "Ao vivo em:",
    atAGlance: "Visão geral",
    openLiveSite: "Abrir site ao vivo",
    footerPrefix: "Desenvolvido por Lula Rocha",
  },
};

export function getHomePath(locale: Locale) {
  return locale === "pt" ? "/pt.html" : "/";
}

export function getProjectPath(project: ProjectEntry, locale: Locale) {
  if (locale === "pt" && project.locales.includes("pt")) {
    return `/pt/${project.slug}.html`;
  }

  return `/${project.slug}.html`;
}

export function getAlternatePath(
  currentLocale: Locale,
  targetLocale: Locale,
  currentSlug?: string,
) {
  if (!currentSlug) {
    return getHomePath(targetLocale);
  }

  const project = projects.find((entry) => entry.slug === currentSlug);

  if (!project) {
    return getHomePath(targetLocale);
  }

  return getProjectPath(project, targetLocale);
}
