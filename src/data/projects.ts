export const siteTitle = "AI Projects / Tech Stacks";

export const projects = [
  {
    slug: "mybtc-calculator-stack",
    title: "BTC Calculator",
    summary:
      "A dependency-light Bitcoin calculator that converts between BTC, SATS, and multiple fiat currencies with live price data. It is built with plain HTML, CSS, and modular JavaScript, including multilingual UI and mobile-specific interaction handling.",
  },
  {
    slug: "capital-gains-calculator-stack",
    title: "Capital Gains Calculator",
    summary:
      "A lightweight browser-based calculator for simulating capital gains, IOF, and net profit on US stock buy/sell operations using PTAX exchange rates. It is built as a plain static web app with HTML, CSS, and vanilla JavaScript.",
  },
  {
    slug: "card-tracker-stack",
    title: "Card Tracker",
    summary:
      "A small full-stack finance dashboard built with Next.js. It reads credit card statements from CSV files, classifies merchants into categories, exposes server-side API routes, and renders charts and tables in a React client.",
    liveUrl: "https://mycctracker.vercel.app/",
  },
  {
    slug: "sbe-animation-stack",
    title: "Dots Animation Tool",
    summary:
      "A Vite + React + TypeScript tool for live visual animation studies and SVG export. It includes local export middleware, scene generation logic, and a browser UI for exploring and saving animation variations.",
  },
  {
    slug: "glossary-builder-stack",
    title: "Glossary Builder",
    summary:
      "An AI-powered glossary generator built with React, TypeScript, Vite, and Vercel serverless functions. It creates structured glossaries from a seed word, expands terms with Claude, and exports the result as markdown or DOCX.",
    liveUrl: "https://glossary-builder.vercel.app/",
  },
  {
    slug: "hash-calculator-stack",
    title: "Hash Cost Calculator",
    summary:
      "A static calculator for estimating bitcoin mining energy costs. It combines plain HTML, CSS, and JavaScript with custom UI controls, bilingual translation support, modal help panels, and miner comparison data.",
  },
  {
    slug: "prompt-builder-stack",
    title: "Prompt Builder",
    summary:
      "A Next.js app for composing structured AI prompts with export, file upload, and Claude-powered image analysis. It uses React, TypeScript, Tailwind CSS, and server-side AI integration inside the App Router architecture.",
  },
  {
    slug: "qr-code-generator-stack",
    title: "QR Code Generator",
    summary:
      "A simple static QR code tool built with plain HTML, inline CSS, and browser-side JavaScript. It uses a CDN-loaded QR code library to generate downloadable QR codes without a framework or build system.",
  },
];

export const placeholderProjects = [8, 9, 10, 11, 12].map((index) => ({
  title: `Project Placeholder 0${index}`,
  summary:
    "Placeholder summary for another stack page. Use this slot to test how additional project cards sit in the layout.",
}));
