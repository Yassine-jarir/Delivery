import Image from "next/image";

// components
import Card from "./Card";

// icons
import fleshIcon from "@/public/images/Icons/icon25.svg";

function LTRReview({ lang, isRTL, service }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5 lg:gap-0">
      <div className="w-full flex flex-row-reverse items-center sm:pe-16 pe-10">
        <div className="bg-[var(--main-blue-color)] w-full sm:h-[80px] min-h-[60px] flex justify-end items-center rounded-br-3xl rounded-tl-3xl sm:pe-36 pe-20 relative">
          {/* Title */}
          <h2 className="sm:text-3xl text-2xl text-white font-light p-2">
            {service?.title}
          </h2>

          {/* Flesh icon */}
          <div
            className={`absolute ${
              isRTL
                ? "sm:-left-24 -left-20 scale-x-1"
                : "sm:-right-24 -right-20 scale-x-[-1]"
            }  flex items-center`}
          >
            <Image
              src={fleshIcon}
              className="sm:w-60 w-44 object-contain"
              alt="flesh"
            />
          </div>
        </div>

        {/*  mobile icon */}
        <div>
          <Image
            src={service?.icon}
            className="w-[150px] lg:hidden sm:block hidden"
            alt={service?.title}
          />
        </div>
      </div>

      <div className="w-full flex flex-row-reverse justify-center lg:justify-end items-center xl:gap-x-32 gap-x-5 xl:ps-10 sm:ps-5">
        <Image
          src={service?.icon}
          className="hidden lg:block xl:w-96 w-80 object-contain"
          alt={service?.title}
        />
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center xl:gap-10 gap-y-10 gap-x-5">
          {service?.reviews?.map((item, key) => (
            <Card key={key} review={item} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LTRReview;
