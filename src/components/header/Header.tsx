import HeroSection from "../hero-section/HeroSection";
import { TbLogin2 } from "react-icons/tb";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "../custumbutton/CustomButoon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CategoriesPage from "../../pages/categoripage/CategoriesPage";
import { Hamburger } from "./HamburgerMenu";

type MenuItem = {
  title: string;
  href: string;
  url?: string;
  icon?: ReactElement;
};
const Menu: MenuItem[] = [
  { title: "صفحه ی اصلی", href: "#", url: "#home" },
  { title: "ویژگی ها", href: "#", url: "#features" },
  { title: "تیم", href: "#" },
  { title: "پرسش و پاسخ", href: "#" },
  { title: "ارتباط با ما", href: "#" },
  {
    title: "صفحات",
    href: "#",
    icon: <MdKeyboardArrowDown size={22} />,
  },
  { title: "ادمین", href: "#" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const timeoutId = useRef<number | null>(null);

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

  const handleMouseEnter = (index: number) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setHoveredIndex(index);
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setHoveredIndex(null);
      setIsSubMenuOpen(false);
    }, 200);
  };

  return (
    <div className="bg-purple h-auto pb-40 rounded-b-[50px]">
      <header
        className={`grow py-3 rounded-xl  md:w-[90%] md:mx-24 mx-5  bg-gray fixed top-0 right-0 left-0 mt-10  z-50 border border-grayDark transition-colors duration-300 ${
          scrolled ? "bg-grayDark shadow-lg shadow-gray" : "bg-gray"
        }`}
      >
        <div className="flex items-center justify-between md:px-10 px-4">
          <div className="lg:hidden">
            <Hamburger Menu={Menu} />
          </div>
          <span className="bg-purpleLight w-7 h-7 rounded-full"></span>
          <ul className="lg:flex hidden items-center gap-10">
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
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <li
                    className={`text-grayLight cursor-pointer  hover:text-purpleLight flex items-center gap-1 duration-500 ${
                      isActive && "text-purpleLight"
                    }`}
                  >
                    {item.title}
                   
                    {item.icon}
                  </li>
                </ScrollLink>
              );
            })}
          </ul>
          <CustomButton size="large" icon={TbLogin2} className="px-4 boxShadow">
            ثبت نام / واردشدن
          </CustomButton>
        </div>
        {hoveredIndex === 5 && isSubMenuOpen && (
          <div
            onMouseEnter={() => {
              if (timeoutId.current) {
                clearTimeout(timeoutId.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <CategoriesPage />
          </div>
        )}
      </header>
      <HeroSection />
    </div>
  );
};

export default Header;
