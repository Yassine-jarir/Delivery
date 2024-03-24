import NavbarInfo from "./_components/Navbar-info";
import NavbarRoutes from "./_components/Navbar-routes";

// icons
import homeIcon from "@/public/images/Icons/icon10.svg";
import aboutUsIcon from "@/public/images/Icons/icon11.svg";
import ourServicesIcon from "@/public/images/Icons/icon12.svg";
import whyAmeexIcon from "@/public/images/Icons/icon13.svg";
import reviewsIcon from "@/public/images/Icons/icon14.svg";
import BlogIcon from "@/public/images/Icons/icon15.svg";
import signUpIcon from "@/public/images/Icons/icon16.svg";

// Dictionary
import { getGlobalDictionary } from "@/getDictionary";

const getTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};

export default async function Navbar({ params }) {
  // Getting Dictionary using server side
  const translation = await getTranslation(params?.lang);
  const lang = params?.lang;
  const isRTL = lang === "ar";

  const nav = [
    {
      icon: homeIcon,
      label: translation?.navbar?.home,
      navigateTo: "Home",
      inHomePage: true,
    },
    {
      icon: aboutUsIcon,
      label: translation?.navbar?.about,
      navigateTo: "About",
      inHomePage: true,
    },
    {
      icon: ourServicesIcon,
      label: translation?.navbar?.services,
      navigateTo: "Services",
      inHomePage: true,
    },
    {
      icon: whyAmeexIcon,
      label: translation?.navbar?.features,
      navigateTo: "Features",
      inHomePage: true,
    },
    {
      icon: reviewsIcon,
      label: translation?.navbar?.reviews,
      navigateTo: "Reviews",
      inHomePage: true,
    },
    {
      icon: BlogIcon,
      label: translation?.navbar?.blog,
      navigateTo: "Blog",
      inHomePage: true,
    },
    {
      icon: signUpIcon,
      label: translation?.navbar?.start,
      navigateTo: "",
      inHomePage: false,
    },
  ];
  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <NavbarInfo
        nav={nav}
        currentLang={lang}
        isRTL={isRTL}
        translation={translation?.global}
      />
      <NavbarRoutes lang={lang} nav={nav} isRTL={isRTL} />
    </div>
  );
}
