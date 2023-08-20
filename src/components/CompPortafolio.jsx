import blog from "../assets/images/images-proyects/blog.png";
import CompCards from "./CompCards";

const proyectos = [
  {
    name: "Blog-React",
    image: blog,
    description:
      "Blog-React: es un blog SPA, en el puedes crear, borrar y editar articulos de tu interes.",
    link: "https://blog-react-heymerdev.netlify.app/",
    tecnologias: ["React", "CSS", "React-Router-Dom", "Sweet-Alert"],
  },
];

const CompPortafolio = () => {
  return (
    <>
      <section id="proyectos" className="py-16 text-cyan-950 dark:text-white">
        <h2 className="text-4xl md:text-8xl font-black text-center mb-10">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 place-items-center p-2 md:m-20">
          {proyectos.map((proyecto, i) => (
            <CompCards
              key={i}
              title={proyecto.name}
              description={proyecto.description}
              image={proyecto.image}
              link={proyecto.link}
              tecnologias={proyecto.tecnologias}
              uso={"Ver Mas"}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CompPortafolio;
