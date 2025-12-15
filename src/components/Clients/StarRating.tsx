import { Star, StarHalf } from "lucide-react";

interface IStarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: IStarRatingProps) => {
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

export default StarRating;
