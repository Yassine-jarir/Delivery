"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ScrollLinkMobile({ lang, item, setButtonClicked }) {
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  return (
    <>
      {isHomePage && item?.inHomePage ? (
        <ScrollLink
          to={item?.navigateTo ? item?.navigateTo : ""}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setButtonClicked(false)}
          className="w-full flex justify-center items-center gap-1 px-3 py-2 cursor-pointer"
        >
          <Image src={item?.icon} className="w-[25px]" alt={item?.label} />
          <span>{item?.label}</span>
        </ScrollLink>
      ) : (
        <Link
          href={`/${lang}/#${item?.navigateTo}`}
          onClick={() => setButtonClicked(false)}
          className="w-full flex justify-center items-center gap-1 px-3 py-2"
        >
          <Image src={item?.icon} className="w-[25px]" alt={item?.label} />
          <span>{item?.label}</span>
        </Link>
      )}
    </>
  );
}
