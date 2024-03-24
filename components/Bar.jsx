import Image from "next/image";

// icons
import fleshIcon from "@/public/images/Icons/icon22.svg";

function Bar() {
  return (
    <div className="w-full relative -mt-2">
      <div className="w-full lg:w-full h-4 text-center bg-[var(--main-orange-color)] rounded-full" />

      <div className="absolute left-1/2 -translate-x-1/2 m-auto w-[85px] h-[80px] bg-[var(--main-orange-color)] rounded-b-full flex justify-center items-center">
        <Image src={fleshIcon} className="w-[55px]" alt="flesh icon" />
      </div>
    </div>
  );
}

export default Bar;
