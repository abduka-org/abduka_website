import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";

interface ISwitchProps {
  isDarkTheme: boolean;
}

const Switch = ({ isDarkTheme }: ISwitchProps) => {
  const onToggle = useCallback(() => {
    document.body.classList.toggle("dark");
  }, []);

  return (
    <button
      className="relative inline-flex items-center w-14 rounded-full bg-primary p-1 transition-all"
      onClick={onToggle}
      aria-label="Mudar tema"
    >
      <span
        className={`flex h-full aspect-square items-center justify-center p-1 rounded-full bg-secondary transition-transform duration-300 ${
          isDarkTheme ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {isDarkTheme ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </span>
    </button>
  );
};

export default Switch;
