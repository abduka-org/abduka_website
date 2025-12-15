import { homeData } from "@/static/homeData";

const Text = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold text-center">
        {homeData.title[0]}
        <strong className="font-bold text-primary">{homeData.title[1]}</strong>
      </h1>

      <p className="text-sm text-foreground/75 text-center">
        {homeData.description}
      </p>
    </div>
  );
};

export default Text;
