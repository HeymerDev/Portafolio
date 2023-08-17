const tecnologias = [
  {
    name: "HTML",
    image: "https://www.svgrepo.com/show/303205/html-5-logo.svg",
  },
  {
    name: "CSS",
    image: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    name: "JavaScript",
    image: "https://www.svgrepo.com/show/353925/javascript.svg",
  },
  {
    name: "React",
    image:
      "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
  },
  {
    name: "Angular",
    image: "https://www.svgrepo.com/show/452156/angular.svg",
  },
  {
    name: "Git",
    image: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "GitHub",
    image: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
];

const CompAboutMe = () => {
  return (
    <>
      <section
        id="about-me"
        className="flex flex-col items-center justify-center text-sky-950 px-4 py-8 md:px-8 lg:px-16 dark:text-white"
      >
        <h2 className="text-4xl md:text-8xl font-black mb-4 text-center">
          Sobre Mí
        </h2>

        <div
          id="description"
          className="w-full md:w-2/3 lg:w-1/2 p-4 md:p-6 mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            ¡Hola, soy <strong>Heymer Meza!</strong>
          </h3>

          <p className="text-sm md:text-xl mb-6 font-ligth">
            Soy un apasionado desarrollador frontend de 17 años, con un firme
            deseo de dar vida a las ideas a través de códigos y diseños
            cautivadores. Mi viaje en el mundo del desarrollo comenzó como un
            simple destello de curiosidad, que rápidamente se transformó en una
            pasión inquebrantable por construir experiencias digitales
            excepcionales. <br />
            Mi enfoque se centra en tejer una perfecta sinfonía entre el diseño
            y el código. Mi objetivo es crear interfaces de usuario que no solo
            sean visualmente impactantes, sino que también ofrezcan un
            rendimiento excepcional. Mi obsesión por los detalles me impulsa a
            explorar constantemente nuevas formas de mejorar la usabilidad y la
            interacción, con la ambición de crear experiencias que dejen una
            impresión duradera en la mente de los usuarios. He perfeccionado mis
            habilidades en una gama de tecnologías y lenguajes, incluyendo HTML,
            CSS y JavaScript. Mi arsenal de herramientas se enriquece con
            frameworks como React y Angular, que utilizo para desarrollar
            aplicaciones web modernas y escalables.
            <br />
            La colaboración es una parte esencial de mi proceso, y estoy cómodo
            trabajando en equipo con diseñadores y otros desarrolladores para
            transformar conceptos en realidad. Mi compromiso con el aprendizaje
            continuo y la adaptación me permite mantenerme al tanto de las
            últimas tendencias y mejores prácticas en el campo del desarrollo
            frontend.
            <br />
            Siempre busco oportunidades para enfrentar nuevos desafíos y
            explorar terrenos desconocidos. Mi pasión y dedicación se reflejan
            en mi portafolio, donde puedes ver ejemplos concretos de mi trabajo
            con tecnologías como HTML, CSS, JavaScript, React y Angular. Cada
            proyecto es una oportunidad para superar límites y perfeccionar mi
            oficio, y estoy emocionado de seguir evolucionando en este
            emocionante viaje de desarrollo frontend.
          </p>
        </div>

        <div id="tecnologias" className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-center">
            Mis Tecnologías:
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {tecnologias.map((tecs, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={tecs.image}
                  alt={tecs.name}
                  className="w-20 h-20 md:w-24 md:h-24"
                />
                <h2 className="text-md md:text-lg font-semibold mt-2">
                  {tecs.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompAboutMe;
