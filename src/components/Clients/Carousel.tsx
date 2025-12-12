import { useState, useEffect, useCallback } from "react";
import { Star, StarHalf, User } from "lucide-react";

import SpotlightCard from "../ui/spotlightCard";

const testimonials = [
  {
    id: 1,
    title: "Instituição feliz com o serviço 1",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Mauris aliquam urna at lacus consectetur imperdiet. Mauris aliquam urna at lacus consectetur imperdiet. Mauris aliquam urna at lacus consectetur imperdiet. Mauris aliquam urna at lacus consectetur imperdiet.",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Cliente muito satisfeito 2",
    review:
      "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.",
    rating: 5.0,
  },
  {
    id: 3,
    title: "Melhoria contínua e suporte 3",
    review:
      "Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    rating: 4.0,
  },
  {
    id: 4,
    title: "Excelente custo-benefício 4",
    review:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    rating: 4.5,
  },
];

const AUTOPLAY_DELAY_MS = 5000;

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starClass = "w-4 h-4 stroke-primary fill-primary";

  return (
    <div className="flex flex-row items-center gap-x-2">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={starClass}
          strokeWidth={1}
          aria-hidden
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          key="half"
          className={starClass}
          strokeWidth={1}
          aria-hidden
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 stroke-primary"
          strokeWidth={1}
          aria-hidden
        />
      ))}
    </div>
  );
};

const TestimonialSlide = ({ testimonial }: { testimonial: any }) => (
  <SpotlightCard
    className="flex flex-col items-center justify-center gap-y-8 min-w-full"
    spotlightColor="rgba(230, 170, 11, 0.25)"
  >
    <div className="flex flex-row items-center gap-x-4">
      <div className="p-2 bg-foreground rounded-full">
        <User
          className="w-8 h-8 stroke-background"
          strokeWidth={1}
          aria-hidden
        />
      </div>

      <p className="text-base font-bold uppercase">{testimonial.title}</p>
    </div>

    <p className="text-sm text-foreground/75">{testimonial.review}</p>

    <div className="flex flex-col gap-y-1">
      <StarRating rating={testimonial.rating} />
      <p className="text-xs text-primary/75">
        Nota {testimonial.rating.toFixed(1)} / 5
      </p>
    </div>
  </SpotlightCard>
);

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = testimonials.length;

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
        {testimonials.map((testimonial) => (
          <TestimonialSlide key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "w-4 bg-primary"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
