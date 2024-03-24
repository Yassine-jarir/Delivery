import Image from "next/image";

// icons
import fleshIcon from "@/public/images/Icons/icon25.svg";

function Header({ isRTL, translation }) {
  return (
    <div className="relative">
      <Image
        src={fleshIcon}
        className={`lg:hidden block absolute ${
          isRTL ? "-right-[100px] scale-x-[-1]" : "-left-[100px] scale-x-1"
        } top-[50%] -translate-y-[50%] w-[100px]`}
        alt="flesh icon"
      />
      <h1 className="lg:text-5xl text-4xl text-orange font-semibold">
        {translation}
      </h1>
    </div>
  );
}

export default Header;
