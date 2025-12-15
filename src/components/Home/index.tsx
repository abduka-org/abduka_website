import { useEffect, useRef } from "react";

import Particles from "../ui/particles";
import Board from "./Board";
import Text from "./Text";
import Buttons from "./Buttons";

import { useTheme } from "@/hooks/useTheme";

interface IHomeProps {
  setActiveScreen: (value: "home") => void;
}

const Home = ({ setActiveScreen }: IHomeProps) => {
  const { isDarkTheme } = useTheme();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("home");
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [setActiveScreen]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative grid grid-cols-1 place-items-center gap-y-12 w-full h-dvh py-16 px-4"
      aria-label="Seção home"
    >
      <Particles
        className="absolute inset-0 -z-1"
        particleColors={isDarkTheme ? ["#fafafa"] : ["#18181b"]}
        aria-hidden
      />

      <Board />

      <article className="flex flex-col items-center gap-y-12 w-full">
        <Text />

        <Buttons />
      </article>
    </section>
  );
};

export default Home;
