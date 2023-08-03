import CompSidebar from "./components/CompSidebar";
import contact from "./assets/icons/icon-contact.svg";
import profile from "./assets/icons/icon-profile.svg";
import home from "./assets/icons/icon-home.svg";
import portfolio from "./assets/icons/icon-portfolio.svg";
import tecnologis from "./assets/icons/icon-tecnologis.svg";
import certificaciones from "./assets/icons/icon-certificaciones.svg";
import CompHome from "./components/CompHome";

const logos = [
  {
    name: "Inicio",
    logo: home,
  },
  {
    name: "Sobre Mi",
    logo: profile,
  },
  {
    name: "Tecnologias",
    logo: tecnologis,
  },
  {
    name: "Portafolio",
    logo: portfolio,
  },
  {
    name: "Certificaciones",
    logo: certificaciones,
  },
  {
    name: "Contacto",
    logo: contact,
  },
];
function App() {
  return (
    <>
      <CompSidebar logos={logos} />
      <CompHome />
    </>
  );
}

export default App;
