import { Users } from "lucide-react";

import { aboutData } from "@/static/aboutData";

const Student = () => {
  return (
    <article className="flex flex-col gap-y-8">
      <h2 className="text-base font-semibold text-primary">
        {aboutData.student.title}
      </h2>

      <p className="text-sm text-foreground/75 indent-4">
        {aboutData.student.description}
      </p>

      <div className="relative flex flex-col gap-y-4">
        <div className="absolute top-12 left-6 w-px h-[80%] border border-dashed border-foreground z-0"></div>

        <h3 className="text-sm font-medium">
          {aboutData.student.subtitles[0]}
        </h3>

        {aboutData.student.topics.map(({ id, text }) => (
          <div key={id} className="flex flex-row gap-x-2 items-center z-1">
            <div className="p-3 bg-green-200 dark:bg-green-950 rounded-full border border-foreground">
              <Users className="w-6 h-6 stroke-foreground" strokeWidth={1} />
            </div>
            <p className="text-xs text-foreground/75">{text}</p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col gap-y-4">
        <h3 className="text-sm font-medium">
          {aboutData.student.subtitles[1]}
        </h3>

        <p className="text-sm text-foreground/75 indent-4">
          {aboutData.student.results}
        </p>
      </div>
    </article>
  );
};

export default Student;
