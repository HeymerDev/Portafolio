import blog from "../assets/images/images-proyects/blog.png";

const proyectos = [
  {
    name: "Blog-React",
    image: blog,
    description:
      "Blog-React: es un blog SPA, creado con la libreria React, utilizando react-router-dom, CSS y axios para peticiones http. <br/> Su backend esta construido con node.js y Express, en el puedes crear, borrar y editar articulos de tu interes.",
    link: "https://blog-react-heymerdev.netlify.app/",
  },
];

const CompPortafolio = () => {
  return (
    <>
      <section id="portafolio" className="py-16 text-cyan-950">
        <h2 className="text-6xl font-bold text-center mb-10">Proyectos:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="bg-sky-900 text-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition duration-300 ease-in-out m-6"
              style={{ maxWidth: "300px" }}
            >
              <img
                src={proyecto.image}
                alt={proyecto.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">{proyecto.name}</h4>
              <p
                className="text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: proyecto.description }}
              ></p>
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white mt-20 rounded p-2 font-bold  hover:bg-white hover:text-cyan-600 transition"
              >
                Ver Más...
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CompPortafolio;
