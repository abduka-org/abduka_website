import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface IFooterHeader {
  image: string;
  description: string;
}

interface IFooterInfos {
  id: number;
  icon: LucideIcon;
  label: string;
}

interface IFooterButtons {
  id: number;
  icon: IconType;
  label: string;
  action: () => void;
}

interface IFooterTerms {
  id: number;
  label: string;
  action: () => void;
}

export interface IFooterData {
  header: IFooterHeader;
  infos: IFooterInfos[];
  buttons: IFooterButtons[];
  terms: IFooterTerms[];
  copyright: string;
}
