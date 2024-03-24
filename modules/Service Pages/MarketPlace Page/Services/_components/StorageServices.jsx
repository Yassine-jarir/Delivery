// components
import Header from "./StorageServices/Header";
import ServiceCard from "./StorageServices/ServiceCard";
import Button from "./StorageServices/Button";

// icons
import icon1 from "@/public/images/Icons/MarketplaceIcons/icon5.svg";
import icon2 from "@/public/images/Icons/MarketplaceIcons/icon6.svg";

export default function StorageServices({ translation }) {
  const data = [
    {
      mainTitle: translation?.data?.service1?.mainTitle,
      title: translation?.data?.service1?.title,
      description: translation?.data?.service1?.description,
      icon: icon1,
    },

    {
      mainTitle: translation?.data?.service2?.mainTitle,
      title: translation?.data?.service2?.title,
      description: translation?.data?.service2?.description,
      icon: icon2,
    },
  ];
  return (
    <div className="lg:max-w-[850px] w-full flex flex-col items-center gap-10 bg-darkBlue pt-32 lg:pb-16 pb-0 sm:px-5 px-2">
      <Header translation={translation?.title} />
      <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-10">
        {data.map((item, key) => {
          return <ServiceCard key={key} item={item} />;
        })}
      </div>
      <Button translation={translation?.button} />
    </div>
  );
}
