import Image from "next/image";
import Link from "next/link";

// icons
import phoneIcon from "@/public/images/Icons/icon2.svg";

export default function PhoneNumber() {
  const phoneNumber = "06 55 44 22 33";
  return (
    <Link href={`tel:${phoneNumber}`} className="w-fit flex items-center gap-2">
      <Image src={phoneIcon} className="w-7" alt="Phone Number" />
      <span dir="ltr">{phoneNumber}</span>
    </Link>
  );
}
