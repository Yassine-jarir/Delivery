// icons
import deliveryIcon from "@/public/images/Icons/icon26.svg";
import callcenterIcon from "@/public/images/Icons/icon27.svg";
import warehousingIcon from "@/public/images/Icons/icon28.svg";
import marketplaceIcon from "@/public/images/Icons/icon29.svg";

// components
import Service from "./Service";

function Services({ translation }) {
  const services = [
    {
      icon: deliveryIcon,
      title: translation?.delivery,
      navigateTo: "delivery",
    },
    {
      icon: callcenterIcon,
      title: translation?.call_center,
      navigateTo: "call_center",
    },
    {
      icon: warehousingIcon,
      title: translation?.warehousing,
      navigateTo: "warehouse",
    },
    {
      icon: marketplaceIcon,
      title: translation?.marketplace,
      navigateTo: "market_place",
    },
  ];
  return (
    <div className="max-w-[500px] grid grid-cols-2 justify-center items-center sm:gap-8 gap-3 sm:px-5">
      {services?.map((service, key) => {
        return <Service service={service} key={key} />;
      })}
    </div>
  );
}

export default Services;
