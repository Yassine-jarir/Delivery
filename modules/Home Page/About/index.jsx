import Image from "next/image";

// components
import AboutPicture from "./_components/AboutPicture";
import Header from "./_components/Header";
import Description from "./_components/Description";

// icons
import fleshIcon from "@/public/images/Icons/icon22.svg";

function About({ isRTL, translation }) {
  return (
    <div id="About" className="h-auto w-full flex items-center justify-center">
      <div className="relative">
        {/* top bar  */}
        <div>
          <div className="absolute z-40 left-1/2 transform -translate-x-1/2 mt-0 md:mt-[-8px] w-[80%] lg:w-[90%] h-4 text-center bg-darkBlue rounded-2xl mx-auto "></div>
        </div>

        <div className="relative">
          {/* icon  */}
          <div className="absolute left-1/2 transform -translate-x-1/2 m-auto w-[69px] bg-orange rounded-b-[40px] p-2">
            <Image
              src={fleshIcon}
              width={180}
              height={37}
              priority
              alt="flesh icon"
            />
          </div>

          {/* main section */}
          <div className="flex flex-col-reverse lg:flex-row gap-24">
            <AboutPicture isRTL={isRTL} />
            <div className="flex justify-center xl:gap-16 lg:gap-10 gap-5">
              <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[700px] h-full lg:min-h-[480px] text-center lg:py-16 pt-24 pb-10 px-2">
                <Header translation={translation?.title} />
                <Description translation={translation?.description} />
              </div>
              <div className="min-w-[100px] bg-orange hidden lg:block "></div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div>
          <div className="hidden absolute right-[60px] bottom-0 z-40 mb-[-8px] w-[65%] h-4 text-center bg-darkBlue rounded-2xl  lg:block "></div>
          <div className="lg:hidden absolute z-40 left-1/2 transform -translate-x-1/2 mt-[-8px] w-[80%] h-4 text-center bg-darkBlue rounded-2xl mx-auto "></div>
        </div>
      </div>
    </div>
  );
}

export default About;
