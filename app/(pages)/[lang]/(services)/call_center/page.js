import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Hero"),
    {
      loading: () => <p></p>,
    }
  ),
  Features = dynamic(
    () => import("@/modules/Service Pages/Call Center Page/Features"),
    {
      loading: () => <p></p>,
    }
  ),
  Tariff = dynamic(
    () => import("@/modules/Service Pages/Call Center Page/Tariff"),
    {
      loading: () => <p></p>,
    }
  ),
  Advantages = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Advantages"),
    {
      loading: () => <p></p>,
    }
  ),
  Reviews = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Reviews"),
    {
      loading: () => <p></p>,
    }
  ),
  WorkProcess = dynamic(
    () => import("@/modules/Service Pages/Call Center Page/Work Process"),
    {
      loading: () => <p></p>,
    }
  ),
  FAQ = dynamic(() => import("@/modules/Gloabl Modules/FAQ"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(() => import("@/modules/Gloabl Modules/Contact"), {
    loading: () => <p></p>,
  });

// Metadata
export const metadata = {
  title: "Ameex | Call Center",
};

// Dictionary
import {
  getGlobalDictionary,
  getCallCenterPageDictionary,
} from "@/getDictionary";

// getting translation data
const getGlobalTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};
const getCallCenterPageTranslation = async (lang) => {
  const dictionary = await getCallCenterPageDictionary(lang);
  return dictionary;
};

// icons
import advantageIcon1 from "@/public/images/Icons/CallCenterIcons/icon9.svg";
import advantageIcon2 from "@/public/images/Icons/CallCenterIcons/icon10.svg";
import advantageIcon3 from "@/public/images/Icons/CallCenterIcons/icon11.svg";

export default async function page({ params }) {
  // Getting Dictionary using server side
  const translation = await getGlobalTranslation(params?.lang);
  const callCenterTranslation = await getCallCenterPageTranslation(
    params?.lang
  );
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  // active page
  const active = "call_center";

  // advantages
  const advantages = [
    {
      title: callCenterTranslation?.advantages?.data?.advantage1?.title,
      icon: advantageIcon1,
    },
    {
      title: callCenterTranslation?.advantages?.data?.advantage2?.title,
      icon: advantageIcon2,
    },
    {
      title: callCenterTranslation?.advantages?.data?.advantage3?.title,
      icon: advantageIcon3,
    },
  ];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center items-center"
    >
      <div className="w-full h-auto max-w-[2300px]">
        <Hero
          isRTL={isRTL}
          globalTranslation={translation?.global}
          active={active}
        />
        <Features translation={callCenterTranslation?.features} />
        <Tariff
          globalTranslation={translation?.global}
          translation={callCenterTranslation?.tariff}
        />
        <Advantages
          isRTL={isRTL}
          advantages={advantages}
          showOnlyTitle={true}
          translation={callCenterTranslation?.advantages}
        />
        <Reviews
          lang={lang}
          isRTL={isRTL}
          translation={callCenterTranslation?.reviews}
          service="Call center"
        />
        <WorkProcess translation={callCenterTranslation?.work_process} />
        <FAQ
          lang={lang}
          translation={callCenterTranslation?.FAQ}
          showFooter={false}
          showDescription={true}
          condition="Call center"
        />

        <Contact
          isRTL={isRTL}
          translation={translation?.contact}
          globalTranslation={translation?.global}
        />
      </div>
    </div>
  );
}
