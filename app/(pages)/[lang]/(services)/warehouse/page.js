import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(
    () => import("@/modules/Gloabl Modules/Global Services Modules/Hero"),
    {
      loading: () => <p></p>,
    }
  ),
  Services = dynamic(
    () => import("@/modules/Service Pages/WareHouse Page/Services"),
    {
      loading: () => <p></p>,
    }
  ),
  Tariff = dynamic(
    () => import("@/modules/Service Pages/WareHouse Page/Tariff"),
    {
      loading: () => <p></p>,
    }
  ),
  Estimate = dynamic(
    () => import("@/modules/Service Pages/WareHouse Page/Estimate"),
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
  FAQ = dynamic(() => import("@/modules/Gloabl Modules/FAQ"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(() => import("@/modules/Gloabl Modules/Contact"), {
    loading: () => <p></p>,
  });

// Metadata
export const metadata = {
  title: "Ameex | Warehouse",
};

// Dictionary
import {
  getGlobalDictionary,
  getWarehousePageDictionary,
} from "@/getDictionary";

// getting translation data
const getGlobalTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};
const getWarehousePageTranslation = async (lang) => {
  const dictionary = await getWarehousePageDictionary(lang);
  return dictionary;
};

// icons
import advantageIcon1 from "@/public/images/Icons/WarehouseIcons/icon9.svg";
import advantageIcon2 from "@/public/images/Icons/WarehouseIcons/icon10.svg";
import advantageIcon3 from "@/public/images/Icons/WarehouseIcons/icon11.svg";

export default async function page({ params }) {
  // Getting Dictionary using server side
  const translation = await getGlobalTranslation(params?.lang);
  const warehouseTranslation = await getWarehousePageTranslation(params?.lang);
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  // active page
  const active = "warehouse";

  // advantages
  const advantages = [
    {
      title: warehouseTranslation?.advantages?.data?.advantage1?.title,
      description:
        warehouseTranslation?.advantages?.data?.advantage1?.description,
      icon: advantageIcon1,
    },
    {
      title: warehouseTranslation?.advantages?.data?.advantage2?.title,
      description:
        warehouseTranslation?.advantages?.data?.advantage2?.description,
      icon: advantageIcon2,
    },
    {
      title: warehouseTranslation?.advantages?.data?.advantage3?.title,
      description:
        warehouseTranslation?.advantages?.data?.advantage3?.description,
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
        <Services translation={warehouseTranslation?.services} />
        <Tariff isRTL={isRTL} translation={warehouseTranslation?.tariff} />
        <Estimate translation={warehouseTranslation?.estimate} />
        <Advantages
          isRTL={isRTL}
          translation={warehouseTranslation?.advantages}
          advantages={advantages}
          showOnlyTitle={false}
        />
        <Reviews
          lang={lang}
          isRTL={isRTL}
          translation={warehouseTranslation?.reviews}
          service="Warehousing"
        />
        <FAQ
          lang={lang}
          showFooter={false}
          showDescription={true}
          translation={warehouseTranslation?.FAQ}
          condition="Warehousing"
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
