"use client";
import Image from "next/image";
import styles from "@/styles/FAQ-section/FAQ.module.css";

// icons
import chevronIcon from "@/public/images/Icons/icon42.svg";
import { useState } from "react";

export default function FAQ({ index, FAQ, lang }) {
  const [showAnswer, setShowAnswer] = useState(index === 0 ? true : false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Question */}
      <button
        onClick={() => setShowAnswer((prev) => !prev)}
        className={`w-full ${
          showAnswer
            ? "bg-[var(--main-orange-color)]"
            : "bg-[var(--main-blue-color)]"
        } text-white sm:text-2xl text-lg sm:px-16 px-5 py-4 sm:rounded-full rounded-[30px] flex justify-between items-center gap-2`}
      >
        <span className="text-start">
          {lang === "ar"
            ? FAQ?.question?.ar
            : lang === "fr"
            ? FAQ?.question?.fr
            : lang === "en"
            ? FAQ?.question?.en
            : ""}
        </span>
        <Image
          src={chevronIcon}
          className={`sm:w-[35px] w-[20px] ${
            showAnswer ? "scale-[-1]" : "scale-1"
          }`}
          alt="chevron icon"
        />
      </button>

      {/* Answer */}
      <div
        className={`sm:w-[90%] w-[80%] bg-gray-100 rounded-b-3xl py-7 sm:px-16 px-5 text-center text-[var(--main-blue-color)] sm:text-lg text-base ${
          showAnswer ? styles.fadeIn : styles.hidden
        }`}
      >
        <p>
          {lang === "ar"
            ? FAQ?.answer?.ar
            : lang === "fr"
            ? FAQ?.answer?.fr
            : lang === "en"
            ? FAQ?.answer?.en
            : ""}
        </p>
      </div>
    </div>
  );
}
