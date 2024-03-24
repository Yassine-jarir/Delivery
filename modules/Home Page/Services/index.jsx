import Image from "next/image";

// components
import Services from "./_components/Services";
import Header from "./_components/Header";
import LeftDescription from "./_components/LeftDescription";
import RightDescription from "./_components/RightDescription";

// icons
import fleshIcon from "@/public/images/Icons/icon25.svg";
function main({ isRTL, translation }) {
  return (
    <div className="w-full flex items-center justify-center lg:pb-24 lg:pt-32 py-0 lg:px-5 overflow-x-hidden">
      <div
        id="Services"
        className={`max-w-[1400px] relative lg:flex lg:shadow-2xl lg:rounded-3xl`}
      >
        {/* icon */}
        <Image
          width={200}
          height={200}
          src={fleshIcon}
          alt="Flesh"
          className={`absolute top-0 ${
            isRTL ? "lg:-right-20 scale-x-[-1]" : "lg:-left-20 scale-x-1"
          } w-fit max-h-[100px] lg:w-[260px] object-cover lg:block hidden`}
        />
        <div className="flex flex-col justify-center items-center gap-5 text-center px-4 pb-10 pt-0 lg:py-6 lg:w-1/2">
          <Header isRTL={isRTL} translation={translation?.title} />
          <LeftDescription translation={translation?.description_one} />
        </div>

        <div
          className={`lg:w-1/2 flex flex-col items-center gap-10 relative bg-orange py-10 px-5 ${
            isRTL ? "lg:rounded-l-3xl" : "lg:rounded-r-3xl"
          }`}
        >
          <div
            className={`absolute ${
              isRTL ? "right-0 scale-x-[-1]" : "left-0 scale-x-1"
            } top-[50%] -translate-y-[50%] h-[90px] w-14 bg-white lg:block hidden`}
            style={{ clipPath: "polygon(100% 50%, 0 0, 0 100%)" }}
          ></div>

          <Services translation={translation?.services} />
          <RightDescription translation={translation?.description_two} />
        </div>
      </div>
    </div>
  );
}

export default main;
