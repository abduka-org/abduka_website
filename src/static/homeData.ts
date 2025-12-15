import type { IHomeData } from "@/common/interfaces/Home.interfaces";
import Board from "@/assets/map.png";

export const homeData: IHomeData = {
  board: Board,
  title: ["Transforme sua sala de aula em um ", "laboratório de inovação"],
  description:
    "A Abduka é uma plataforma híbrida e gamificada que conecta jogo físico, tecnologia e aprendizagem ativa para desenvolver competências empreendedoras de forma prática, engajadora e mensurável.",
  buttons: [
    {
      id: 1,
      variant: "default",
      label: "Conheça como funciona",
      action: () => {},
    },
    {
      id: 2,
      variant: "outline",
      label: "Agende uma demonstração",
      action: () => {},
    },
  ],
};
