"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ScrollLinkDesktop({ lang, item }) {
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
          className="h-full flex items-center gap-1 xl:px-3 px-2 group-hover:bg-white/10 hover:bg-white/10 cursor-pointer"
        >
          <Image src={item?.icon} className="w-[18px]" alt={item?.label} />
          <span>{item?.label}</span>
        </ScrollLink>
      ) : (
        <Link
          href={`/${lang}/#${item?.navigateTo}`}
          className="h-full flex items-center gap-1 xl:px-3 px-2 group-hover:bg-white/10 hover:bg-white/10"
        >
          <Image src={item?.icon} className="w-[18px]" alt={item?.label} />
          <span>{item?.label}</span>
        </Link>
      )}
    </>
  );
}
