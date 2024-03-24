import Image from "next/image";
import Link from "next/link";

// style
import styles from "@/styles/home page/hero-section/serviceLink.module.css";

// icons
import deliveryIcon from "@/public/images/Icons/icon17.svg";
import callCenterIcon from "@/public/images/Icons/icon18.svg";
import storageIcon from "@/public/images/Icons/icon19.svg";
import marketplaceIcon from "@/public/images/Icons/icon20.svg";

export default function Services({ lang, isRTL, translation }) {
  const services = [
    {
      icon: deliveryIcon,
      label: translation?.delivery,
      navigateTo: "delivery",
    },
    {
      icon: callCenterIcon,
      label: translation?.call_center,
      navigateTo: "call_center",
    },
    {
      icon: storageIcon,
      label: translation?.warehousing,
      navigateTo: "warehouse",
    },
    {
      icon: marketplaceIcon,
      label: translation?.marketplace,
      navigateTo: "market_place",
    },
  ];
  return (
    <ul className="lg:flex lg:flex-col grid grid-cols-2 justify-center items-center gap-2 min-w-fit">
      {services?.map((item, key) => (
        <li key={key}>
          <Link
            href={`${lang}/${item?.navigateTo}`}
            className={`lg:min-w-[280px] lg:max-w-[280px] md:min-w-[220px] md:max-w-[220px] rounded-full bg-[var(--main-orange-color)] lg:py-7 py-5 sm:px-5 px-2 text-white lg:text-2xl md:text-xl text-lg font-light flex justify-center items-center sm:gap-2 gap-1  z-10 relative overflow-hidden ${
              styles.service
            } ${isRTL ? styles.rtl : styles.ltr}`}
            style={{ animationDelay: `${key * 300}ms` }}
          >
            <Image src={item?.icon} className="w-7" alt={item?.label} />
            {item?.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
