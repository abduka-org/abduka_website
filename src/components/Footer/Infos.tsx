import { Clock, Home, Mail, Smartphone } from "lucide-react";

const Infos = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row items-start gap-x-2">
        <Home className="w-4 h-4 shrink-0" />
        <p className="text-xs">
          Endereço da empresa, 10, Santa Maria, RS, Brasil.
        </p>
      </div>

      <div className="flex flex-row items-start gap-x-2">
        <Smartphone className="w-4 h-4 shrink-0" />
        <p className="text-xs">(55) 99999-9999</p>
      </div>

      <div className="flex flex-row items-start gap-x-2">
        <Mail className="w-4 h-4 shrink-0" />
        <p className="text-xs">email@example.com</p>
      </div>

      <div className="flex flex-row items-start gap-x-2">
        <Clock className="w-4 h-4 shrink-0" />
        <p className="text-xs">00:00 - 00:00 | Segunda a Sexta</p>
      </div>
    </div>
  );
};

export default Infos;
