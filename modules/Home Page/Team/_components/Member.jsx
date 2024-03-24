import Image from "next/image";
import urlFor from "@/sanity/client";

// utils
import truncatedDescription from "@/utils/truncatedDescription";

// icons
import fleshIcon from "@/public/images/Icons/icon24.svg";
import userIcon from "@/public/images/Icons/icon41.svg";

export default function Member({ lang, member, isRTL }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:min-w-fit lg:w-full w-fit max-w-[350px] lg:max-w-full lg:h-[350px] h-auto flex lg:flex-row flex-col items-center xl:gap-10 lg:gap-5 bg-[var(--main-orange-color)] lg:bg-transparent lg:rounded-none rounded-[40px]">
        {/* Picture */}
        <div
          className={`h-[350px] max-h-[350px] min-h-[350px] sm:w-[350px] max-w-[350px] sm:min-w-[350px] w-full relative ${
            member?.picture
              ? "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[var(--main-blue-color)] after:to-transparent after:from-0% after:to-70% after:rounded-[40px]"
              : ""
          }`}
        >
          {member?.picture ? (
            <Image
              src={urlFor(member?.picture)?.url()}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[40px]"
              alt="Member"
            />
          ) : (
            <div className="w-full h-full bg-[var(--main-blue-color)] flex justify-center items-center rounded-[40px]">
              <Image
                src={userIcon}
                className="w-[150px] object-contain"
                alt="Member"
              />
            </div>
          )}
        </div>

        <div
          className={`lg:bg-[var(--main-blue-color)] text-white lg:w-[65%] sm:w-[350px] h-full flex flex-col justify-center lg:gap-5 gap-3 ${
            isRTL ? "lg:rounded-bl-[150px]" : "lg:rounded-br-[150px]"
          } rounded-[40px] xl:p-10 lg:p-5 sm:p-10 p-5 relative`}
        >
          {/* Flesh */}
          <div
            className={`lg:block hidden absolute ${
              isRTL ? "-left-16 scale-x-[-1]" : "-right-16 scale-x-1"
            } top-[50%] -translate-y-[50%]`}
          >
            <Image
              src={fleshIcon}
              className="xl:w-[250px] w-[200px]"
              alt="flesh"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            {/* Name */}
            <div>
              <h1 className="font-bold text-4xl">
                {lang === "ar"
                  ? member?.name?.ar
                  : lang === "fr"
                  ? member?.name?.fr
                  : lang === "en"
                  ? member?.name?.en
                  : ""}
              </h1>
            </div>

            {/* Job Position */}
            <div>
              <h2 className="font-bold text-xl">
                {lang === "ar"
                  ? member?.job_position?.ar
                  : lang === "fr"
                  ? member?.job_position?.fr
                  : lang === "en"
                  ? member?.job_position?.en
                  : ""}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-[80%] w-full xl:text-lg text-base font-light">
            <p>
              {truncatedDescription(
                lang === "ar"
                  ? member?.description?.ar
                  : lang === "fr"
                  ? member?.description?.fr
                  : lang === "en"
                  ? member?.description?.en
                  : "",
                430
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
