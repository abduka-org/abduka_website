import { Button } from "../ui/button";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <Button variant={"default"}>Conheça como funciona</Button>

      <Button variant={"outline"}>Agende uma demonstração</Button>
    </div>
  );
};

export default Buttons;
