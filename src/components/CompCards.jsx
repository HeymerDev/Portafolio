import PropTypes from "prop-types";

import CompBotonLink from "./CompBotonLink";

const CompCards = ({ title, description, image, tecnologias, link, uso }) => {
  return (
    <>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300 ease-in-out m-5">
        <img className="rounded-t-lg" src={image} alt={title} />
        <div className="p-5">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h4>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          {tecnologias && (
            <div className="pt-4 pb-2">
              {tecnologias.map((tecnologia, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2 hover:bg-cyan-700 cursor-pointer"
                >
                  {tecnologia}
                </span>
              ))}
            </div>
          )}

          <CompBotonLink link={link} title={uso} />
        </div>
      </div>
    </>
  );
};

CompCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tecnologias: PropTypes.array,
  link: PropTypes.string.isRequired,
  uso: PropTypes.string.isRequired,
};

export default CompCards;
