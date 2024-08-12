import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import CustomButton from "../custumbutton/CustomButoon";

const HeroSection = () => {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [-15, 15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY, currentTarget } = event;
      const rect = (currentTarget as HTMLElement).getBoundingClientRect();
      const offsetX = clientX - rect.left - rect.width / 2;
      const offsetY = clientY - rect.top - rect.height / 2;

      x.set(offsetX / 4); 
      y.set(offsetY / 4); 
    };

    const imageElement = document.querySelector("#cta-image");

    imageElement?.addEventListener(
      "mousemove",
      handleMouseMove as EventListener
    );

    return () => {
      imageElement?.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
    };
  }, [x, y]);

  return (
    <div className="relative cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          // className="w-[700px] h-[700px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mt-40">
        <h2 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-5xl font-bold">
          یک داشبورد برای مدیریت <br />
          همه مشاغل شما
        </h2>
        <p className="text-sm text-grayLight text-center">
          قالب مدیریت آماده تولید و استفاده آسان برای قابلیت اطمینان و شخصی سازی
        </p>
        <CustomButton size="large" className="px-8 py-3  boxShadow">
          دسترسی سریع
        </CustomButton>
      </div>
      <motion.div
        id="cta-image"
        className="  absolute left-0 right-0 flex justify-center"
        style={{ rotateX, rotateY }}
      >
        <img
          src="/images/hero-dashboard-dark.png"
          alt="Dashboard Image"
          width={700}
          height={700}
          className="shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
