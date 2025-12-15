import { Book, Home, Moon, Sun, Users } from "lucide-react";

import type { INavbarData } from "@/common/interfaces/Navbar.interfaces";
import Logo from "@/assets/logo.png";

export const navbarData: INavbarData = {
  logo: {
    src: Logo,
    action: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  links: [
    {
      id: "home",
      text: "Home",
      icon: Home,
      action: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "about",
      text: "Sobre",
      icon: Book,
      action: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "clients",
      text: "Clientes",
      icon: Users,
      action: () =>
        document
          .getElementById("clients")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ],
  theme: {
    light: {
      id: "light",
      icon: Sun,
    },
    dark: {
      id: "dark",
      icon: Moon,
    },
  },
};
