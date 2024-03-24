import styles from "@/styles/Service page/Delivery Page/InteractiveMap/mainBG.module.css";

// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Map from "./_components/Map";

export default function index({ translation }) {
  return (
    <div className="relative">
      {/* Top Bar */}
      <div className=" w-full lg:flex hidden justify-center absolute top-0">
        <div className="w-[85%] h-4 bg-[var(--main-orange-color)] rounded-full -mt-2 z-10 relative" />
      </div>
      <div
        id="InteractiveMap"
        className={`${styles.mainBG} lg:h-screen min-h-[680px] lg:max-h-[750px] w-full flex justify-center items-center relative pt-16 lg:pt-0`}
      >
        <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-10">
          <div className="flex flex-col justify-center itmes-center gap-3 text-center max-w-[450px]">
            <Header translation={translation?.title} />
            <Description translation={translation?.description} />
          </div>
          <Map translation={translation?.cities} />
        </div>
      </div>
    </div>
  );
}
