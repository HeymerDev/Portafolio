import CompBotonDescargar from "./CompBotonDescargar";

const redes = [
  {
    link: "mailto:heymermeza11@gmail.com",
    image: "https://www.svgrepo.com/show/349378/gmail.svg",
    name: "Gmail",
  },
  {
    link: "https://www.linkedin.com/in/heymer/",
    image: "https://www.svgrepo.com/show/448234/linkedin.svg",
    name: "LinkedIn",
  },
  {
    link: "https://github.com/HeymerDev",
    image: "https://www.svgrepo.com/show/512317/github-142.svg",
    name: "GitHub",
  },
  {
    link: "https://candidato.co.computrabajo.com/candidate/home?idapp=3&f=FEE939887FF3D46C",
    image: "https://cp.ct-stc.com/web/20230808.01/c/img/logos/favicon_ct.svg",
    name: "Computrabajo",
  },
  {
    link: "https://wa.me/+573042041975",
    image: "https://www.svgrepo.com/show/349563/whatsapp.svg",
    name: "WhatsApp",
  },
];

const CompContacto = () => {
  return (
    <>
      <section
        id="contacto"
        className="py-16 text-cyan-950 min-h-screen flex flex-col justify-center items-center dark:text-white"
      >
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-center mb-10">
          Contacto
        </h2>
        <div className="max-w-5xl mx-auto text-left px-6 sm:px-8 md:px-12 font-light">
          <p className="text-left mb-6 md:text-xl text-sm">
            ¡Gracias por tu interés en contactarme! Tu decisión de conectarte
            conmigo es muy apreciada. Si estás aquí, es porque compartimos una
            pasión por la tecnología y la innovación. Ya sea que tengas una idea
            emocionante para un proyecto, quieras discutir una colaboración o
            simplemente desees compartir tus pensamientos sobre el mundo del
            desarrollo y diseño, estaré encantado de escucharte y responder tus
            mensajes.
          </p>
          <p className="md:text-xl text-left mb-6 text-sm">
            Tengo la firme creencia de que las grandes ideas surgen de
            conversaciones significativas. Por eso, te invito a que te
            comuniques conmigo a través de los diferentes canales disponibles.
            Estoy disponible para hablar sobre cualquier aspecto relacionado con
            el desarrollo frontend, diseño de interfaces, tendencias
            tecnológicas o cualquier pregunta que puedas tener.
          </p>
          <p className="md:text-xl text-left text-sm">
            Los siguientes son algunos de los medios por los cuales puedes
            contactarme. Siéntete libre de elegir el que más te convenga:
          </p>
        </div>

        <div className="flex flex-col items-center flex-grow mt-10 w-full m-auto px-6  sm:px-8 md:pl-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-medium md:mx-auto mr-2">
            Puedes contactarme por:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-6 sm:mt-8 md:mt-10 w-full max-w-5xl mx-auto md:m-auto items-center">
            {redes.map((red, i) => (
              <a
                key={i}
                href={red.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600 hover:underline m-auto"
              >
                <img
                  src={red.image}
                  alt={red.name}
                  className="hover:scale-105 transition-all duration-300 w-28 h-28"
                />
              </a>
            ))}
          </div>
          <div className="mb-4 mt-10 sm:mt-16">
            <CompBotonDescargar />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompContacto;
