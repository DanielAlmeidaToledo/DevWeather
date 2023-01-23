const Footer = () => {
  return (
    <div className="absolute flex w-full justify-center bottom-1 xl:w-auto xl:justify-start xl:right-2">
      Desenvolvido por{" "}
      <a
        href="https://www.linkedin.com/in/danielalmeidadetoledo/"
        target={"_blank"}
        className="pl-1 font-bold italic hover:underline"
      >
        Daniel Toledo
      </a>
    </div>
  );
};

export default Footer;
