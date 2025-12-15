import { aboutData } from "@/static/aboutData";

const Research = () => {
  return (
    <article className="flex flex-col gap-y-8">
      <h2 className="text-base font-semibold text-primary">
        {aboutData.research.title}
      </h2>

      <p className="text-sm text-foreground/75 indent-4">
        {aboutData.research.description}
      </p>
    </article>
  );
};

export default Research;
