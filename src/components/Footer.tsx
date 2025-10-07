import { SiFacebook, SiGmail, SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="border-fuego-500 mt-auto border-t-2 bg-white">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-3 p-4 lg:flex-row">
        <div className="text-fuego-800 text-sm">
          &#169; Green Point Beauty 2013 - {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6 lg:gap-4">
          <SiFacebook className="text-fuego-800 hover:text-fuego-900 size-5" />
          <SiInstagram className="text-fuego-800 hover:text-fuego-900 size-5" />
          <SiGmail className="text-fuego-800 hover:text-fuego-900 size-5" />
        </div>
      </div>
    </footer>
  );
};
