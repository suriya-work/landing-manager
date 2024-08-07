import { useState, useEffect } from "react";

const useScroll = (scrollHeight:number) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollHeight && !isScrolled) {
        setIsScrolled(true);
      } else if (
        window.scrollY <= scrollHeight &&
        isScrolled
      ) {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, scrollHeight]);

  return isScrolled;
};

export default useScroll;