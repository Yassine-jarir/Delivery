import style from "@/styles/home page/hero-section/mainBG.module.css";

// components
import Services from "./_components/Services";
import Video from "./_components/Video";

export default function main({ isRTL, active, globalTranslation }) {
  return (
    <div
      className={`${style.mainBG} h-[75vh] min-h-[550px] max-h-[750px] w-full flex items-center justify-center relative lg:py-16 py-5 overflow-hidden`}
    >
      <div className={`${style.whiteShadow}`}></div>
      <div className="max-w-[1400px] w-full h-full flex lg:flex-row flex-col-reverse lg:justify-between justify-start items-center lg:gap-16 gap-5 relative z-50 sm:px-5 px-2">
        <Services
          isRTL={isRTL}
          active={active}
          translation={globalTranslation?.services}
        />
        <Video isRTL={isRTL} translation={globalTranslation?.sign_up} />
      </div>
    </div>
  );
}
