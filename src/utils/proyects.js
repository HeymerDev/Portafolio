import blog from "../assets/images/images-proyects/blog.png";
import viveU from "../assets/images/images-proyects/vive-u.png";

export const itemsProyects = [
  {
    id: 1,
    title: "Blog React",
    content:
      "blog creado con react y css, usando node js y mongo del lado del servidor",
    img: blog,
    links: {
      github: "https://github.com/HeymerDev/Blog-React",
      web: "https://blog-react-heymerdev.netlify.app/",
    },
  },
  {
    id: 2,
    title: "Vive Us",
    content:
      "Landing page creada con Astro, Tailwind, Vite y Flowbite, con diseño responsivo",
    img: viveU,
    links: {
      github: "https://github.com/HeymerDev/vive-u",
      web: "https://vive-u.vercel.app/",
    },
  },
];
