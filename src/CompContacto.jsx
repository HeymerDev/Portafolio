const CompContacto = () => {
  return (
    <>
      <section
        id="contacto"
        className="py-16 text-cyan-950 h-screen flex flex-col justify-center"
      >
        <h2 className="text-6xl font-black text-center mb-10">Contacto</h2>
        <div className="max-w-5xl mx-auto">
          <p className="text-left mb-6 text-xl">
            ¡Gracias por tu interés en contactarme! Tu decisión de conectarte
            conmigo es muy apreciada. Si estás aquí, es porque compartimos una
            pasión por la tecnología y la innovación. Ya sea que tengas una idea
            emocionante para un proyecto, quieras discutir una colaboración o
            simplemente desees compartir tus pensamientos sobre el mundo del
            desarrollo y diseño, estaré encantado de escucharte y responder tus
            mensajes.
          </p>
          <p className="text-xl text-left mb-6">
            Tengo la firme creencia de que las grandes ideas surgen de
            conversaciones significativas. Por eso, te invito a que te
            comuniques conmigo a través de los diferentes canales disponibles.
            Estoy disponible para hablar sobre cualquier aspecto relacionado con
            el desarrollo frontend, diseño de interfaces, tendencias
            tecnológicas o cualquier pregunta que puedas tener.
          </p>
          <p className="text-xl text-left -mb-20">
            Los siguientes son algunos de los medios por los cuales puedes
            contactarme. Siéntete libre de elegir el que más te convenga:
          </p>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow -mt-20">
          <h3 className="text-4xl text-center mb-4 font-medium ">
            Puedes contactarme vía email, redes sociales o WhatsApp:
          </h3>

          <div className="flex gap-8 mt-9">
            {" "}
            {/* Aumenta el espacio entre enlaces */}
            <a
              href="mailto:heymermeza11@gmail.com"
              className="text-2xl text-blue-600 hover:underline flex items-center"
            >
              <img
                src="https://www.svgrepo.com/show/349378/gmail.svg"
                alt="Gmail"
                className="w-10 h-10 mr-3" // Aumenta el tamaño de la imagen
              />
              Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/heymer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline flex items-center"
            >
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10 mr-3" // Aumenta el tamaño de la imagen
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/HeymerDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline flex items-center"
            >
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub"
                className="w-10 h-10 mr-3" // Aumenta el tamaño de la imagen
              />
              GitHub
            </a>
            <a
              href="https://candidato.co.computrabajo.com/candidate/home?idapp=3&f=FEE939887FF3D46C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline flex items-center"
            >
              <img
                src="https://cp.ct-stc.com/web/20230808.01/c/img/logos/favicon_ct.svg"
                alt="computrabajo"
                className="w-10 h-10 mr-3" // Aumenta el tamaño de la imagen
              />
              Computrabajo
            </a>
            <a
              href="https://wa.me/+573042041975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline flex items-center"
            >
              <img
                src="https://www.svgrepo.com/show/349563/whatsapp.svg"
                alt="WhatsApp"
                className="w-10 h-10 mr-3" // Aumenta el tamaño de la imagen
              />
              WhatsApp
            </a>
          </div>
          <div className="mb-4 mt-20 ">
            <a
              className="border border-sky-950 mt-20 mb-4 rounded p-2 font-bold hover:bg-cyan-600 hover:text-white transition download-link"
              href=""
              download
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompContacto;
