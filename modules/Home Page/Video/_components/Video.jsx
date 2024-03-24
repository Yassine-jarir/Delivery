import Image from "next/image";

// icons
import cameraIcon from "@/public/images/Icons/icon50.svg";

function Video({ isRTL }) {
  return (
    <div className="lg:w-[60%] max-lg:mt-20 max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 w-full h-[300px] lg:h-auto relative flex justify-center items-center px-2 before:content-[''] before:absolute before:w-full before:h-[50%] before:bottom-0 before:bg-orange">
      <div
        className={`max-lg:right-auto max-lg:h-[300px] max-lg:top-0 lg:max-w-[800px] max-w-[500px] w-full lg:min-w-[500px] h-[450px] bg-darkBlue lg:absolute lg:rounded-[40px] rounded-3xl ${
          isRTL
            ? "xl:-left-[100px] -left-[20px]"
            : "xl:-right-[100px] -right-[20px]"
        } flex justify-center items-center z-50`}
      >
        <button className="lg:w-[120px] lg:h-[100px] w-[100px] h-[80px] bg-white/30 rounded-xl flex justify-center items-center">
          <Image
            src={cameraIcon}
            className="lg:w-[70px] w-[50px]"
            alt="camera icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Video;
