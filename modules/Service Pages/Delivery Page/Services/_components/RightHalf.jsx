import Image from "next/image";

// icons
import trackIcon from "@/public/images/Icons/DeliveryIcons/icon6.svg";

export default function RightHalf({ isRTL, translation }) {
  return (
    <div className="relative lg:w-[50%] w-full h-[450px] bg-[var(--main-orange-color)] flex flex-row-reverse justify-end items-center">
      <div
        className={`xl:size-[450px] sm:size-[370px] size-[320px] absolute -bottom-16 ${
          isRTL ? "-left-32" : "-right-32"
        } bg-[var(--main-blue-color)] rounded-full`}
      >
        <Image
          src={trackIcon}
          alt="img"
          className={`xl:w-[250px] sm:w-[200px] w-[120px] absolute ${
            isRTL ? "left-[60%]" : "left-[40%]"
          } top-[40%] -translate-x-[50%] -translate-y-[50%]`}
        />
      </div>

      <div className="xl:max-w-[350px] lg:max-w-[300px] sm:max-w-[350px] max-w-[300px] h-full flex flex-col gap-5 px-5 lg:px-0 font-light z-10">
        <div className="w-full min-h-[35%] flex items-end">
          <h1
            className={`w-full h-[50px] flex justify-center items-center bg-[var(--main-blue-color)] lg:text-2xl text-xl text-center ${
              isRTL
                ? "rounded-l-full rounded-r-full lg:rounded-r-none"
                : "rounded-r-full rounded-l-full lg:rounded-l-none"
            }`}
          >
            {translation?.title}
          </h1>
        </div>

        <div className="h-[75%]">
          <p className="h-full text-center xl:text-xl text-lg lg:px-7">
            {translation?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
