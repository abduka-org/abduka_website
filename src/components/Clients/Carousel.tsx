import { useState, useEffect, useCallback, useRef } from "react";

import Testimonial from "./Testiominal";
import Dots from "./Dots";

import { clientsData } from "@/static/clientsData";

const AUTOPLAY_DELAY_MS = 5000;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const totalSlides = clientsData.testimonials.length;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    intervalRef.current = window.setInterval(nextSlide, AUTOPLAY_DELAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, isPaused, prefersReducedMotion]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <article
      aria-roledescription="carousel"
      aria-label="Depoimentos de clientes"
      className="relative w-full max-w-lg mx-auto overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div
        className={`flex ${
          prefersReducedMotion
            ? ""
            : "transition-transform duration-700 ease-in-out"
        }`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {clientsData.testimonials.map(
          ({ id, image, title, review, rating }, index) => (
            <div
              key={id}
              aria-roledescription="slide"
              aria-label={`Depoimento ${index + 1} de ${totalSlides}`}
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
              className="w-full shrink-0"
            >
              <Testimonial
                image={image}
                title={title}
                review={review}
                rating={rating}
              />
            </div>
          )
        )}
      </div>

      <Dots
        length={totalSlides}
        active={activeIndex}
        setActive={setActiveIndex}
      />
    </article>
  );
};

export default Carousel;
