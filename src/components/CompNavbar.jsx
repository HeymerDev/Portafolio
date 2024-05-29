import PropTypes from "prop-types";

import ButtonTheme from "./ButtonTheme";

const CompNavbar = ({ links }) => {
  return (
    <>
      <nav className="fixed flex items-center justify-around p-3 backdrop-blur-xl transition-all ease-out duration-700 bg-transparent w-screen z-[99]">
        <div className="logo">
          <h2 className="text-xl font-medium bg-gradient-to-r from-[#00d4c3] to-[#461eff] bg-clip-text text-transparent tracking-[0.1em]">
            HEYMERDEV
          </h2>
        </div>

        <ul className="sm:flex items-center gap-6 font-light text-lg hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="hover:text-accent transition-all duration-300 ease-in-out hover:border-b-2 hover:border-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <ButtonTheme />
        </div>
      </nav>
    </>
  );
};

CompNavbar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default CompNavbar;
