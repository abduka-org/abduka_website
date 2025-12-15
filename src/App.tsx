import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import About from "./components/About";
import Clients from "./components/Clients";

export type TActiveScreen = "home" | "about" | "clients";

function App() {
  const [activeScreen, setActiveScreen] = useState<TActiveScreen>("home");

  return (
    <main className="flex flex-col min-w-full overflow-x-hidden">
      <Navbar activeScreen={activeScreen} />

      <Home setActiveScreen={setActiveScreen} />

      <Partners />

      <About setActiveScreen={setActiveScreen} />

      <Clients setActiveScreen={setActiveScreen} />

      <Footer />
    </main>
  );
}

export default App;
