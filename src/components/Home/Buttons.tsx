import { homeData } from "@/static/homeData";
import { Button } from "../ui/button";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {homeData.buttons.map(({ id, variant, label, action }) => (
        <Button variant={variant} key={id} onClick={action}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
