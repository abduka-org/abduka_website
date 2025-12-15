import { GraduationCap, School, Users } from "lucide-react";

import type { IPartnersData } from "@/common/interfaces/Partners.interfaces";

export const partnersData: IPartnersData[] = [
  {
    id: 1,
    label: "+100 escolas",
    icon: School,
  },
  {
    id: 2,
    label: "+20 faculdades",
    icon: GraduationCap,
  },
  {
    id: 3,
    label: "+1000 alunos",
    icon: Users,
  },
];
