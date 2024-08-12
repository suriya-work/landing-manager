import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

type MenuItem = {
  title: string;
  href: string;
  url?: string;
  icon?: React.ReactElement;
};

type HamburgerProps = {
  Menu: MenuItem[];
};

export const Hamburger: React.FC<HamburgerProps> = ({ Menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GiHamburgerMenu onClick={handleClick} size={22} color="#cfcde4"/>
      <div
        className={`absolute right-0 top-0 h-screen w-full bg-bgColor opacity-0 ${
          isOpen
            ? "visible opacity-50 transition duration-500 ease-in-out"
            : "invisible opacity-0 transition duration-500 ease-in-out"
        }`}
        onClick={handleClick}
      >
        .
      </div>
      <div
        className={`absolute left-[110px]  -top-20 z-20 flex h-screen w-[80%] flex-col items-center gap-7 bg-bgColor drop-shadow-lg ${
          isOpen
            ? "translate-x-[0rem] transform transition duration-500 ease-in-out"
            : "translate-x-[800px] transform transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex w-[75%] items-center justify-between pt-12">
          <div className="flex items-center gap-2">
            <span className="bg-purpleLight w-7 h-7 rounded-full"></span>
          </div>
          <RxCross2 onClick={handleClick} size={22} color="#cfcde4"/>
        </div>

        <ul className="mt-3 flex w-3/4 flex-col gap-10 text-xl font-medium text-grayLight opacity-60">
          {Menu.map((item) => (
            <Link to={item.href} key={item.href}>
              <li className="hover:text-purpleLight cursor-pointer rounded-3xl transition duration-300 flex items-center">
                      {item.title}
                      {item.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
