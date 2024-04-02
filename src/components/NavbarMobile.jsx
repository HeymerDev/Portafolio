import PropTypes from "prop-types";

const NavbarMobile = ({ links }) => {
  return (
    <nav className="sm:hidden w-screen bg-base-200 fixed bottom-0 flex justify-center">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} className="tooltip" data-tip={link.name}>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavbarMobile.propTypes = {
  links: PropTypes.array.isRequired,
};

export default NavbarMobile;
