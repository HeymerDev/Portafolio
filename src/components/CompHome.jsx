import image from "../assets/images/image-fondo.jpg";

const CompHome = () => {
  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row items-center h-screen text-sky-950 dark:text-white"
      >
        <div className="w-full md:w-1/2 h-screen">
          <img src={image} alt="" className="h-full w-full md:object-cover" />
        </div>
        <div className="w-full md:w-2/3 mx-auto md:ml-7 md:mr-10 mt-8 md:mt-0 pl-20">
          <h1 className="text-4xl md:text-7xl font-semibold pb-3 md:pb-7 ">
            Hola! Soy{" "}
            <span className="relative inline-block">
              <span className="font-black bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-sky-950">
                Heymer Meza.
              </span>
            </span>
          </h1>
          <h2 className="text-sm font-semibold md:text-4xl">
            Desarrollador Web Front-End
          </h2>
          <h2 className="text-sm font-semibold md:text-4xl">
            Ingeniero de Sistemas
          </h2>
          <p className="text-sm font-light md:text-2xl mt-6 w-2/3 mb-8">
            Me encanta el emocionante mundo de la tecnología y cómo puede
            transformar la forma en que interactuamos con el mundo digital.
          </p>
          <div className="mb-4">
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

export default CompHome;
