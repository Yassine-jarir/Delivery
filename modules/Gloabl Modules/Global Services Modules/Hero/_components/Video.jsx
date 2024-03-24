import Image from "next/image";
import Link from "next/link";

// icons
import cameraIcon from "@/public/images/Icons/icon50.svg";

function Video({ isRTL, translation }) {
  return (
    <div className="lg:w-[750px] max-w-[750px] w-full sm:h-[420px] h-[350px] bg-[var(--main-blue-color)] flex justify-center items-center rounded-[40px] relative">
      <button className="lg:w-[120px] lg:h-[100px] w-[100px] h-[80px] bg-white/30 rounded-xl flex justify-center items-center">
        <Image
          src={cameraIcon}
          className="lg:w-[70px] w-[50px]"
          alt="camera icon"
        />
      </button>

      <Link
        href="/"
        className={`absolute ${
          isRTL ? "lg:right-8" : "lg:left-8"
        } left-[50%] -translate-x-[50%] lg:-translate-x-0 bottom-5 flex justify-center items-center bg-[var(--main-orange-color)] text-white text-nowrap text-sm px-16 py-2 rounded-full font-extralight hover:opacity-95 duration-300`}
      >
        {translation}
      </Link>
    </div>
  );
}

export default Video;
