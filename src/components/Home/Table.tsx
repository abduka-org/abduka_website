import Map from "@/assets/map.png";

const Table = () => {
  return (
    <div className="w-full p-2 border-2 border-foreground/50 border-dashed rounded-3xl">
      <img className="w-full" src={Map} alt="Mapa do jogo Abduka" />
    </div>
  );
};

export default Table;
