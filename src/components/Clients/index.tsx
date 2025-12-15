import { useEffect, useRef } from "react";

import Carousel from "./Carousel";

import { clientsData } from "@/static/clientsData";

interface IClientsProps {
  setActiveScreen: (value: "clients") => void;
}

const Clients = ({ setActiveScreen }: IClientsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("clients");
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [setActiveScreen]);

  return (
    <section
      ref={ref}
      id="clients"
      className="relative grid grid-cols-1 gap-y-4 w-full py-16 px-4"
      aria-label="Seção Clientes"
    >
      <h2 className="text-base font-semibold">{clientsData.title}</h2>

      <Carousel />
    </section>
  );
};

export default Clients;
