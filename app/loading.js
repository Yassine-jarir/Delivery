import Image from "next/image";

// Logo
import Logo from "@/public/images/IMG/Logo.png";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src={Logo}
        className="w-[200px] animate-bounce"
        alt="Ameex Loader"
      />
    </div>
  );
}
