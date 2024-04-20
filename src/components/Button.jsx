import IconDownload from "../assets/icons/IconDownload";

const Button = () => {
  return (
    <a
      className="btn btn-accent text-slate-200 w-[160px] font-extralight"
      download
      href="../assets/resources/Curriculum CV Heymer Meza.pdf"
    >
      <IconDownload className="-mx-3" />
      Descargar CV
    </a>
  );
};

export default Button;
