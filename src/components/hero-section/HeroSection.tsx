const HeroSection = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
