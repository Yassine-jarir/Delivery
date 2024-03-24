import styles from "@/styles/home page/services-section/serviceLink.module.css";
import Image from "next/image";
import Link from "next/link";

function Service({ service }) {
  return (
    <Link
      href={service?.navigateTo}
      className={`max-w-[200px] max-h-[170px] sm:h-[170px] h-[150px] sm:w-[200px] w-full flex flex-col justify-center items-center gap-1 bg-darkBlue sm:p-4 p-2 rounded-2xl relative overflow-hidden z-10 ${styles?.service}`}
    >
      <Image
        src={service?.icon}
        className="w-[80px] max-h-[60px] object-contain"
        alt={service?.title}
      />
      <span className="text-white text-center lg:text-base text-sm">
        {service?.title}
      </span>
    </Link>
  );
}

export default Service;
