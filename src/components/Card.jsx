import PropTypes from "prop-types";

import IconGitHub from "../assets/icons/IconGitHub";
import IconWeb from "../assets/icons/IconWeb";

const Card = ({ title, content, image, github, web }) => {
  const links = [github, web];

  return (
    <div className="card w-[320px] sm:w-96 bg-base-100 shadow-xl image-full hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{content}</p>
        <div className="card-actions justify-end">
          {links.map((link, index) => (
            <a key={index} href={link} target="_blank" rel="noreferrer">
              {index === 0 ? <IconGitHub /> : <IconWeb />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
};

export default Card;
