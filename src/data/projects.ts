import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Dev-Tree",
    description:
      "Proyecto basado en linktree para desarrolladores, donde podras compartir tus redes sociales, y perfil de GitHub de una manera rapida y sencilla.",
    link: "https://dev-tree-heymerdev.netlify.app/",
    repositories: [
      "https://github.com/HeymerDev/dev-tree-frontend",
      "https://github.com/HeymerDev/dev-tree-backend",
    ],
    image: "/projects/devtree.webp",
    technologies: ["React", "NodeJS", "Express", "MongoDB", "TailwindCSS"],
  },
  {
    name: "CashTracker",
    description:
      "Proyecto de seguimiento de gastos personales, donde puedes registrar tus ingresos y gastos, y visualizar tus finanzas de una manera rapida y sencilla.",
    link: "https://cash-tracker-frontend-eight.vercel.app/",
    repositories: [
      "https://github.com/HeymerDev/cash-tracker-backend",
      "https://github.com/HeymerDev/cash-tracker-frontend",
    ],
    image: "/projects/cashtracker.webp",
    technologies: [
      "NextJS",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "TailwindCSS",
    ],
  },
  {
    name: "Costeñol",
    description:
      "Mini compilador basado en un lenguaje de programación llamado Costeñol, el cual es un lenguaje de programación basado en español, con una sintaxis sencilla y facil de aprender.",
    link: "https://compilatorjs.netlify.app/",
    repositories: ["https://github.com/HeymerDev/compilator-js"],
    image: "/projects/compilator.webp",
    technologies: ["JavaScript", "NodeJS"],
  },

  {
    name: "Gestor de prestamos de equipos tecnológicos",
    description:
      "Sistema para gestionar préstamos de equipos tecnológicos en una institución.",
    link: "https://equipment-loan-management.vercel.app/",
    repositories: ["https://github.com/HeymerDev/equipment-loan-management"],
    image: "/projects/equip-loan.webp",
    technologies: ["NextJS", "NodeJS", "Express", "PostgreSQL", "TailwindCSS"],
  },
];
