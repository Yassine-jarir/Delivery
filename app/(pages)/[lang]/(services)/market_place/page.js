import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Hero"),
    {
      loading: () => <p></p>,
    }
  ),
  Service = dynamic(
    () => import("@/modules/Service Pages/MarketPlace Page/Services"),
    {
      loading: () => <p></p>,
    }
  ),
  Tariff = dynamic(
    () => import("@/modules/Service Pages/MarketPlace Page/Tariff"),
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
  FAQ = dynamic(() => import("@/modules/Gloabl Modules/FAQ"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(() => import("@/modules/Gloabl Modules/Contact"), {
    loading: () => <p></p>,
  });

// Metadata
export const metadata = {
  title: "Ameex | Marketplace",
};

// Dictionary
import {
  getGlobalDictionary,
  getMarketplacePageDictionary,
} from "@/getDictionary";

// getting translation data
const getGlobalTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};
const getMarketplacePageTranslation = async (lang) => {
  const dictionary = await getMarketplacePageDictionary(lang);
  return dictionary;
};

// icons
import advantageIcon1 from "@/public/images/Icons/MarketplaceIcons/icon10.svg";
import advantageIcon2 from "@/public/images/Icons/MarketplaceIcons/icon11.svg";
import advantageIcon3 from "@/public/images/Icons/MarketplaceIcons/icon12.svg";

export default async function page({ params }) {
  // Getting Dictionary using server side
  const translation = await getGlobalTranslation(params?.lang);
  const marketplaceTranslation = await getMarketplacePageTranslation(
    params?.lang
  );
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  // active page
  const active = "market_place";

  // advantages
  const advantages = [
    {
      title: marketplaceTranslation?.advantages?.data?.advantage1?.title,
      description:
        marketplaceTranslation?.advantages?.data?.advantage1?.description,
      icon: advantageIcon1,
    },
    {
      title: marketplaceTranslation?.advantages?.data?.advantage2?.title,
      description:
        marketplaceTranslation?.advantages?.data?.advantage2?.description,
      icon: advantageIcon2,
    },
    {
      title: marketplaceTranslation?.advantages?.data?.advantage3?.title,
      description:
        marketplaceTranslation?.advantages?.data?.advantage3?.description,
      icon: advantageIcon3,
    },
  ];

  return (
    <div
      className="w-full flex justify-center items-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full h-auto max-w-[2300px]">
        <Hero
          isRTL={isRTL}
          globalTranslation={translation?.global}
          active={active}
        />
        <Service translation={marketplaceTranslation?.services} />
        <Tariff translation={marketplaceTranslation?.tariff} />
        <Advantages
          isRTL={isRTL}
          translation={marketplaceTranslation?.advantages}
          advantages={advantages}
          showOnlyTitle={false}
        />
        <FAQ
          lang={lang}
          showFooter={false}
          showDescription={true}
          translation={marketplaceTranslation?.FAQ}
          condition="Marketplace"
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
