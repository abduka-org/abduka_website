import { memo, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import Switch from "./Switch";
import Modal from "./Modal";

import type { TActiveScreen } from "@/App";
import { navbarData } from "@/static/navbarData";

interface INavbarProps {
  activeScreen: TActiveScreen;
}

const Navbar = ({ activeScreen }: INavbarProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-4 z-99"
      aria-label="Navegação"
    >
      <button
        className="cursor-pointer"
        onClick={navbarData.logo.action}
        aria-label="Voltar para o início"
      >
        <img src={navbarData.logo.src} alt="Logo Abduka" loading="lazy" />
      </button>

      <div className="flex flex-row items-center gap-4">
        <Switch />

        <Button
          size={"icon-sm"}
          onClick={() => setShowModal(!showModal)}
          aria-label={showModal ? "Fechar menu" : "Abrir menu"}
          aria-expanded={showModal}
          aria-controls="mobile-menu"
        >
          {showModal ? (
            <X className="w-4 h-4" aria-hidden />
          ) : (
            <Menu className="w-4 h-4" aria-hidden />
          )}
        </Button>
      </div>

      {showModal && <Modal activeScreen={activeScreen} />}
    </nav>
  );
};

export default memo(Navbar);
