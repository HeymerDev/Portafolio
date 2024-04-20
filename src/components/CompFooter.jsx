import PropTypes from "prop-types";

import Icon from "../assets/icons/Icon";

const CompFooter = ({ redes }) => {
  return (
    <footer className="sm:footer sm:footer-center pb-7 bg-neutral text-white transition-all ease-in-out duration-700 flex items-center justify-evenly z-50">
      <aside>
        <Icon
          size={200}
          color="#ffffff"
          padding="-mb-20"
          className="w-[20px]"
        />
        <p className="font-bold text-lg sm:block hidden">
          HeymerDev.com <br />
          Programacion y Desarrollo de Software.
        </p>
        <p className="sm:block hidden">
          Copyright © 2024 - Todos los Derechos Reservados
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 mt-6 sm:mt-0">
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
