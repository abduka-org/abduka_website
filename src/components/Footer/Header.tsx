import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <img className="w-24" src={Logo} alt="Logo Abduka" />

      <p className="text-sm text-foreground/75">
        A Abduka é uma plataforma híbrida e gamificada que conecta jogo físico,
        tecnologia e aprendizagem ativa para desenvolver competências
        empreendedoras de forma prática, engajadora e mensurável.
      </p>
    </div>
  );
};

export default Header;
