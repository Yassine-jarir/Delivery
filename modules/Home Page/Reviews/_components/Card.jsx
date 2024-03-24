import Image from "next/image";
import urlFor from "@/sanity/client";

// utils
import truncatedDescription from "@/utils/truncatedDescription";

// icons
import userIcon from "@/public/images/Icons/icon41.svg";

function Card({ review, lang }) {
  return (
    <div className="max-w-[310px] w-full h-[420px] rounded-[30px] sm:shadow-[0_0_40px_rgba(0,0,0,0.3)] shadow-[0_0_16px_rgba(0,0,0,0.3)] flex flex-col gap-5 sm:p-5 px-2 py-5 bg-white lg:-mt-10 z-50">
      <div className="flex flex-col pt-5">
        <div className="flex items-center justify-center gap-4">
          <div className="w-20 h-20 bg-[var(--main-orange-color)] rounded-full flex justify-center items-center">
            {review?.picture ? (
              <Image
                src={urlFor(review?.picture)?.url()}
                width={150}
                height={150}
                className="w-full h-full object-cover rounded-full"
                alt="flesh"
              />
            ) : (
              <Image
                src={userIcon}
                className="w-full object-contain"
                alt="flesh"
              />
            )}
          </div>

          <p className="text-2xl text-[var(--main-orange-color)] flex flex-col">
            <span>
              {lang === "ar"
                ? review?.first_name?.ar
                : lang === "fr"
                ? review?.first_name?.fr
                : lang === "en"
                ? review?.first_name?.en
                : ""}
            </span>
            <span>
              {lang === "ar"
                ? review?.last_name?.ar
                : lang === "fr"
                ? review?.last_name?.fr
                : lang === "en"
                ? review?.last_name?.en
                : ""}
            </span>
          </p>
        </div>
      </div>
      <div className="text-lg text-center text-[var(--main-blue-color)] px-2">
        {truncatedDescription(
          lang === "ar"
            ? review?.statement?.ar
            : lang === "fr"
            ? review?.statement?.fr
            : lang === "en"
            ? review?.statement?.en
            : "",
          230
        )}
      </div>
    </div>
  );
}

export default Card;
