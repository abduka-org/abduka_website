import SpotlightCard from "../ui/spotlightCard";

import { partnersData } from "@/static/partnersData";

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
        {partnersData.map(({ id, label, icon: Icon }) => (
          <div key={id} className="flex flex-col items-center gap-y-2">
            <Icon className="w-12 h-12" strokeWidth={1} />

            <p className="text-xs font-bold text-center">{label}</p>
          </div>
        ))}
      </SpotlightCard>
    </section>
  );
};

export default Partners;
