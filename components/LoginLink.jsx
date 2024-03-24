import Link from "next/link";
import Image from "next/image";

// icons
import loginIcon from "@/public/images/Icons/icon6.svg";

export default function LoginLink({ isRTL, translation }) {
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="text-[var(--main-blue-color)] h-10 w-10 sm:w-auto sm:rounded-full rounded-lg bg-white font-extrabold hover:opacity-90 duration-300"
    >
      <Link
        href=""
        className="w-full h-full flex justify-center items-center sm:px-3"
      >
        <Image src={loginIcon} className="sm:w-7 w-8" alt="Sign in" />
        <span className="sm:block hidden">{translation}</span>
      </Link>
    </div>
  );
}
