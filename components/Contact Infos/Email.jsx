import Image from "next/image";
import Link from "next/link";

// icons
import gmailIcon from "@/public/images/Icons/icon43.svg";

export default function Email() {
  const gmail = "Contact@ameex.ma";
  return (
    <Link href={`mailto:${gmail}`} className="w-fit flex items-center gap-2">
      <Image src={gmailIcon} className="w-7" alt="Phone Number" />
      <span>{gmail}</span>
    </Link>
  );
}
