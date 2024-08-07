import HeroSection from "../hero-section/HeroSection";
import { TbLogin2 } from "react-icons/tb";
import { Link as ScrollLink,} from 'react-scroll';
const Menu = [
  { title: "صفحه ی اصلی" },
  { title: "ویژگی ها" },
  { title: "تیم" },
  { title: "پرسش و پاسخ" },
  { title: "ارتباط با ما" },
  { title: "صفحات" },
  { title: "ادمین" },
];

const Header = () => {
  return (
    <div className="bg-purple h-[500px] rounded-b-[50px]">
      <div className="grow py-3  rounded-xl m-auto bg-gray mx-20 mt-10 relative">
        <div className="flex items-center  justify-between px-10">
          <span className="app-brand-logo demo">
            <svg
              width="32"
              height="22"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                fill="#7367F0"
              ></path>
              <path
                opacity="0.06"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                fill="#161616"
              ></path>
              <path
                opacity="0.06"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                fill="#161616"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                fill="#7367F0"
              ></path>
            </svg>
          </span>
          <ul className="flex items-center gap-10">
            {Menu.map((item, index) => (
              <ScrollLink
                // key={item.id}
                // href={item}
                smooth={true}
                duration={1500}
                offset={-120}
              >
                <li key={index} className="text-grayLight">
                  {item.title}
                </li>
              </ScrollLink>
            ))}
          </ul>
          <div className="flex gap-1 items-center bg-purpleLight rounded-lg px-4 py-2 boxShadow">
            <TbLogin2 size={22} color="#fff" />
            <button className="text-white">ثبت نام / واردشدن</button>
          </div>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default Header;
