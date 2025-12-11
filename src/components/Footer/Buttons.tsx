import { FaLinkedinIn } from "react-icons/fa";

import { Button } from "../ui/button";

const Buttons = () => {
  return (
    <div className="flex flex-row gap-x-2">
      <Button variant={"outline"} size={"icon-lg"}>
        <FaLinkedinIn className="w-4 h-4" />
      </Button>

      <Button variant={"outline"} size={"icon-lg"}>
        <FaLinkedinIn className="w-4 h-4" />
      </Button>

      <Button variant={"outline"} size={"icon-lg"}>
        <FaLinkedinIn className="w-4 h-4" />
      </Button>

      <Button variant={"outline"} size={"icon-lg"}>
        <FaLinkedinIn className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Buttons;
