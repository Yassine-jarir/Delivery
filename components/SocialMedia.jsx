import Link from "next/link";
import Image from "next/image";

// icons
import linkedinWhiteIcon from "@/public/images/Icons/icon3.svg";
import instagramWhiteIcon from "@/public/images/Icons/icon4.svg";
import facebookWhiteIcon from "@/public/images/Icons/icon5.svg";

import linkedinBlueIcon from "@/public/images/Icons/icon47.svg";
import instagramBlueIcon from "@/public/images/Icons/icon48.svg";
import facebookBlueIcon from "@/public/images/Icons/icon49.svg";

export default function SocialMedia({ background, color }) {
  const socialMedia = [
    {
      icon: color === "white" ? linkedinWhiteIcon : linkedinBlueIcon,
      link: "",
      alt: "Linked in",
    },
    {
      icon: color === "white" ? instagramWhiteIcon : instagramBlueIcon,
      link: "",
      alt: "Instagram",
    },
    {
      icon: color === "white" ? facebookWhiteIcon : facebookBlueIcon,
      link: "",
      alt: "Facebook",
    },
  ];
  return (
    <ul className="flex gap-1">
      {socialMedia?.map((item, key) => (
        <li
          key={key}
          className={`flex justify-center items-center ${background} rounded-lg w-10 h-10 hover:opacity-90 duration-300`}
        >
          <Link
            href={item?.link}
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            <Image src={item?.icon} className="w-7" alt={item?.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
