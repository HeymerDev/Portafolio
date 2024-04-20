import CompNavbar from "../components/CompNavbar";
import AboutMe from "../pages/AboutMe";
import Inicio from "../pages/Inicio";
import Proyects from "../pages/Proyects";
import CompFooter from "../components/CompFooter";
import NavbarMobile from "../components/NavbarMobile";

import { tecnologias } from "../utils/tecnologias";
import { itemsProyects } from "../utils/proyects";
import { redes } from "../utils/redes";
import { navigationLinks } from "../utils/navigationLinks";

const Home = () => {
  return (
    <>
      <CompNavbar links={navigationLinks} />
      <NavbarMobile links={navigationLinks} />
      <Inicio />
      <AboutMe tecnologias={tecnologias} />
      <Proyects items={itemsProyects} />
      <CompFooter redes={redes} />
    </>
  );
};

export default Home;
