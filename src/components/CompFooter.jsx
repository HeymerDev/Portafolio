import PropTypes from "prop-types";

import Icon from "../assets/icons/Icon";

const CompFooter = ({ redes }) => {
  return (
    <footer className="footer footer-center pb-7 bg-neutral text-white transition-all ease-in-out duration-700">
      <aside>
        <Icon size={200} color="#ffffff" padding="-mb-20" />
        <p className="font-bold text-lg">
          HeymerDev.com <br />
          Programacion y Desarrollo de Software.
        </p>
        <p>Copyright © 2024 - Todos los Derechos Reservados</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {redes.map((red) => (
            <a
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {red.icon}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

CompFooter.propTypes = {
  redes: PropTypes.array.isRequired,
};

export default CompFooter;
