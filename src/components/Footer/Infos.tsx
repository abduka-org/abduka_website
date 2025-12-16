import { footerData } from "@/static/footerData";

const Infos = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {footerData.infos.map(({ id, icon: Icon, label }) => (
        <div key={id} className="flex flex-row items-start gap-x-2">
          <Icon className="w-4 h-4 shrink-0" aria-hidden />

          <p className="text-xs">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Infos;
