const Features = () => {
  return (
    <div className="h-screen relative flex justify-center" id="#features">
      <div className="absolute top-96 flex flex-col gap-4 items-center">
        <span className="bg-pupleDark text-purpleLight text-sm shadow-sm rounded-md px-4 py-1">
          ویژگی های مفید
        </span>
        <div>
          <img src="/images/section-title-icon.png" alt="section-title" width={500} className="absolute top-16"/>
          <h2 className="text-white font-bold bg-heroTitle text-3xl ">
            همه چیزهایی که برای شروع پروژه بعدی خود نیاز دارید
          </h2>
        </div>
        <p className="text-grayLight">
          نه تنها مجموعه ای از ابزارها، این بسته شامل برنامه های مفهومی آماده
          برای استقرار است.
        </p>
      </div>
    </div>
  );
};

export default Features;
