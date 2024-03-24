// icons
import deliveryIcon from "@/public/images/Icons/icon37.svg";
import callcenterIcon from "@/public/images/Icons/icon38.svg";
import warehousingIcon from "@/public/images/Icons/icon39.svg";
import marketplaceIcon from "@/public/images/Icons/icon40.svg";

// components
import Header from "./_components/Header";
import RTLReview from "./_components/RtlReview";
import LtrReview from "./_components/LtrReview";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async (service) => {
  try {
    const reviews =
      await FetchData(`*[_type == "reviews" && services->title.en == "${service}"]{
      first_name,
      last_name,
      statement,
      picture
    }[0..1]`);
    return reviews;
  } catch (e) {
    console.log(e);
  }
};

async function main({ lang, isRTL, translation }) {
  const services = [
    {
      title: translation?.services?.delivery,
      icon: deliveryIcon,
      reviews: await fetchData("Delivery"),
    },
    {
      title: translation?.services?.call_center,
      icon: callcenterIcon,
      reviews: await fetchData("Call center"),
    },
    {
      title: translation?.services?.warehousing,
      icon: warehousingIcon,
      reviews: await fetchData("Warehousing"),
    },
    {
      title: translation?.services?.marketplace,
      icon: marketplaceIcon,
      reviews: await fetchData("Marketplace"),
    },
  ];
  return (
    <div
      id="Reviews"
      className="h-auto w-full flex items-center justify-center sm:px-5 px-2"
    >
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-10 pt-10 pb-16 overflow-x-hidden">
        <Header translation={translation?.title} />
        <div className="w-full h-full flex flex-col gap-16">
          {services?.map((item, key) =>
            key % 2 === 0 ? (
              <RTLReview key={key} lang={lang} isRTL={isRTL} service={item} />
            ) : (
              <LtrReview key={key} lang={lang} isRTL={isRTL} service={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default main;
