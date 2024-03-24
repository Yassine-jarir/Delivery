import Address from "@/components/Contact Infos/Address";
import Email from "@/components/Contact Infos/Email";
import PhoneNumber from "@/components/Contact Infos/PhoneNumber";
import SocialMedia from "@/components/SocialMedia";
import LoginLink from "@/components/LoginLink";
import SignUpLink from "@/components/SignUpLink";
import Languages from "@/components/Languages";

export default function Infos({ currentLang, isRTL, translation }) {
  return (
    <div className="lg:w-[55%] bg-[var(--main-blue-color)] flex justify-center items-center py-10 lg:py-0 px-2">
      <div className="sm:w-[500px] w-full flex flex-col gap-3">
        {/* Contact Infos */}
        <div className="flex flex-col gap-2 font-light">
          <Address translation={translation?.address} />
          <Email />
          <PhoneNumber />
        </div>
        <div
          dir="ltr"
          className={`flex sm:gap-3 gap-1 ${
            isRTL ? "justify-end" : "justify-start"
          }`}
        >
          <SocialMedia background={"bg-white"} color={"blue"} />
          <LoginLink isRTL={isRTL} translation={translation?.login} />
          <SignUpLink />
          <Languages
            background={"bg-[var(--main-orange-color)]"}
            top={true}
            currentLang={currentLang}
            isRTL={isRTL}
          />
        </div>
      </div>
    </div>
  );
}
