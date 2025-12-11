import { Book, Home, Users, type LucideIcon } from "lucide-react";

interface INavbarLink {
  id: string;
  text: string;
  icon: LucideIcon;
  action: () => void;
}

interface INavbarData {
  links: INavbarLink[];
}

export const navbarData: INavbarData = {
  links: [
    {
      id: "home",
      text: "Home",
      icon: Home,
      action: () => {},
    },
    {
      id: "about",
      text: "Sobre",
      icon: Book,
      action: () => {},
    },
    {
      id: "clients",
      text: "Clientes",
      icon: Users,
      action: () => {},
    },
  ],
};
