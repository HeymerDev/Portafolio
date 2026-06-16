import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Dev-Tree",
    description:
      "Proyecto basado en linktree para desarrolladores, donde podras compartir tus redes sociales, y perfil de GitHub de una manera rapida y sencilla. <br/><br/>Tecnologias usadas: React, NodeJS, Express, MongoDB, TailwindCSS.",
    link: "https://dev-tree-heymerdev.netlify.app/",
    reposirories: [
      "https://github.com/HeymerDev/dev-tree-frontend",
      "https://github.com/HeymerDev/dev-tree-backend",
    ],
    image: "/projects/devtree.webp",
  },
  {
    name: "CashTracker",
    description:
      "Proyecto de seguimiento de gastos personales, donde puedes registrar tus ingresos y gastos, y visualizar tus finanzas de una manera rapida y sencilla. <br/><br/>Tecnologias usadas: NextJS, NodeJS, Express, PostgreSQL, Sequelize, TailwindCSS.",
    link: "",
    reposirories: [
      "https://github.com/HeymerDev/cash-tracker-backend",
      "https://github.com/HeymerDev/cash-tracker-frontend",
    ],
    image: "/projects/cashtracker.webp",
  },
  {
    name: "Costeñol",
    description:
      "Mini compilador basado en un lenguaje de programación llamado Costeñol, el cual es un lenguaje de programación basado en español, con una sintaxis sencilla y facil de aprender. <br/><br/>Tecnologias usadas: JavaScript, NodeJS.",
    link: "https://compilatorjs.netlify.app/",
    reposirories: ["https://github.com/HeymerDev/compilator-js"],
    image: "/projects/compilator.webp",
  },
];
