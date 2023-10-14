import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "hamburgers/dist/hamburgers.min.css";
import "../stylesheets/CompNavbar.css";

import logo from "../../src/assets/images/1.svg";

const CompSidebar = ({ logos }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <nav>
        {/*menu desktop*/}
        <div className="bg-sky-950 p-2 fixed top-1/2 right-20 transform -translate-y-1/2 hidden xl:flex flex-col justify-center items-center rounded-full">
          <ul className="flex flex-col space-y-2 mb-5 mt-5">
            {logos.map((item, index) => {
              return (
                <li
                  className="w-10 hover:-translate-y-1 hover:scale-110 transition"
                  key={index}
                >
                  <NavLink to={`/${item.name}`}>
                    <div className="relative group">
                      <span
                        className={`opacity-0 absolute top-0 bg-sky-950 text-white px-2 py-1 rounded-md transition-opacity group-hover:opacity-100 mt-2 mr-2 right-full ${
                          item.name === "Sobre Mi" && "whitespace-nowrap"
                        }`}
                      >
                        {item.name}
                      </span>
                      <img
                        className="mb-2 mt-2"
                        src={item.logo}
                        alt={item.name}
                        style={{
                          filter:
                            "brightness(0) invert(1) sepia(1) hue-rotate(260deg)",
                        }}
                      />
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/*menu mobil y tablet*/}
        <div
          className={`fixed top-0 left-0 p-4 z-50 text-sky-950 dark:text-white dark:color-white xl:hidden h-screen`}
        >
          <button
            className={`hamburger hamburger--collapse ${
              showMenu ? "is-active" : ""
            } focus:border-none active:outline-none custom-no-outline mt-3`}
            type="button"
            onClick={handleShowMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <aside
            className={`aside-panel w-2/5 ${
              showMenu ? "panel-active" : "panel-not-active"
            } max-w-lg`}
          >
            <div className="aside-panel-inner bg-white text-gray-900 text-sm dark:bg-neutral-900">
              <section
                aria-current="true"
                className="flex aside-panel-title px-4 py-2 border-b border-gray-200 justify-center items-center"
              >
                <img src={logo} alt="logo" className="w-20 lg:ml-4 mt-5" />
              </section>
              <section className="aside-panel-text">
                {logos.map((logo, i) => (
                  <Link
                    key={i}
                    className={`block break-all font-medium text-base px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:text-sky-700 cursor-pointer delay-${
                      i + 1
                    }`}
                    to={`/${logo.name}`}
                  >
                    {logo.name}
                  </Link>
                ))}
              </section>
            </div>
          </aside>
        </div>
      </nav>
    </>
  );
};

CompSidebar.propTypes = { logos: PropTypes.array.isRequired };

export default CompSidebar;
