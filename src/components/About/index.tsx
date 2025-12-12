import { useEffect, useRef } from "react";

import TableGame from "@/assets/tableGame.png";
import Phones from "@/assets/phones.png";
import EntreComp from "@/assets/entreComp.png";
import { Users } from "lucide-react";

interface IAboutProps {
  setActiveScreen: (value: "about") => void;
}

const About = ({ setActiveScreen }: IAboutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("about");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col gap-y-12 w-full py-16 px-4"
      aria-label="Seção Sobre"
    >
      <article className="flex flex-col gap-y-8">
        <img className="w-full" src={TableGame} alt="Tabuleiro de xadrez" />

        <div className="flex flex-col gap-y-4">
          <p className="text-sm text-foreground/75 indent-4">
            A educação exige mais do que conteúdo: requer competências-chave
            como protagonismo, criatividade e tomada de decisão. A Abduka
            entrega isso aplicando metodologias ativas dentro de uma experiência
            envolvente que eleva o engajamento e gera evidências reais de
            aprendizagem.
          </p>
          <p className="text-sm text-foreground/75 indent-4">
            As escolas lutam contra um cenário crítico: estudantes desmotivados,
            evasão crescente e dificuldades para desenvolver competências
            essenciais ao século XXI. A teoria isolada já não basta. A Abduka
            responde a esse desafio transformando a aprendizagem em prática,
            colaboração e resolução de problemas reais.
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-y-8">
        <img className="w-full" src={Phones} alt="Tabuleiro de xadrez" />

        <div className="flex flex-col gap-y-4">
          <p className="text-sm text-foreground/75 indent-4">
            A Abduka une gamificação, metodologia ativa e análise de dados para
            promover uma aprendizagem profunda, motivadora e alinhada às
            competências empreendedoras do EntreComp. O modelo híbrido permite
            aplicar a solução em qualquer sala de aula, com qualquer área do
            conhecimento.
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-y-8">
        <img className="w-full" src={EntreComp} alt="Tabuleiro de xadrez" />
      </article>

      <article className="flex flex-col gap-y-8">
        <h2 className="text-base font-semibold text-primary">
          Ganhos do aluno
        </h2>

        <p className="text-sm text-foreground/75 indent-4">
          O diferencial da Abduka está no uso estruturado do Ciclo Abdutivo: um
          processo investigativo em que o estudante observa um problema, cria
          hipóteses, testa soluções e refina o raciocínio. Esse fluxo gera
          aprendizagem ativa, senso de protagonismo e consolidação de
          competências empreendedoras de forma natural e progressiva.
        </p>

        <div className="relative flex flex-col gap-y-4">
          <div className="absolute top-12 left-6 w-px h-[80%] border border-dashed border-foreground z-0"></div>

          <h3 className="text-sm font-medium">Como funciona</h3>

          <div className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">
              Palpite abdutivo: O estudante questiona o que sabe e propõe uma
              ideia inicial.
            </p>
          </div>

          <div className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">
              Hipótese explicativa: Refina a ideia e define que sinais deve
              observar.
            </p>
          </div>

          <div className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">
              Planejamento do experimento: Decide como testará sua hipótese.
            </p>
          </div>

          <div className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">
              Teste e coleta de evidências: Executa, registra e observa
              resultados.
            </p>
          </div>

          <div className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">
              Reflexão colaborativa: Analisa evidências, ajusta hipóteses e
              recomeça.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-y-4">
          <h3 className="text-sm font-medium">Resultado</h3>

          <p className="text-sm text-foreground/75 indent-4">
            Engajamento, criatividade, argumentação e competências
            empreendedoras emergem naturalmente, sem depender de aulas
            expositivas ou teoria desconectada da prática.
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-y-8">
        <h2 className="text-base font-semibold text-primary">
          Baseado em pesquisa, Validada em sala de aula
        </h2>

        <p className="text-sm text-foreground/75 indent-4">
          O diferencial da Abduka está no uso estruturado do Ciclo Abdutivo: um
          processo investigativo em que o estudante observa um problema, cria
          hipóteses, testa soluções e refina o raciocínio. Esse fluxo gera
          aprendizagem ativa, senso de protagonismo e consolidação de
          competências empreendedoras de forma natural e progressiva.
        </p>
      </article>
    </section>
  );
};

export default About;
