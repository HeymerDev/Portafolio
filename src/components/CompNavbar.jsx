import ButtonTheme from "./ButtonTheme";

const CompNavbar = () => {
  return (
    <>
      <nav className="fixed flex items-center justify-around p-3 backdrop-blur-xl transition-all ease-out duration-500 bg-transparent">
        <div className="logo">
          <h2 className="text-xl font-medium bg-gradient-to-r from-[#00d4c3] to-[#461eff] bg-clip-text text-transparent tracking-[0.1em]">
            HEYMERDEV
          </h2>
        </div>

        <ul className="sm:flex items-center gap-6 font-light text-lg hidden">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#proyects">Proyectos</a>
          </li>
        </ul>

        <div>
          <ButtonTheme />
        </div>
      </nav>
    </>
  );
};

export default CompNavbar;
