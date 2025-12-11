import { useEffect, useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

export type TActiveScreen = "home";

function App() {
  const [activeScreen, setActiveScreen] = useState<TActiveScreen>("home");
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    const html = document.body;

    const observer = new MutationObserver(() => {
      setIsDarkTheme(html.classList.contains("dark"));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-w-full overflow-x-hidden">
      <Navbar activeScreen={activeScreen} isDarkTheme={isDarkTheme} />

      <Home setActiveScreen={setActiveScreen} />
    </main>
  );
}

export default App;
