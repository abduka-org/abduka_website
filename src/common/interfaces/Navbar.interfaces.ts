import type { LucideIcon } from "lucide-react";

interface INavbarLogo {
  src: string;
  action: () => void;
}

interface INavbarLink {
  id: string;
  text: string;
  icon: LucideIcon;
  action: () => void;
}

interface ITheme {
  id: string;
  icon: LucideIcon;
}

interface INavbarTheme {
  light: ITheme;
  dark: ITheme;
}

export interface INavbarData {
  logo: INavbarLogo;
  links: INavbarLink[];
  theme: INavbarTheme;
}
