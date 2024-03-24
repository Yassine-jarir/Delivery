import Image from "next/image";
import urlFor from "@/sanity/client";

// utils
import truncatedDescription from "@/utils/truncatedDescription";

export default function Feature({ index, feature, lang, isRTL }) {
  return (
    <div className="group w-[300px] h-[500px] bg-white/10 text-center rounded-3xl flex flex-col justify-end items-center gap-3 relative">
      {/* Number */}
      <span
        className={`absolute -top-16 ${
          isRTL ? "right-5" : "left-5"
        } text-9xl font-extrabold text-[var(--main-orange-color)] group-hover:scale-[1.1] group-hover:drop-shadow-xl duration-300`}
      >
        {index + 1}
      </span>
      <div className="h-[40%] flex flex-col justify-end items-center gap-3">
        {/* icon */}
        <div>
          {feature?.icon && (
            <Image
              src={urlFor(feature?.icon)?.url()}
              width={1000}
              height={1000}
              className="w-[80px]"
              alt="test"
            />
          )}
        </div>

        {/* Title */}
        <h2 className="w-[85%] font-bold text-2xl">
          {lang === "ar"
            ? feature?.title?.ar
            : lang === "fr"
            ? feature?.title?.fr
            : lang === "en"
            ? feature?.title?.en
            : ""}
        </h2>
      </div>

      {/* Line */}
      <div className="w-[75%] border-t-2 border-solid border-[var(--main-orange-color)]" />

      {/* Description */}
      <p className="w-[90%] h-[55%] text-lg font-light">
        {truncatedDescription(
          lang === "ar"
            ? feature?.description?.ar
            : lang === "fr"
            ? feature?.description?.fr
            : lang === "en"
            ? feature?.description?.en
            : "",
          230
        )}
      </p>
    </div>
  );
}
