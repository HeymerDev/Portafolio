import PropTypes from "prop-types";

const AboutMe = ({ tecnologias }) => {
  return (
    <section
      className="grid place-items-center bg-base-200 sm:px-[250px] min-h-max pt-[65px] transition-all ease-in-out duration-700"
      id="about"
    >
      <h2 className="font-semibold text-5xl md:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Sobre mi
      </h2>

      <article className="p-10 mx-auto">
        <p>
          Mi nombre es Heymer Jose Meza Gutierrez. Tengo 18 años de edad, Nacido
          En la Ciudad de barranquilla, Atlantico, Colombia. Soy un estudiante
          de ingenieria de Sistemas apasionado por la tecnologia y la inovacion.
          Mi pasion por esta misma comenzo a mis 13 años de edad desde que en la
          escuela practicaba programacion con Arduino y el leguaje C++, desde
          entonces he estado en constante aprendizaje y crecimiento en el mundo
          de la tecnologia incluso estudiando como carrera profesional
          Ingenieria de Sistemas. Hoy dia soy Desarrallodor Web Frontend
          Autodidacta, las tecnologias de las cuales poseo parctica y
          conocimiento son: HTML, CSS, JavaScript, React, Vue, Angular, Firebase
          TailwindCSS, Bootstrap. Ademas de tener amplios conocimientos en el
          FrontEnd, conozco bases de tcnologias BackEnd como NodeJS, Express,
          MongoDB. Me considero una persona proactiva, con facilidad para
          trabajar en equipo, con capacidad de aprendizaje y adaptacion a nuevos
          entornos y situaciones, con habilidades para la resolucion de
          problemas y toma de decisiones. Me gusta trabajar en proyectos que me
          permitan aprender y crecer profesionalmente, siempre dispuesto a
          aportar mis conocimientos y habilidades en pro de los objetivos de la
          empresa o equipo de trabajo.
        </p>

        <div className="md:grid-col-6 gap-5 mt-10 grid grid-cols-4 place-items-center">
          {tecnologias.map((tecnologia) => (
            <img
              key={tecnologia.id}
              src={tecnologia.img}
              alt={tecnologia.nombre}
              className={`grayscale hover:grayscale-0 w-20 h-20 transition-all duration-1000 ease-in-out cursor-pointer hover:scale-110 transform hover:rotate-12 hover:drop-shadow-2xl`}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

AboutMe.propTypes = {
  tecnologias: PropTypes.array.isRequired,
};

export default AboutMe;
