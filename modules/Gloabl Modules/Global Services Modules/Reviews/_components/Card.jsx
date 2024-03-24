import Image from "next/image";

// icons
import userIcon from "@/public/images/Icons/icon53.svg";

// sanity image
import urlFor from "@/sanity/client";

export default function Card({ lang, active, review }) {
  return (
    <div className="w-full flex justify-center items-center py-10 text-white">
      <div
        className={`max-w-[350px] w-full h-[500px] ${
          active && "sm:scale-[1.15]"
        }  rounded-[30px] bg-[var(--main-blue-color)] ${
          !active &&
          "relative before:content-[''] before:absolute before:inset-0 before:bg-white/85"
        } flex flex-col justify-center items-center gap-5 p-5`}
      >
        {/* Picture */}
        {review?.picture ? (
          <Image
            src={urlFor(review?.picture)?.url()}
            className="sm:size-[180px] size-[150px] rounded-full object-cover"
            width={500}
            height={500}
            alt="Card picture"
          />
        ) : (
          <div className="sm:size-[180px] size-[150px] bg-white rounded-full flex justify-center items-center">
            <Image src={userIcon} className="w-full" alt="Card picutre" />
          </div>
        )}

        {/* Name */}
        <h1 className="sm:text-2xl text-xl text-center">
          {lang === "ar"
            ? review?.first_name?.ar
            : lang === "fr"
            ? review?.first_name?.fr
            : lang === "en"
            ? review?.first_name?.en
            : ""}{" "}
          {lang === "ar"
            ? review?.last_name?.ar
            : lang === "fr"
            ? review?.last_name?.fr
            : lang === "en"
            ? review?.last_name?.en
            : ""}
        </h1>

        {/* Description */}
        <p className="text-center sm:line-clamp-[7] line-clamp-[9] sm:text-base text-sm font-light">
          {lang === "ar"
            ? review?.statement?.ar
            : lang === "fr"
            ? review?.statement?.fr
            : lang === "en"
            ? review?.statement?.en
            : ""}
        </p>
      </div>
    </div>
  );
}
