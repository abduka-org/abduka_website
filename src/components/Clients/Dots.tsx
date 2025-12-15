interface IDotsProps {
  length: number;
  active: number;
  setActive: (index: number) => void;
}

const Dots = ({ length, active, setActive }: IDotsProps) => {
  const lengthArray = Array.from({ length }, (_, index) => index);

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {lengthArray.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            index === active
              ? "w-4 bg-primary"
              : "bg-foreground/30 hover:bg-foreground/50"
          }`}
          onClick={() => setActive(index)}
          aria-label={`Ir para o slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Dots;
