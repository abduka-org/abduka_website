import { useEffect, useRef } from "react";

import Article from "./Article";
import Student from "./Student";
import Research from "./Research";

import { aboutData } from "@/static/aboutData";

interface IAboutProps {
  setActiveScreen: (value: "about") => void;
}

const About = ({ setActiveScreen }: IAboutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("about");
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [setActiveScreen]);

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col gap-y-12 w-full py-16 px-4"
      aria-label="Seção Sobre"
    >
      {aboutData.articles.map(({ id, image, alt, text }) => (
        <Article key={id} image={image} alt={alt} text={text} />
      ))}

      <Student />

      <Research />
    </section>
  );
};

export default About;
