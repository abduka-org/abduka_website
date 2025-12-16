import { footerData } from "@/static/footerData";

const Header = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <img
        className="w-24"
        src={footerData.header.image}
        alt="Logo Abduka"
        loading="lazy"
      />

      <p className="text-sm text-foreground/75">
        {footerData.header.description}
      </p>
    </div>
  );
};

export default Header;
