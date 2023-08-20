import CompSidebar from "./components/CompSidebar";
import contact from "./assets/icons/icon-contact.svg";
import profile from "./assets/icons/icon-profile.svg";
import home from "./assets/icons/icon-home.svg";
import portfolio from "./assets/icons/icon-portfolio.svg";
import certificaciones from "./assets/icons/icon-certificaciones.svg";

import CompHome from "./components/CompHome";
import CompAboutMe from "./components/CompAboutMe";
import CompPortafolio from "./components/CompPortafolio";
import CompContacto from "./components/CompContacto";
import CompCertificaciones from "./components/CompCertificaciones";
import CompNavbar from "./components/CompNavbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const routes = [
  {
    path: "/",
    element: <CompHome />,
  },
  {
    path: "/Inicio",
    element: <CompHome />,
  },
  {
    path: "/Sobre Mi",
    element: <CompAboutMe />,
  },
  {
    path: "/Portafolio",
    element: <CompPortafolio />,
  },
  {
    path: "/Certificaciones",
    element: <CompCertificaciones />,
  },
  {
    path: "/Contacto",
    element: <CompContacto />,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <CompNavbar logos={logos} />
        <CompSidebar logos={logos} />
        <Routes>
          {/* The code block 
          `{routes.map((screen) => (
              <Route
                key={screen.path}
                path={screen.path}
                element={screen.element}
              />
            ))}` 
          is mapping over the `routes` array and creating a `<Route>` component for
          each object in the array. */}
          {routes.map((screen) => (
            <Route
              key={screen.path}
              path={screen.path}
              element={screen.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
