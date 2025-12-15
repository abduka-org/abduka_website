interface IHomeButton {
  id: number;
  variant:
    | "link"
    | "default"
    | "outline"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  label: string;
  action: () => void;
}

export interface IHomeData {
  board: string;
  title: string[];
  description: string;
  buttons: IHomeButton[];
}
