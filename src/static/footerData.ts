import { Clock, House, Mail, Smartphone } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import type { IFooterData } from "@/common/interfaces/Footer.interfaces";
import Logo from "@/assets/logo.png";

export const footerData: IFooterData = {
  header: {
    image: Logo,
    description:
      "A Abduka é uma plataforma híbrida e gamificada que conecta jogo físico, tecnologia e aprendizagem ativa para desenvolver competências empreendedoras de forma prática, engajadora e mensurável.",
  },
  infos: [
    {
      id: 1,
      icon: House,
      label: "Rua Joaquim de Almeida, 100, Centro, Curitiba - PR",
    },
    {
      id: 2,
      icon: Smartphone,
      label: "(41) 99999-9999",
    },
    {
      id: 3,
      icon: Mail,
      label: "email@example.com",
    },
    {
      id: 4,
      icon: Clock,
      label: "00:00 - 00:00 | Segunda a Sexta",
    },
  ],
  buttons: [
    {
      id: 1,
      icon: FaLinkedinIn,
      label: "Conheça nosso Linkedin",
      action: () => {},
    },
    {
      id: 2,
      icon: FaGithub,
      label: "Conheça nosso Github",
      action: () => {},
    },
    {
      id: 3,
      icon: FaInstagram,
      label: "Conheça nosso Instagram",
      action: () => {},
    },
  ],
  terms: [
    {
      id: 1,
      label: "Termos de uso",
      action: () => {},
    },
    {
      id: 2,
      label: "Política de privacidade",
      action: () => {},
    },
  ],
  copyright: "© 2023 Abduka. Todos os direitos reservados.",
};
