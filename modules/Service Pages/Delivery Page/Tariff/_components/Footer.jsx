import React from "react";

export default function Footer({ translation }) {
  return (
    <div className="bg-[var(--main-blue-color)] text-center flex flex-col items-center gap-8 py-16 sm:px-5 px-2">
      <p className="max-w-[800px] text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-light">
        {translation?.description}
      </p>
      <button className="max-w-[700px] md:w-full w-fit bg-[var(--main-orange-color)] text-white sm:px-16 px-10 py-2 rounded-full md:text-2xl text-xl hover:opacity-95 duration-300">
        {translation?.button}
      </button>
    </div>
  );
}
