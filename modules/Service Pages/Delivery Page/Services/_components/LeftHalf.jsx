import Image from "next/image";

// icons
import fastDeliveryIcon from "@/public/images/Icons/DeliveryIcons/icon5.svg";

export default function LeftHalf({ isRTL, translation }) {
  return (
    <div className="relative lg:w-[50%] w-full h-[450px] bg-[var(--main-blue-color)] flex flex-row justify-end items-center overflow-hidden">
      <div
        className={`xl:size-[450px] sm:size-[370px] size-[320px] absolute -bottom-16 ${
          isRTL ? "-right-32" : "-left-32"
        } bg-[var(--main-orange-color)] rounded-full`}
      >
        <Image
          src={fastDeliveryIcon}
          alt="img"
          className={`xl:w-[250px] sm:w-[200px] w-[120px] absolute ${
            isRTL ? "left-[40%]" : "left-[60%]"
          } top-[40%] -translate-x-[50%] -translate-y-[50%]`}
        />
      </div>

      <div className="xl:max-w-[350px] lg:max-w-[300px] sm:max-w-[350px] max-w-[300px] h-full flex flex-col gap-5 px-5 lg:px-0 font-light z-10">
        <div className="w-full min-h-[35%] flex items-end">
          <h1
            className={`w-full h-[50px] flex justify-center items-center bg-[var(--main-orange-color)] lg:text-2xl text-xl text-center ${
              isRTL
                ? "rounded-r-full rounded-l-full lg:rounded-l-none"
                : "rounded-l-full rounded-r-full lg:rounded-r-none"
            }`}
          >
            {translation?.title}
          </h1>
        </div>

        <div className="h-[75%]">
          <p className="text-center xl:text-xl text-lg lg:px-7">
            {translation?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
