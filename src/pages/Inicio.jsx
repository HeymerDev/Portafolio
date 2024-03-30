import imageInicio from "../assets/images/image-fondo.jpg";

const Inicio = () => {
  return (
    <section className="hero min-h-screen bg-base-200 transition-all ease-in-out duration-700">
      <div className="hero-content flex-col lg:flex-row px-12">
        <img src={imageInicio} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="md:text-7xl font-normal text-5xl">
            Hola! Soy{" "}
            <span className="md:font-extrabold font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Heymer Meza
            </span>
          </h1>
          <p className="py-4 md:text-3xl text-2xl">
            Desarrollador Web Frontend y Futuro Ingeniero de Sistemas.
          </p>
          <p className="pb-4 md:text-xl text-base">
            Bienvenidos a mi Portafolio en Linea. Los invito a conocerme y Saber
            todas las tecnoogias que actualemente manejo, Ademas de los
            proyectos que he realizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;