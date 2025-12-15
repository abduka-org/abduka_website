import { Button } from "../ui/button";

import { footerData } from "@/static/footerData";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-x-2">
      {footerData.buttons.map(({ id, icon: Icon, action }) => (
        <Button key={id} variant={"outline"} size={"icon-lg"} onClick={action}>
          <Icon className="w-4 h-4" />
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
