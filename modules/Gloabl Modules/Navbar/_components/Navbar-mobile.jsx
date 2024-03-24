"use client";
import styles from "@/styles/Navbar/navbar-mobile.module.css";
import { Fragment, useState } from "react";
import Image from "next/image";

// icons
import barIcon from "@/public/images/Icons/icon44.svg";
import xIcon from "@/public/images/Icons/icon46.svg";

// components
import ScrollLinkMobile from "./ScrollLinkMobile";

export default function NavbarMobile({ lang, nav }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="lg:hidden block">
      <button
        onClick={() => setButtonClicked((prev) => !prev)}
        className="bg-white/20 rounded-xl h-14 w-14 flex justify-center items-center"
      >
        <Image src={barIcon} className="w-[30px]" alt="bar icon" />
      </button>

      {buttonClicked && (
        <nav
          className={`${styles.navbarMobile} fixed top-0 right-0 h-screen sm:w-[400px] w-[85%] bg-[var(--main-orange-color)] text-white z-[999] shadow-[0_0_32px_rgba(0,0,0,0.5)]`}
        >
          <div
            dir="ltr"
            className="h-[15vh] min-h-[100px] w-full flex items-center justify-end sm:px-5 px-2"
          >
            {/* Close button */}
            <button
              onClick={() => setButtonClicked((prev) => !prev)}
              className="bg-white/20 rounded-xl h-14 w-14 flex justify-center items-center"
            >
              <Image src={xIcon} className="w-[30px]" alt="bar icon" />
            </button>
          </div>

          {/* Nav */}
          <ul className="text-xl font-light text-center flex flex-col gap-2">
            {nav?.map((item, key) => (
              <Fragment key={key}>
                <li className="w-full">
                  <ScrollLinkMobile
                    lang={lang}
                    item={item}
                    setButtonClicked={setButtonClicked}
                  />
                </li>
                {key !== nav?.length - 1 && (
                  <div className="w-full border-t-2 border-solid border-gray-50/50" />
                )}
              </Fragment>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
