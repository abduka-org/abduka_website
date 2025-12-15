import { Button } from "../ui/button";

import { footerData } from "@/static/footerData";

const Terms = () => {
  return (
    <div className="flex flex-row items-center">
      {footerData.terms.map(({ id, label, action }) => (
        <Button key={id} variant={"link"} onClick={action}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Terms;
