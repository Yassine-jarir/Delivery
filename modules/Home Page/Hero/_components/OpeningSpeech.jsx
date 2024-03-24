import styles from "@/styles/home page/hero-section/openingspeech.module.css";
import Image from "next/image";

// icons
import flesh from "@/public/images/Icons/icon21.svg";

export default function OpeningSpeech({ translation }) {
  return (
    <div className="lg:w-full">
      <div
        className={`w-fit flex flex-col bg-white rounded-2xl px-10 py-4 text-xl shadow-xl relative`}
      >
        <div className="absolute -top-[45px] left-[50%] -translate-x-[50%]">
          <Image
            src={flesh}
            className={`w-[70px] ${styles.openingSpeechFlesh}`}
            alt="Flesh"
          />
        </div>

        <span className={`text-[var(--main-blue-color)] text-center`}>
          {translation?.line_one} <br /> {translation?.line_two}
        </span>
        <span className="text-[var(--main-orange-color)] font-bold">
          {translation?.line_three}
        </span>
      </div>
    </div>
  );
}
