interface IArticleProps {
  image: string;
  alt: string;
  text?: string[];
}

const Article = ({ image, alt, text }: IArticleProps) => {
  const hasText = text && text.length > 0;

  return (
    <article className="flex flex-col gap-y-8">
      <img className="w-full" src={image} alt={alt} loading="lazy" />

      {hasText && (
        <div className="flex flex-col gap-y-4">
          {text?.map((item, index) => (
            <p key={index} className="text-sm text-foreground/75 indent-4">
              {item}
            </p>
          ))}
        </div>
      )}
    </article>
  );
};

export default Article;
