# HeymerDev · Portafolio

Portafolio personal de Heymer Meza: Ingeniero de Sistemas en formación y desarrollador Full-Stack. Es una sola página con presentación, trayectoria, educación, skills, proyectos y contacto.

## Stack

- [Astro 6](https://astro.build): sitio de una sola página (`src/pages/index.astro`)
- [Tailwind CSS 4](https://tailwindcss.com), integrado con `@tailwindcss/vite`
- TypeScript, con tipos para todos los datos en `src/types.ts`
- Deploy en [Netlify](https://www.netlify.com) con `@astrojs/netlify`
- Fuentes: Inter e íconos de [Material Symbols](https://fonts.google.com/icons) (Google Fonts)

## Requisitos

- Node.js `>= 22.12.0`
- [pnpm](https://pnpm.io)

## Comandos

Todos se ejecutan desde la raíz del proyecto:

| Comando        | Acción                                             |
| :------------- | :------------------------------------------------- |
| `pnpm install` | Instala las dependencias                           |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Genera el build de producción                      |
| `pnpm preview` | Sirve el build localmente para revisarlo           |

## Estructura

```text
/
├── public/
│   ├── jobs/           # Logos de las empresas (experiencia)
│   ├── projects/       # Capturas de los proyectos (.webp)
│   ├── me.webp         # Foto del hero
│   └── Heymer Meza Gutierrez CV-PDF.pdf   # CV que descarga el navbar
├── src/
│   ├── components/
│   │   ├── cards/      # Piezas reutilizables (CardProject, CardSkill, CardTechnology...)
│   │   └── views/      # Secciones de la página (Hero, About, Projects...)
│   ├── data/           # Contenido del portafolio (ver abajo)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro # Arma la página y las animaciones de entrada
│   ├── styles/
│   │   └── global.css  # Tokens de diseño y estilos globales
│   └── types.ts        # Interfaces de los datos
└── astro.config.mjs
```

## Editar el contenido

Todo el texto de las listas vive en `src/data/`. Para agregar o cambiar algo no hace falta tocar los componentes.

| Archivo                       | Sección          | Campos                                                             |
| :---------------------------- | :--------------- | :----------------------------------------------------------------- |
| `src/data/projects.ts`        | Proyectos        | `name`, `description`, `link`, `repositories`, `image`, `technologies` |
| `src/data/jobs.ts`            | Trayectoria      | `image`, `jobNmae`, `jobDescription`, `workAges`                   |
| `src/data/educations.ts`      | Educación        | `schoolName`, `degree`, `schoolAges`                               |
| `src/data/skills.ts`          | Skills           | `id`, `name`                                                       |
| `src/data/SocialNetworks.ts`  | Contacto y footer | `name`, `link`, `icon` (nombre de un ícono de Material Symbols)    |
| `src/data/navLinks.ts`        | Navbar           | `path` (ancla de la sección), `name`                               |

Los textos fijos, como "Sobre mí" y el saludo del hero, están directamente en su componente dentro de `src/components/views/`.

### Agregar un proyecto

1. Guarda la captura en `public/projects/`, de preferencia en `.webp`.
2. Agrega un objeto al arreglo de `src/data/projects.ts`:

```ts
{
  name: "Nombre del proyecto",
  description: "Qué hace el proyecto, en una o dos frases.",
  link: "https://mi-proyecto.vercel.app/", // "" si todavía no está publicado
  repositories: [
    "https://github.com/HeymerDev/mi-proyecto-frontend",
    "https://github.com/HeymerDev/mi-proyecto-backend",
  ],
  image: "/projects/mi-proyecto.webp",
  technologies: ["NextJS", "NodeJS", "PostgreSQL"],
},
```

Así se comporta la card (`CardProject.astro`):

- **`link`**: si está vacío, en lugar del botón "Vista previa" aparece "En desarrollo".
- **`repositories`**: cada enlace toma su nombre de la URL. Si contiene `frontend` dice **Frontend**, si contiene `backend` dice **Backend**, y si no, dice **Código**.
- **`technologies`**: se muestran como badges negros (`CardTechnology.astro`).
- **`image`**: no se ve de entrada. Aparece sobre la card al hacer hover, pasando de desenfocada a nítida.
- La descripción se corta a 3 líneas.

### Secciones y navbar

Las anclas del navbar (`navLinks.ts`) apuntan a los `id` de las secciones: `#hero`, `#experiencia`, `#proyectos` y `#contacto`. Si agregas una sección nueva al menú, ponle un `id` y agrégala ahí.

## Diseño

Los tokens de diseño están en el bloque `@theme` de `src/styles/global.css` y se usan como clases de Tailwind (`bg-primary`, `text-muted-foreground`, `font-headline-md`, etc.). La paleta es en blanco y negro: `primary` es `#000000` y `on-primary` es `#ffffff`.

- **Ancho del contenido**: lo controla `--spacing-container-max`, que hoy está en `830px`. La utilidad `container-page` la usan el navbar, el `main` y el footer para quedar alineados al mismo margen (`--spacing-margin-page`). Para cambiar el ancho de toda la web basta con cambiar ese token.
- **Badges**: `CardSkill` (fondo claro) se usa en la sección de skills y `CardTechnology` (fondo negro, letra blanca) en las cards de proyectos.
- **Scroll**: es suave al tocar los enlaces del navbar y respeta `prefers-reduced-motion`. `scroll-padding-top` evita que el navbar fijo tape el título de la sección.
- **Animaciones de entrada**: el script de `src/pages/index.astro` hace aparecer cada `<section>` con un fade al entrar en pantalla y le agrega sombra al navbar al hacer scroll.

## Deploy

El proyecto usa el adaptador `@astrojs/netlify`. Netlify ejecuta `pnpm build` y publica el resultado. La configuración está en `astro.config.mjs`.
