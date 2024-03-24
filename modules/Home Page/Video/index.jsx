// components
import Infos from "./_components/Infos.jsx";
import VideoComponent from "./_components/Video.jsx";

function Video({ isRTL, translation }) {
  return (
    <div className="h-auto w-full flex items-center justify-center">
      <div className="max-w-[1550px] w-full flex flex-col items-center lg:flex-row">
        <VideoComponent isRTL={isRTL} />

        <div className="bg-orange text-white lg:w-[50%] w-full p-16 pe-5 px-2 flex lg:justify-end justify-center items-center lg:rounded-b-[40px]">
          <Infos translation={translation?.data} />
        </div>
        <div className="min-w-[100px] bg-white hidden lg:block"></div>
      </div>
    </div>
  );
}

export default Video;
