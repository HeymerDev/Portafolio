import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "hamburgers/dist/hamburgers.min.css";

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
      <div
        className={`hamburger hamburger--squeeze ${
          showLogos === true && "is-active"
        }`}
        onClick={handleIconClick}
      >
        <div className="hamburger-box">
          <span className="hamburger-inner"></span>
        </div>
      </div>

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
