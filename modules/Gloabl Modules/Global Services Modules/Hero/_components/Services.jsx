import Image from "next/image";
import Link from "next/link";

// style
import styles from "@/styles/home page/hero-section/serviceLink.module.css";
import fleshStyle from "@/styles/Service page/Global/hero-section.module.css";

// icons
import deliveryIcon from "@/public/images/Icons/icon17.svg";
import callCenterIcon from "@/public/images/Icons/icon18.svg";
import storageIcon from "@/public/images/Icons/icon19.svg";
import marketplaceIcon from "@/public/images/Icons/icon20.svg";
import flesh from "@/public/images/Icons/icon25.svg";

export default function Services({ isRTL, active, translation }) {
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
        <li key={key} className="relative">
          <Link
            href={item?.navigateTo}
            className={`lg:min-w-[280px] lg:max-w-[280px] md:min-w-[220px] md:max-w-[220px] rounded-full lg:py-7 py-5 sm:px-5 px-2 text-white lg:text-2xl md:text-xl text-lg font-light flex justify-center items-center sm:gap-2 gap-1 relative ${
              item?.navigateTo === active
                ? "bg-[var(--main-blue-color)]"
                : "bg-[var(--main-orange-color)]"
            } ${item?.navigateTo !== active && styles.service}  ${
              isRTL ? styles.rtl : styles.ltr
            } overflow-hidden`}
            style={{ animationDelay: `${key * 300}ms` }}
          >
            <Image src={item?.icon} className="w-7" alt={item?.label} />
            <span className="relative z-50">{item?.label}</span>
          </Link>
          {item?.navigateTo === active && (
            <Image
              src={flesh}
              className={`${fleshStyle?.flesh} ${
                isRTL ? fleshStyle?.rtl : fleshStyle?.ltr
              } lg:block hidden absolute top-[50%] -translate-y-[50%] ${
                isRTL
                  ? "scale-x-[-1] lg:-left-[80px] sm:left-10 left-5"
                  : "scale-x-1 lg:-right-[80px] sm:right-10 right-5"
              } lg:w-[150px] w-[100px] z-10`}
              alt="flesh"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
