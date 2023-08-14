import blog from "../assets/images/images-proyects/blog.png";

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
      <section id="proyectos" className="py-16 text-cyan-950">
        <h2 className="text-6xl font-black text-center mb-10">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 place-items-center p-2 md:m-20">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                className="rounded-t-lg"
                src={proyecto.image}
                alt={proyecto.name}
              />
              <div className="p-5">
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {proyecto.name}
                </h4>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {proyecto.description}
                </p>

                <div className="pt-4 pb-2">
                  {proyecto.tecnologias.map((tecnologia, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2 hover:bg-cyan-700 cursor-pointer"
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>

                <a
                  href={proyecto.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ver Proyecto
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CompPortafolio;
