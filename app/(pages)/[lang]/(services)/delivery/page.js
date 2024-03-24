import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Hero"),
    {
      loading: () => <p></p>,
    }
  ),
  Tracking = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Track Order"),
    {
      loading: () => <p></p>,
    }
  ),
  Services = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Services"),
    {
      loading: () => <p></p>,
    }
  ),
  Tariff = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Tariff"),
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
  Advantages = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Advantages"),
    {
      loading: () => <p></p>,
    }
  ),
  FAQ = dynamic(() => import("@/modules/Gloabl Modules/FAQ"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Contact"),
    {
      loading: () => <p></p>,
    }
  ),
  InteractiveMap = dynamic(
    () => import("@/modules/Service Pages/Delivery Page/Interactive Map"),
    {
      loading: () => <p></p>,
    }
  );

// Metadata
export const metadata = {
  title: "Ameex | Delivery",
};

// Dictionary
import {
  getGlobalDictionary,
  getDeliveryPageDictionary,
} from "@/getDictionary";

// getting translation data
const getGlobalTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};

const getDeliveryPageTranslation = async (lang) => {
  const dictionary = await getDeliveryPageDictionary(lang);
  return dictionary;
};

export default async function page({ params }) {
  // Getting Dictionary using server side
  const translation = await getGlobalTranslation(params?.lang);
  const deliveryTranslation = await getDeliveryPageTranslation(params?.lang);
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  // active page
  const active = "delivery";

  return (
    <div
      className="flex items-center justify-center w-full"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full h-auto max-w-[2300px]">
        <Hero
          isRTL={isRTL}
          globalTranslation={translation?.global}
          active={active}
        />
        <Tracking translation={deliveryTranslation?.tracking} />
        <Services isRTL={isRTL} translation={deliveryTranslation?.services} />
        <Tariff isRTL={isRTL} translation={deliveryTranslation?.tariff} />
        <Reviews
          lang={lang}
          isRTL={isRTL}
          translation={deliveryTranslation?.reviews}
          service="Delivery"
        />
        <Advantages translation={deliveryTranslation?.advantages} />
        <FAQ
          lang={lang}
          translation={deliveryTranslation?.FAQ}
          showFooter={false}
          showDescription={true}
          condition="Delivery"
        />
        <Contact
          isRTL={isRTL}
          translation={translation?.contact}
          globalTranslation={translation?.global}
          deliveryTranslation={deliveryTranslation?.contact}
        />
        <InteractiveMap translation={deliveryTranslation?.interactiveMap} />
      </div>
    </div>
  );
}
