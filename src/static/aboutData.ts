import type { IAboutData } from "@/common/interfaces/About.interfaces";
import TableGame from "@/assets/tableGame.png";
import Phones from "@/assets/phones.png";
import EntreComp from "@/assets/entreComp.png";

export const aboutData: IAboutData = {
  articles: [
    {
      id: 1,
      image: TableGame,
      text: [
        "A educação exige mais do que conteúdo: requer competências-chave como protagonismo, criatividade e tomada de decisão. A Abduka entrega isso aplicando metodologias ativas dentro de uma experiência envolvente que eleva o engajamento e gera evidências reais de aprendizagem.",
        "As escolas lutam contra um cenário crítico: estudantes desmotivados, evasão crescente e dificuldades para desenvolver competências essenciais ao século XXI. A teoria isolada já não basta. A Abduka responde a esse desafio transformando a aprendizagem em prática, colaboração e resolução de problemas reais.",
      ],
    },
    {
      id: 2,
      image: Phones,
      text: [
        "A Abduka une gamificação, metodologia ativa e análise de dados para promover uma aprendizagem profunda, motivadora e alinhada às competências empreendedoras do EntreComp. O modelo híbrido permite aplicar a solução em qualquer sala de aula, com qualquer área do conhecimento.",
      ],
    },
    {
      id: 3,
      image: EntreComp,
    },
  ],
  student: {
    title: "Ganhos do aluno",
    description:
      "O diferencial da Abduka está no uso estruturado do Ciclo Abdutivo: um processo investigativo em que o estudante observa um problema, cria hipóteses, testa soluções e refina o raciocínio. Esse fluxo gera aprendizagem ativa, senso de protagonismo e consolidação de competências empreendedoras de forma natural e progressiva.",
    subtitles: ["Como funciona", "Resultado"],
    topics: [
      {
        id: 1,
        text: "Palpite abdutivo: O estudante questiona o que sabe e propõe uma ideia inicial.",
      },
      {
        id: 2,
        text: "Hipótese explicativa: Refina a ideia e define que sinais deve observar.",
      },
      {
        id: 3,
        text: "Planejamento do experimento: Decide como testará sua hipótese.",
      },
      {
        id: 4,
        text: "Teste e coleta de evidências: Executa, registra e observa resultados.",
      },
      {
        id: 5,
        text: "Reflexão colaborativa: Analisa evidências, ajusta hipóteses e recomeça.",
      },
    ],
    results:
      "Engajamento, criatividade, argumentação e competências empreendedoras emergem naturalmente, sem depender de aulas expositivas ou teoria desconectada da prática.",
  },
  research: {
    title: "Baseado em pesquisa, Validada em sala de aula",
    description:
      "O diferencial da Abduka está no uso estruturado do Ciclo Abdutivo: um processo investigativo em que o estudante observa um problema, cria hipóteses, testa soluções e refina o raciocínio. Esse fluxo gera aprendizagem ativa, senso de protagonismo e consolidação de competências empreendedoras de forma natural e progressiva.",
  },
};
