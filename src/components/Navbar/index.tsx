import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import Switch from "./Switch";

import type { TActiveScreen } from "@/App";
import Logo from "@/assets/logo.png";
import Modal from "./Modal";

interface INavbarProps {
  activeScreen: TActiveScreen;
  isDarkTheme: boolean;
}

const Navbar = ({ activeScreen, isDarkTheme }: INavbarProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-99"
      aria-label="Navegação"
    >
      <button
        className="cursor-pointer"
        onClick={() =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Voltar para o início"
      >
        <img src={Logo} alt="Logo Abduka" loading="lazy" />
      </button>

      <div className="flex flex-row items-center gap-4">
        <Switch isDarkTheme={isDarkTheme} />

        <Button size={"icon-sm"} onClick={() => setShowModal(!showModal)}>
          {showModal ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {showModal && <Modal activeScreen={activeScreen} />}
    </nav>
  );
};

export default Navbar;
