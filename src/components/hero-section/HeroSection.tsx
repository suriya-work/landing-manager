import CustomButton from "../custumbutton/CustomButoon";

const HeroSection = () => {
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
        <p className="text-sm text-grayLight">
          قالب مدیریت آماده تولید و استفاده آسان برای قابلیت اطمینان و شخصی سازی
        </p>
        <CustomButton size="large" className="px-8 py-3  boxShadow">
          دسترسی سریع
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroSection;
