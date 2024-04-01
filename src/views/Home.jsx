import CompNavbar from "../components/CompNavbar";
import AboutMe from "../pages/AboutMe";
import Inicio from "../pages/Inicio";

import { tecnologias } from "../utils/tecnologias";
import { itemsProyects } from "../utils/proyects";
import Proyects from "../pages/Proyects";
import CompFooter from "../components/CompFooter";
import { redes } from "../utils/redes";

const Home = () => {
  return (
    <>
      <CompNavbar />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#00d2c4_1px,transparent_1px),linear-gradient(to_bottom,#00d2c4_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Inicio />
        <AboutMe tecnologias={tecnologias} />
        <Proyects items={itemsProyects} />
        <div className="sm:absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_100%_100px,#00d2c4,transparent)]"></div>
        <CompFooter redes={redes} />
      </div>
    </>
  );
};

export default Home;
