import Image from "next/image";
import Link from "next/link";

// icons
import positionIcon from "@/public/images/Icons/icon1.svg";

export default function Address({ translation }) {
  const address = translation;
  return (
    <Link
      href="https://maps.app.goo.gl/XBykfpBp2u35prg38"
      target="_blank"
      className="w-fit flex items-center gap-2"
    >
      <Image src={positionIcon} className="w-7" alt="Address" />
      <span>{address}</span>
    </Link>
  );
}
