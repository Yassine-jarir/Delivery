import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import ScrollLinkDesktop from "./ScrollLinkDesktop";

// icons
import flesh from "@/public/images/Icons/icon25.svg";

// Ameex Logo
import logo from "@/public/images/IMG/Logo.png";

export default function NavbarRoutes({ lang, nav, isRTL }) {
  return (
    <div className="h-[10vh] max-h-[100px] min-h-[70px] w-full flex items-end justify-center sm:px-5 px-2">
      <div
        className={`max-w-[1400px] w-full flex ${
          isRTL ? "justify-end" : "justify-start"
        } lg:justify-between items-start`}
      >
        {/* Logo */}
        <Link href={`/${lang}`}>
          <Image
            src={logo}
            className="object-cover xl:w-[180px] lg:w-[140px] w-[180px]"
            alt="Ameex Logo"
          />
        </Link>

        {/* Nav */}
        <nav className="lg:flex items-center relative hidden">
          <div
            className={`absolute ${
              isRTL
                ? "xl:-right-[78px] -right-[60px]"
                : "xl:-left-[78px] -left-[60px]"
            }`}
          >
            <Image
              src={flesh}
              className={`max-h-[40px] object-cover ${
                isRTL ? "scale-[-1]" : "scale-1"
              } xl:w-[100px] w-[80px]`}
              alt="Flesh"
            />
          </div>

          <ul className="flex items-center xl:text-sm text-xs text-white h-[40px]">
            {nav?.map((item, key) => (
              <Fragment key={key}>
                {key === 0 ? (
                  <li className="group h-full flex items-center">
                    <div
                      className={`h-full w-[15px] bg-[var(--main-blue-color)] relative after:content-[''] after:absolute after:inset-0 after:group-hover:bg-white/10 ${
                        isRTL
                          ? "-left-[1px] scale-[-1]"
                          : "-right-[1px] scale-1"
                      }`}
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 0 100%, 100% 50%)",
                      }}
                    />
                    <div
                      className={`h-full bg-[var(--main-blue-color)] flex justify-center items-center min-w-fit`}
                    >
                      <ScrollLinkDesktop lang={lang} item={item} />
                    </div>
                  </li>
                ) : (
                  <li
                    className={`h-full bg-[var(--main-blue-color)] flex justify-center items-center min-w-fit`}
                  >
                    <ScrollLinkDesktop lang={lang} item={item} />
                  </li>
                )}

                {key !== nav?.length - 1 && (
                  <li className="h-full bg-[var(--main-blue-color)] flex justify-center items-center">
                    <div
                      className={`h-[70%] border-r border-white border-solid`}
                    />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>

          <div
            className={`h-[40px] xl:w-[15px] w-[10px] bg-[var(--main-orange-color)] ${
              isRTL ? "xl:mr-2 mr-1" : "xl:ml-2 ml-1"
            }`}
          />
        </nav>
      </div>
    </div>
  );
}
