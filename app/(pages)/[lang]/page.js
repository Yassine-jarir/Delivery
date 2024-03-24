import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(() => import("@/modules/Home Page/Hero"), {
    loading: () => <p></p>,
  }),
  About = dynamic(() => import("@/modules/Home Page/About"), {
    loading: () => <p></p>,
  }),
  Video = dynamic(() => import("@/modules/Home Page/Video"), {
    loading: () => <p></p>,
  }),
  Team = dynamic(() => import("@/modules/Home Page/Team"), {
    loading: () => <p></p>,
  }),
  Services = dynamic(() => import("@/modules/Home Page/Services"), {
    loading: () => <p></p>,
  }),
  WhyAmeex = dynamic(() => import("@/modules/Home Page/Features"), {
    loading: () => <p></p>,
  }),
  Reviews = dynamic(() => import("@/modules/Home Page/Reviews"), {
    loading: () => <p></p>,
  }),
  Blog = dynamic(() => import("@/modules/Home Page/Blog"), {
    loading: () => <p></p>,
  }),
  FAQ = dynamic(() => import("@/modules/Gloabl Modules/FAQ"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(() => import("@/modules/Gloabl Modules/Contact"), {
    loading: () => <p></p>,
  });

// Dictionary
import { getGlobalDictionary, getHomePageDictionary } from "@/getDictionary";

// getting translation data
const getGlobalTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};
const getHomePageTranslation = async (lang) => {
  const dictionary = await getHomePageDictionary(lang);
  return dictionary;
};

export default async function page({ params }) {
  // Getting Dictionary using server side
  const translation = await getGlobalTranslation(params?.lang);
  const homeTranslation = await getHomePageTranslation(params?.lang);
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  return (
    <div
      className="w-full flex justify-center items-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full h-auto max-w-[2300px]">
        <Hero
          isRTL={isRTL}
          lang={lang}
          translation={homeTranslation?.hero}
          globalTranslation={translation?.global}
        />
        <About isRTL={isRTL} translation={homeTranslation?.about} />
        <Video isRTL={isRTL} translation={homeTranslation?.video} />
        <Team lang={lang} isRTL={isRTL} translation={homeTranslation?.team} />
        <Services isRTL={isRTL} translation={homeTranslation?.services} />
        <WhyAmeex
          lang={lang}
          isRTL={isRTL}
          translation={homeTranslation?.features}
          globalTranslation={translation?.global}
        />
        <Reviews
          lang={lang}
          isRTL={isRTL}
          translation={homeTranslation?.reviews}
        />
        <Blog
          lang={lang}
          isRTL={isRTL}
          translation={homeTranslation?.blog}
          globalTranslation={translation?.global}
        />
        <FAQ lang={lang} translation={homeTranslation?.FAQ} />
        <Contact
          isRTL={isRTL}
          translation={translation?.contact}
          globalTranslation={translation?.global}
        />
      </div>
    </div>
  );
}
