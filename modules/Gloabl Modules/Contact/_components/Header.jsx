import Image from "next/image";

// Images
import fleshPic from "@/public/images/Icons/icon25.svg";

export default function Header({ isRTL, translation }) {
  return (
    <div className="lg:w-[50%] w-full min-w-fit h-full">
      <div className="relative">
        <h1 className="sm:text-5xl text-4xl text-[var(--main-blue-color)] relative z-10">
          {translation?.light}{" "}
          <span className="font-extrabold">{translation?.bold}</span>
        </h1>
        <div
          className={`absolute sm:-top-12 -top-10 ${
            isRTL ? "-right-5 scale-x-[-1]" : "-left-5 scale-x-1"
          }`}
        >
          <Image
            src={fleshPic}
            className="sm:w-[220px] w-[180px] object-contain"
            alt="flesh"
          />
        </div>
      </div>
    </div>
  );
}
