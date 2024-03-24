// components
import Header from "./GlobalServices/Header";
import ServiceCard from "./GlobalServices/ServiceCard";

// icons
import icon1 from "@/public/images/Icons/MarketplaceIcons/icon7.svg";
import icon2 from "@/public/images/Icons/MarketplaceIcons/icon8.svg";
import icon3 from "@/public/images/Icons/MarketplaceIcons/icon9.svg";

export default function GlobalServices({ translation }) {
  const data = [
    {
      icon: icon1,
      bold: translation?.data?.service1?.title?.bold,
      light: translation?.data?.service1?.title?.light,
      description: translation?.data?.service1?.description,
      advantages: translation?.data?.service1?.advantages,
    },
    {
      icon: icon2,
      bold: translation?.data?.service2?.title?.bold,
      light: translation?.data?.service2?.title?.light,
      description: translation?.data?.service2?.description,
      advantages: translation?.data?.service2?.advantages,
    },
    {
      icon: icon3,
      bold: translation?.data?.service3?.title?.bold,
      light: translation?.data?.service3?.title?.light,
      description: translation?.data?.service3?.description,
      advantages: translation?.data?.service3?.advantages,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="lg:max-w-[850px] w-full bg-darkBlue py-10">
        <Header translation={translation?.title} />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3">
        {data?.map((item, key) => {
          return (
            <ServiceCard
              key={key}
              index={key}
              item={item}
              translation={translation?.advantages}
            />
          );
        })}
      </div>
    </div>
  );
}
