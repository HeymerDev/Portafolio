import programacionBasica from "../assets/images/images-certificados/image-programacion.jpg";
import gitAndGithub from "../assets/images/images-certificados/certificado-git-github.png";
import CompCards from "./CompCards";

const certificados = [
  {
    name: "Aprende JavaScript de CERO a EXPERTO",
    link: "https://www.udemy.com/certificate/UC-f271b4e9-9e51-4b97-b8ca-8721817d9e13/",
    id: "UC-f271b4e9-9e51-4b97-b8ca-8721817d9e13",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f271b4e9-9e51-4b97-b8ca-8721817d9e13.jpg?v=1689111057000",
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
  {
    name: " Master en Frameworks JavaScript: Aprende Angular, React, Vue",
    link: "https://www.udemy.com/certificate/UC-8d4fc1ae-a435-4a89-a2a8-94dc61af7a7d/",
    id: "UC-8d4fc1ae-a435-4a89-a2a8-94dc61af7a7d",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-8d4fc1ae-a435-4a89-a2a8-94dc61af7a7d.jpg?v=1692253620000",
  },
];

const CompCertificaciones = () => {
  return (
    <>
      <section id="certificados" className="py-16 text-cyan-950">
        <h2 className="text-4xl md:text-8xl font-black text-center mb-10">
          Certificados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 place-items-center p-2 md:m-20">
          {certificados.map((certificado, i) => (
            <CompCards
              key={i}
              title={certificado.name}
              description={certificado.id}
              image={certificado.image}
              link={certificado.link}
              uso={"Ver Credencial"}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CompCertificaciones;
