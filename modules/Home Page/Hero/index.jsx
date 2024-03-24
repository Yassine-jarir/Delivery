import Image from "next/image";
import style from "@/styles/home page/hero-section/mainBG.module.css";

// images
import memberAmeex from "@/public/images/IMG/IMG 3.webp";

// components
import Services from "./_components/Services";
import OpeningSpeech from "./_components/OpeningSpeech";
import SignUpButton from "../../../components/SignUpButton";

export default function main({ isRTL, lang, translation, globalTranslation }) {
  return (
    <div
      className={`${style.mainBG} h-[75vh] min-h-[550px] max-h-[750px] w-full flex items-center justify-center relative lg:py-16 py-5 sm:px-5 px-2 overflow-hidden`}
    >
      <div className={`${style.whiteShadow}`}></div>
      <div className="max-w-[1400px] w-full h-full flex lg:flex-row flex-col-reverse lg:justify-between justify-start items-center lg:gap-0 gap-5 relative z-50">
        <Services
          isRTL={isRTL}
          lang={lang}
          translation={globalTranslation?.services}
        />

        <div className="lg:h-[70%] w-full flex flex-col lg:justify-between justify-center items-center gap-10 lg:px-16 relative">
          <Image
            src={memberAmeex}
            className="absolute bottom-0 w-fit max-w-[480px] z-0 lg:hidden block"
            alt="Ameex Member"
          />

          <div className="w-full h-full flex flex-col lg:justify-between justify-center items-center gap-10 z-10">
            <OpeningSpeech translation={translation?.attraction_sentence} />
            <SignUpButton translation={globalTranslation?.sign_up} />
          </div>
        </div>
      </div>
      <Image
        src={memberAmeex}
        className={`absolute bottom-0 ${
          isRTL ? "scale-x-[-1] left-0" : "scale-x-1 right-0"
        } w-fit max-w-[600px] z-0 hidden lg:block`}
        alt="Ameex Member"
      />
    </div>
  );
}
