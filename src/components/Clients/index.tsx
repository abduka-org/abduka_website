import { useEffect, useRef } from "react";
import Carousel from "./Carousel";

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
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="clients"
      className="relative grid grid-cols-1 gap-y-4 w-full py-16 px-4"
      aria-label="Seção Clientes"
    >
      <h2 className="text-base font-semibold">Nossos valiosos clientes</h2>

      <Carousel />
    </section>
  );
};

export default Clients;
