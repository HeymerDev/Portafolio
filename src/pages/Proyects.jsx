import PropTypes from "prop-types";
import Card from "../components/Card";

const Proyects = ({ items }) => {
  return (
    <section
      id="proyects"
      className="bg-base-200 flex flex-col items-center min-h-screen p-[85px] transition-all ease-in-out duration-700 gap-10"
    >
      <h2 className="font-semibold text-5xl md:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Proyectos
      </h2>
      <article className="grid place-items-center gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            content={item.content}
            image={item.img}
            github={item.links.github}
            web={item.links.web}
          />
        ))}
      </article>
    </section>
  );
};

Proyects.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Proyects;
