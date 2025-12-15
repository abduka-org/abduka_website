import { useState, useEffect, useCallback } from "react";

import Testimonial from "./Testiominal";
import Dots from "./Dots";

import { clientsData } from "@/static/clientsData";

const AUTOPLAY_DELAY_MS = 5000;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = clientsData.testimonials.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY_MS);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="overflow-hidden relative w-full max-w-lg mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {clientsData.testimonials.map(
          ({ id, image, title, review, rating }) => (
            <Testimonial
              key={id}
              image={image}
              title={title}
              review={review}
              rating={rating}
            />
          )
        )}
      </div>

      <Dots
        length={totalSlides}
        active={activeIndex}
        setActive={setActiveIndex}
      />
    </div>
  );
};

export default Carousel;
