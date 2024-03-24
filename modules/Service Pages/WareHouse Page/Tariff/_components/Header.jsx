import Image from "next/image";

// icons
import fleshPic from "@/public/images/Icons/icon25.svg";

export default function index({ isRTL, translation }) {
  return (
    <h1 className="text-8xl text-[var(--main-blue-color)] relative lg:mt-24">
      <span className="font-extrabold relative z-10">{translation}</span>
      <div
        className={`absolute -top-1 ${
          isRTL ? "-right-2 scale-x-[-1]" : "-left-2 scale-x-1"
        }`}
      >
        <Image
          src={fleshPic}
          className="sm:min-w-[230px] sm:max-w-[230px] min-w-[220px] max-w-[220px] object-contain"
          alt="flesh"
        />
      </div>
    </h1>
  );
}
