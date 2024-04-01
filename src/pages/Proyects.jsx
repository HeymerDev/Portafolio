import PropTypes from "prop-types";
import IconGitHub from "../assets/icons/IconGitHub";
import IconWeb from "../assets/icons/IconWeb";

const Proyects = ({ items }) => {
  return (
    <section
      id="proyects"
      className="bg-base-200 flex flex-col items-center min-h-screen p-[85px] transition-all ease-in-out duration-700 gap-10"
    >
      <h2 className="font-semibold text-5xl md:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Proyectos
      </h2>
      <article className="grid place-items-center gap-6 sm:grid-cols-4">
        {items.map((item) => (
          <div
            className="card w-96 bg-base-100 shadow-xl image-full hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
            key={item.id}
          >
            <figure>
              <img src={item.img} alt={item.title} />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p>{item.content}</p>
              <div className="card-actions justify-end">
                <a href={item.links.github} target="_blank" rel="noreferrer">
                  <IconGitHub />
                </a>
                <a href={item.links.web} target="_blank" rel="noreferrer">
                  <IconWeb />
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

Proyects.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Proyects;
