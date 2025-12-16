import { memo } from "react";
import { BadgeCheck } from "lucide-react";

import { Card, CardContent } from "../ui/card";

import type { TActiveScreen } from "@/App";
import { navbarData } from "@/static/navbarData";

interface IModalProps {
  activeScreen: TActiveScreen;
}

const Modal = ({ activeScreen }: IModalProps) => {
  return (
    <nav
      id="mobile-menu"
      className="absolute top-16 right-4 z-50"
      aria-label="Navegação mobile"
    >
      <Card>
        <CardContent>
          <ul className="flex flex-col">
            {navbarData.links.map(({ id, text, icon: Icon, action }) => (
              <li key={id} className="list-none">
                <button
                  className={`relative flex flex-row items-center gap-x-4 w-full rounded-md hover:text-primary transition-all duration-200 cursor-pointer px-6 py-4 pr-8 text-base text-nowrap
                    ${
                      activeScreen === id
                        ? "bg-primary/10 font-semibold text-primary"
                        : "font-medium text-primary-text"
                    }`}
                  onClick={action}
                  aria-current={activeScreen === id ? "page" : undefined}
                >
                  <Icon size={16} aria-hidden />

                  {text}

                  {activeScreen === id && (
                    <BadgeCheck
                      className="absolute right-4 w-4 h-4 stroke-primary rounded-full"
                      aria-hidden
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </nav>
  );
};

export default memo(Modal);
