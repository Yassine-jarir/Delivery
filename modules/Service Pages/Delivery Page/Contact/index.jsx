import Image from "next/image";
import styles from "@/styles/contact-section/mainBG.module.css";

// images
import memberPic from "@/public/images/IMG/IMG 5.webp";

// components
import Header from "./_components/Header";
import Form from "./_components/Form";

export default function main({
  isRTL,
  translation,
  globalTranslation,
  deliveryTranslation,
}) {
  return (
    <div
      className={`${styles.mainBG} h-auto min-h-[700px] w-full flex items-center justify-center sm:py-16 py-10 sm:px-5 px-2 relative overflow-hidden`}
    >
      <div className={`${styles.whiteShadow}`}></div>
      <div className="max-w-[1400px] w-full h-full flex lg:flex-row flex-col justify-between lg:items-start items-center relative z-50">
        <div className="flex flex-col gap-5">
          <div className="block lg:hidden">
            <Header isRTL={isRTL} translation={deliveryTranslation?.title} />
          </div>
          <Image
            src={memberPic}
            className="max-w-full sm:h-[600px] h-[350px] lg:hidden block object-cover"
            alt="Ameex Memeber"
          />
        </div>

        <div className="flex flex-col gap-32">
          <div className="hidden lg:block">
            <Header isRTL={isRTL} translation={deliveryTranslation?.title} />
          </div>

          <Form
            isRTL={isRTL}
            translation={translation?.form}
            deliveryTranslation={deliveryTranslation?.form}
            notificationTranslation={globalTranslation?.notification}
          />
        </div>
      </div>
      <Image
        src={memberPic}
        className={`absolute bottom-0 ${
          isRTL ? "-right-24 scale-x-[-1]" : "-left-24 scale-x-1"
        } w-full max-w-[1200px] z-10 hidden lg:block`}
        alt="Ameex Member"
      />
    </div>
  );
}
