import Image from "next/image";

// icons
import fleshPic from "@/public/images/Icons/icon25.svg";

export default function Header({ isRTL, translation }) {
  return (
    <div className="flex xl:justify-start justify-center items-center mb-16">
      <h1 className="sm:text-9xl text-8xl text-white relative">
        <span className="font-extrabold relative z-10">{translation}</span>
        <div
          className={`absolute -top-1 ${
            isRTL
              ? "sm:-right-8 -right-6 scale-x-[-1]"
              : "sm:-left-8 -left-6 scale-x-1"
          }`}
        >
          <Image
            src={fleshPic}
            className="sm:min-w-[300px] sm:max-w-[300px] min-w-[220px] max-w-[220px] object-contain"
            alt="flesh"
          />
        </div>
      </h1>
    </div>
  );
}
