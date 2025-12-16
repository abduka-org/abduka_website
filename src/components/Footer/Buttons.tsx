import { Button } from "../ui/button";

import { footerData } from "@/static/footerData";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-x-2">
      {footerData.buttons.map(({ id, icon: Icon, label, action }) => (
        <Button
          key={id}
          variant={"outline"}
          size={"icon-lg"}
          onClick={action}
          aria-label={label}
        >
          <Icon className="w-4 h-4" aria-hidden />
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
