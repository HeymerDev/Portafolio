import { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import iconMenu from "../assets/icons/8666802_menu_navigation_icon.svg";

const CompNavbar = ({ logos }) => {
  const [showLogos, setShowLogos] = useState(false);

  const handleIconClick = () => {
    setShowLogos(!showLogos);
  };

  return (
    <nav
      className={`fixed top-0 left-0 p-4 text-sky-950 dark:text-white dark:bg-sky-950 ${
        showLogos === true && "bg-white"
      } lg:hidden`}
    >
      <img
        src={iconMenu}
        onClick={handleIconClick}
        alt="menu"
        className="cursor-pointer transition-transform transform hover:scale-110 dark:filter-custom"
      />

      {showLogos && (
        <ul className={`mt-4 ${showLogos ? "enter" : "leave"}`}>
          {logos.map((logo, i) => (
            <li
              key={i}
              className={`py-2 transform transition-transform duration-300 delay-${
                i + 1
              } hover:scale-105`}
            >
              <Link to={`/${logo.name}`}> {logo.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

CompNavbar.propTypes = { logos: PropTypes.array.isRequired };

export default CompNavbar;
