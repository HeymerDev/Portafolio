import javaScript from "../assets/images/images-certificados/certificado-javascript.jpg";
import programacionBasica from "../assets/images/images-certificados/image-programacion.jpg";
import gitAndGithub from "../assets/images/images-certificados/certificado-git-github.png";

const certificados = [
  {
    name: "Aprende JavaScript de CERO a EXPERTO",
    link: "https://www.udemy.com/certificate/UC-f271b4e9-9e51-4b97-b8ca-8721817d9e13/",
    id: "UC-f271b4e9-9e51-4b97-b8ca-8721817d9e13",
    image: javaScript,
  },
  {
    name: "Curso Gratis de Programación Básica",
    link: "https://platzi.com/p/heymer11/curso/3208-programacion-basica/diploma/detalle/",
    id: "40169e71-8ba0-4b66-88d5-e4901bfd2bf8",
    image: programacionBasica,
  },
  {
    name: "Curso Profesional de Git y GitHub",
    link: "https://platzi.com/p/heymer11/curso/2405-git-github-appsco/diploma/detalle/",
    id: "9f87c932-20e2-4716-9d4e-9fca4fd06d55",
    image: gitAndGithub,
  },
];

const CompCertificaciones = () => {
  return (
    <>
      <section id="certificados" className="py-16 text-cyan-950">
        <h2 className="text-6xl font-black text-center mb-10">Certificados</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 place-items-center p-2 md:m-20">
          {certificados.map((certificado, i) => (
            <div
              key={i}
              className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                className="rounded-t-lg"
                src={certificado.image}
                alt={certificado.name}
              />
              <div className="p-5">
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {certificado.name}
                </h4>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {certificado.id}
                </p>

                <a
                  href={certificado.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ver Credencial
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CompCertificaciones;
