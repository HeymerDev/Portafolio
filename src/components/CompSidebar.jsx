import PropTypes from "prop-types";

const CompSidebar = ({ logos }) => {
  return (
    <>
      <nav className="bg-sky-950 p-2 absolute top-1/2 right-20 transform -translate-y-1/2 flex flex-col justify-center items-center rounded-full">
        <ul className="flex flex-col space-y-2 mb-5 mt-5">
          {logos.map((item, index) => {
            return (
              <li
                className="w-10 hover:-translate-y-1 hover:scale-110 transition"
                key={index}
              >
                <div className="relative group">
                  <span
                    className={`opacity-0 absolute top-0 bg-sky-950 text-white px-2 py-1 rounded-md transition-opacity group-hover:opacity-100 mt-2 mr-2 right-full ${
                      item.name === "Sobre Mi" && "whitespace-nowrap"
                    }`}
                  >
                    {item.name}
                  </span>
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      filter:
                        "brightness(0) invert(1) sepia(1) hue-rotate(260deg)",
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

CompSidebar.propTypes = { logos: PropTypes.array.isRequired };

export default CompSidebar;
