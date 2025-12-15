import SpotlightCard from "../ui/spotlightCard";
import StarRating from "./StarRating";

interface ITestimonialProps {
  image: string;
  title: string;
  review: string;
  rating: number;
}

const Testimonial = ({ image, title, review, rating }: ITestimonialProps) => {
  return (
    <SpotlightCard
      className="flex flex-col items-center justify-center gap-y-8 min-w-full"
      spotlightColor="rgba(230, 170, 11, 0.25)"
    >
      <div className="flex flex-row items-center gap-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={image}
          alt="Imagem do cliente"
        />

        <p className="text-base font-bold uppercase">{title}</p>
      </div>

      <p className="text-sm text-foreground/75">{review}</p>

      <div className="flex flex-col gap-y-1">
        <StarRating rating={rating} />

        <p className="text-xs text-primary/75">Nota {rating} / 5</p>
      </div>
    </SpotlightCard>
  );
};

export default Testimonial;
