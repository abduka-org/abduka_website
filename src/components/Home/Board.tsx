import { homeData } from "@/static/homeData";

const Board = () => {
  return (
    <figure className="w-full p-2 border-2 border-foreground/50 border-dashed rounded-3xl">
      <img
        className="w-full"
        src={homeData.board}
        alt="Mapa do jogo Abduka"
        loading="lazy"
        aria-hidden
      />
    </figure>
  );
};

export default Board;
