import HeroSection from "../hero-section/HeroSection";
import { TbLogin2 } from "react-icons/tb";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "../custumbutton/CustomButoon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Menu = [
  { title: "صفحه ی اصلی", href: "#", url: "#home" },
  { title: "ویژگی ها", href: "#", url: "#features" },
  { title: "تیم", href: "#" },
  { title: "پرسش و پاسخ", href: "#" },
  { title: "ارتباط با ما", href: "#" },
  { title: "صفحات", href: "#" },
  { title: "ادمین", href: "#" },
];
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-purple h-auto pb-40  rounded-b-[50px]">
      <header
        className={`grow py-3  rounded-xl  bg-gray  fixed top-0 right-0 left-0 mt-10 mx-20 z-50 border border-grayDark transition-colors duration-300 ${scrolled ? "bg-grayDark shadow-lg shadow-gray" : "bg-gray"}`}
      >
        <div className="flex items-center  justify-between px-10">
          <span className="bg-purpleLight w-7 h-7 rounded-full"></span>
          <ul className="flex items-center gap-10">
            {Menu.map((item, index) => {
              const isActive =
                index === activeIndex || location.pathname === item.href;
              return (
                <ScrollLink
                  key={index}
                  to={item.url}
                  smooth={true}
                  duration={1500}
                  offset={-120}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveIndex(index);
                    if (item.href) {
                      navigate(item.href);
                    }
                  }}
                >
                  <li
                    className={`text-grayLight cursor-pointer ${isActive && "text-purpleLight"}`}
                  >
                    {item.title}
                  </li>
                </ScrollLink>
              );
            })}
          </ul>
          <CustomButton size="large" icon={TbLogin2} className="px-4 boxShadow">
            ثبت نام / واردشدن
          </CustomButton>
        </div>
      </header>
      <HeroSection />
    </div>
  );
};

export default Header;
