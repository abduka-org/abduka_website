import { homeData } from "@/static/homeData";

const Board = () => {
  return (
    <div className="w-full p-2 border-2 border-foreground/50 border-dashed rounded-3xl">
      <img className="w-full" src={homeData.board} alt="Mapa do jogo Abduka" />
    </div>
  );
};

export default Board;
