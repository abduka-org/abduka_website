import { GraduationCap, School, Users } from "lucide-react";

import SpotlightCard from "../ui/spotlightCard";

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full px-4"
      aria-label="Seção de parceiros"
    >
      <SpotlightCard
        className="grid grid-cols-3 gap-x-7 w-full px-4"
        spotlightColor="rgba(230, 170, 11, 0.25)"
      >
        <div className="flex flex-col items-center gap-y-2">
          <School className="w-12 h-12" strokeWidth={1} />

          <p className="text-xs font-bold">+100 escolas</p>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <GraduationCap className="w-12 h-12" strokeWidth={1} />

          <p className="text-xs font-bold">+20 faculdades</p>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <Users className="w-12 h-12" strokeWidth={1} />

          <p className="text-xs font-bold">+1000 alunos</p>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Partners;
