import IconDownload from "../assets/icons/IconDownload";

const Button = () => {
  return (
    <a
      className="btn btn-accent text-slate-200 w-[160px] font-extralight"
      download
      href="https://drive.google.com/file/d/106TB7SIV30hCuDirSUrC7igSVH8qLlMJ/view?usp=drive_link"
    >
      <IconDownload className="-mx-3" />
      Descargar CV
    </a>
  );
};

export default Button;
