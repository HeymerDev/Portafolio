import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "hamburgers/dist/hamburgers.min.css";
import "../stylesheets/CompNavbar.css";

const CompNavbar = ({ logos }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <nav
      className={`fixed top-0 left-0 p-4 z-50 text-sky-950 dark:text-white dark:bg-sky-950 sm:hidden`}
    >
      {/* Hamburger Button */}
      <button
        className={`hamburger hamburger--collapse ${
          showMenu ? "is-active" : ""
        }`}
        type="button"
        onClick={handleShowMenu}
      >
        <span className="hamburger-box ">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {/* Aside Panel */}

      <aside
        className={`aside-panel w-3/5 ${
          showMenu ? "panel-active" : "panel-not-active"
        } max-w-lg`}
      >
        <div className="aside-panel-inner bg-white border border-gray-200 text-gray-900 text-sm ">
          <section
            aria-current="true"
            className="aside-panel-title px-4 py-2 border-b border-gray-200 bg-blue-700 "
          >
            {/* En esta seccion puedes agregar un titulo al menú */}
          </section>
          <section className="aside-panel-text">
            {logos.map((logo, i) => (
              <Link
                key={i}
                className={`block break-all font-medium text-base px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer delay-${
                  i + 1
                }`}
                to={`/${logo.name}`}
              >
                {" "}
                {logo.name}
              </Link>
            ))}
          </section>
        </div>
      </aside>
    </nav>
  );
};

CompNavbar.propTypes = { logos: PropTypes.array.isRequired };

export default CompNavbar;
