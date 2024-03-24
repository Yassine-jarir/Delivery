// ui
import SocialMedia from "@/components/SocialMedia";
import SignUpLink from "@/components/SignUpLink";
import LoginLink from "@/components/LoginLink";
import Languages from "@/components/Languages";
import Address from "@/components/Contact Infos/Address";
import PhoneNumber from "@/components/Contact Infos/PhoneNumber";

// components
import NavbarMobile from "./Navbar-mobile";

export default function NavbarInfo({ nav, currentLang, isRTL, translation }) {
  return (
    <div className="h-[15vh] min-h-[100px] max-h-[150px] w-full bg-[var(--main-blue-color)] flex items-center justify-center sm:px-5 px-2">
      <div
        className={`max-w-[1400px] w-full flex justify-between items-center gap-2 ${
          isRTL ? "lg:flex-row flex-row-reverse" : ""
        }`}
      >
        {/* Contact info */}
        <div className="lg:flex gap-3 text-white font-light hidden">
          <Address translation={translation?.address} />
          <PhoneNumber />
        </div>

        <div dir="ltr" className="flex items-center gap-3">
          {/* Social Media */}
          <SocialMedia
            background={"bg-[var(--main-orange-color)]"}
            color={"white"}
          />

          {/* Auth */}
          <div className="flex gap-3">
            <LoginLink isRTL={isRTL} translation={translation?.login} />
            <SignUpLink />
          </div>

          {/* Languages */}
          <div className="lg:flex hidden">
            <Languages
              background={"bg-white/20"}
              top={false}
              currentLang={currentLang}
              isRTL={isRTL}
            />
          </div>
        </div>

        <NavbarMobile lang={currentLang} nav={nav} isRTL={isRTL} />
      </div>
    </div>
  );
}
