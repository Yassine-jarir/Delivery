"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { i18n } from "@/i18n";

// icons
import worldIcon from "@/public/images/Icons/icon8.svg";
import chevronBottomIcon from "@/public/images/Icons/icon9.svg";
import usIcon from "@/public/images/Icons/Langs/us.svg";
import frIcon from "@/public/images/Icons/Langs/fr.svg";
import maIcon from "@/public/images/Icons/Langs/ma.svg";
import checkedIcon from "@/public/images/Icons/icon45.svg";

export default function Languages({ background, top, currentLang, isRTL }) {
  const [currentLanguage, setCurrentLanguage] = useState(currentLang);
  const [buttonClicked, setButtonClicked] = useState(false);
  const languages = i18n.locales;

  // to close the dropdown when user clicks outside of it
  const languageContainer = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setButtonClicked(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(languageContainer);

  // pathname
  const pathname = usePathname();
  return (
    <div ref={languageContainer} className="relative">
      <button
        onClick={() => setButtonClicked((prev) => !prev)}
        className={`${background} h-10 rounded-lg text-white px-2 flex items-center justify-center gap-1 hover:opacity-90 duration-300`}
      >
        <Image src={worldIcon} className="w-7" alt="Switch language" />
        <span className="uppercase">{currentLanguage}</span>
        <Image
          src={chevronBottomIcon}
          className={`w-3 ${buttonClicked ? "scale-[-1]" : "scale-1"}`}
          alt="chevron bottom"
        />
      </button>

      {buttonClicked && (
        <ul
          className={`absolute ${top ? "bottom-14" : "top-14"} ${
            isRTL && !top ? "left-0" : "right-0"
          } w-[250px] h-auto bg-white z-[99] rounded-lg shadow-2xl`}
        >
          {languages?.map((item, key) => (
            <Fragment key={key}>
              <li
                className={`h-12 px-5 flex justify-center items-center ${
                  item === currentLanguage
                    ? "text-[var(--main-blue-color)]"
                    : "text-gray-800"
                } ${
                  key === 0
                    ? "rounded-t-lg"
                    : key === languages?.length - 1
                    ? "rounded-b-lg"
                    : null
                }`}
              >
                <Link
                  href={`/${item}/${pathname?.slice(4)}`}
                  onClick={() => setCurrentLanguage(item)}
                  className="w-full flex justify-between items-center gap-2"
                >
                  <div className="w-full flex items-center gap-7">
                    <Image
                      src={
                        item === "ar"
                          ? maIcon
                          : item === "en"
                          ? usIcon
                          : item === "fr"
                          ? frIcon
                          : ""
                      }
                      className="w-5 rounded-full object-cover"
                      alt={item}
                    />
                    <span className="font-light">
                      {item === "ar"
                        ? "Arabic"
                        : item === "en"
                        ? "English"
                        : item === "fr"
                        ? "French"
                        : ""}
                    </span>
                  </div>

                  {item === currentLanguage && (
                    <Image
                      src={checkedIcon}
                      className={`w-4`}
                      alt="check icon"
                    />
                  )}
                </Link>
              </li>
              {key !== languages?.length - 1 && (
                <div className="w-full flex justify-center items-center">
                  <div className="w-[70%] border-t border-solid border-gray-100" />
                </div>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}
