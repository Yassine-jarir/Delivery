// components
import Header from "./_components/Header";
import RightHalf from "./_components/RightHalf";
import LeftHalf from "./_components/LeftHalf";

export default function index({ isRTL, translation }) {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Header translation={translation?.title} />

      <div className="w-full flex lg:flex-row flex-col justify-center items-center text-white">
        <LeftHalf isRTL={isRTL} translation={translation?.quick_delivery} />
        <RightHalf
          isRTL={isRTL}
          translation={translation?.real_time_tracking}
        />
      </div>
    </div>
  );
}
