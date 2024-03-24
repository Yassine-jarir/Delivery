import Image from "next/image";

// icons
import xIcon from "@/public/images/Icons/icon52.svg";

export default function Notification({
  title,
  message,
  color,
  setIsNotifyActive,
  isRTL,
}) {
  return (
    <div
      className={`fixed sm:top-5 top-2 sm:right-5 right-2 w-[300px] h-[60px] flex justify-between bg-white text-black rounded-lg shadow-[0_0_16px_rgba(0,0,0,0.19)] p-2 ${
        isRTL ? "border-r-8" : "border-l-8"
      } ${color} border-solid z-[9999]`}
    >
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="text-xs">{message}</span>
      </div>

      <button onClick={() => setIsNotifyActive(false)} className="w-fit h-fit">
        <Image src={xIcon} className="w-[15px]" alt="close Alert icon" />
      </button>
    </div>
  );
}
