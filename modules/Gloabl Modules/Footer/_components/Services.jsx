"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Services({ lang, translation }) {
  const services = [
    {
      label: translation?.delivery,
      navigateTo: "delivery",
    },
    {
      label: translation?.call_center,
      navigateTo: "call_center",
    },
    {
      label: translation?.warehousing,
      navigateTo: "warehouse",
    },
    {
      label: translation?.marketplace,
      navigateTo: "market_place",
    },
  ];

  // pathname
  const pathname = usePathname();
  return (
    <div className="lg:w-[45%] bg-[var(--main-orange-color)] flex justify-center items-center py-10 lg:py-0 px-2">
      <div className="sm:w-[500px] w-full flex flex-col gap-3">
        <h2 className="font-bold capitalize text-lg">{translation?.title}</h2>
        <ul className="font-light text-sm flex flex-col gap-2">
          {services?.map((item, key) => (
            <li key={key}>
              <Link
                href={`/${lang}/${item?.navigateTo}`}
                className={`hover:underline underline-offset-1 decoration-1 ${
                  pathname === `/${lang}/${item?.navigateTo}` && "underline"
                }`}
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
