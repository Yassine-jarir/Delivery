import Link from "next/link";
import Image from "next/image";

// icons
import signupIcon from "@/public/images/Icons/icon7.svg";

export default function SignUpLink() {
  return (
    <div className="h-10 w-10 rounded-lg bg-white font-bold hover:opacity-90 duration-300">
      <Link href="" className="w-full h-full flex justify-center items-center">
        <Image src={signupIcon} className="w-8" alt="Sign up" />
      </Link>
    </div>
  );
}
