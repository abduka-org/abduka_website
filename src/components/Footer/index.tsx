import Header from "./Header";
import Infos from "./Infos";
import Buttons from "./Buttons";
import Terms from "./Terms";

import { footerData } from "@/static/footerData";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 place-items-start gap-y-8 py-8 px-4 w-full bg-foreground/5 rounded-t-2xl">
      <Header />

      <Infos />

      <div className="w-full h-px bg-foreground/5"></div>

      <div className="flex flex-col gap-y-4">
        <Buttons />

        <Terms />

        <p className="text-sm">{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
