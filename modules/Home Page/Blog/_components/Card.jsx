import Link from "next/link";
import Image from "next/image";
import urlFor from "@/sanity/client";

// utils
import truncatedDescription from "@/utils/truncatedDescription";

// icons
import imgIcon from "@/public/images/Icons/icon51.svg";

function Card({ lang, blog, translation }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[330px] h-[450px] rounded-3xl sm:p-8 p-5 bg-white flex flex-col justify-between items-center gap-2">
        {/* Blog Picture */}
        <div className="w-full h-[150px] bg-[var(--main-blue-color)] rounded-xl overflow-hidden flex justify-center items-center">
          {blog?.picture ? (
            <Image
              src={urlFor(blog?.picture)?.url()}
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              alt={blog?.title?.en}
            />
          ) : (
            <Image
              src={imgIcon}
              className="w-[50px] object-contain"
              alt="img icon"
            />
          )}
        </div>

        {/* Blog Title */}
        <h2 className="w-full text-[var(--main-orange-color)] text-2xl font-bold">
          {lang === "ar"
            ? blog?.title?.ar
            : lang === "fr"
            ? blog?.title?.fr
            : lang === "en"
            ? blog?.title?.en
            : ""}
        </h2>

        {/* Blog Description */}
        <p className="text-sm text-[var(--main-blue-color)]">
          {truncatedDescription(
            lang === "ar"
              ? blog?.description?.ar
              : lang === "fr"
              ? blog?.description?.fr
              : lang === "en"
              ? blog?.description?.en
              : "",
            200
          )}
        </p>

        {/* Blog Button */}
        <div className="w-full flex justify-end text-sm">
          <Link
            href=""
            className="text-white bg-[var(--main-orange-color)] rounded-lg py-1 px-4 hover:opacity-95 duration-300"
          >
            {translation}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
