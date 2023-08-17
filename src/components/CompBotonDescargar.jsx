import cv from "../assets/resources/Curriculum CV Heymer Meza.pdf";

const CompBotonDescargar = () => {
  return (
    <>
      <a
        className="border border-sky-950 mt-20 mb-4 rounded p-2 font-semibold hover:bg-cyan-600 hover:text-white transition download-link"
        href={cv}
        download
      >
        Descargar CV
      </a>
    </>
  );
};

export default CompBotonDescargar;
