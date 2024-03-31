import CompNavbar from "../components/CompNavbar";
import AboutMe from "../pages/AboutMe";
import Inicio from "../pages/Inicio";

import { tecnologias } from "../utils/tecnologias";
import { proyects } from "../utils/proyects";
import Proyects from "../pages/Proyects";

const Home = () => {
  return (
    <>
      <CompNavbar />
      <Inicio />
      <AboutMe tecnologias={tecnologias} />
      <Proyects items={proyects} />

      {/* <CompNavbar />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>

        <Inicio />
      </div> */}
    </>
  );
};

export default Home;
