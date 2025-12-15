import { useTheme } from "@/hooks/useTheme";
import { navbarData } from "@/static/navbarData";

const Switch = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const themeConfig = isDarkTheme
    ? navbarData.theme.dark
    : navbarData.theme.light;

  const Icon = themeConfig.icon;

  return (
    <button
      className="relative inline-flex items-center w-14 rounded-full bg-primary p-1 transition-all"
      onClick={toggleTheme}
      aria-label="Mudar tema"
    >
      <span
        className={`flex h-full aspect-square items-center justify-center p-1 rounded-full bg-secondary transition-transform duration-300 ${
          isDarkTheme ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <Icon className="w-4 h-4" />
      </span>
    </button>
  );
};

export default Switch;
