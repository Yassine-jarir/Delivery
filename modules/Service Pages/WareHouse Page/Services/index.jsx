// icons
import icon1 from "@/public/images/Icons/WarehouseIcons/icon5.svg";
import icon2 from "@/public/images/Icons/WarehouseIcons/icon6.svg";
import icon3 from "@/public/images/Icons/WarehouseIcons/icon7.svg";

// components
import Header from "./_components/Header";
import Card from "./_components/Card";
import Bar from "@/components/Bar";

export default function index({ translation }) {
  const data = [
    {
      icon: icon1,
      title: translation?.data?.service1?.title,
      description: translation?.data?.service1?.description,
    },
    {
      icon: icon2,
      title: translation?.data?.service2?.title,
      description: translation?.data?.service2?.description,
    },
    {
      icon: icon3,
      title: translation?.data?.service3?.title,
      description: translation?.data?.service3?.description,
    },
  ];
  return (
    <div className="lg:h-screen min-h-[700px] lg:max-h-[800px] h-auto bg-darkBlue flex flex-col justify-center items-center sm:px-5 px-2 relative">
      <div className="w-[90%] absolute top-0">
        <Bar />
      </div>

      <div className="max-w-[1400px] w-full py-24 grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 xl:gap-10 gap-5">
        <Header translation={translation?.title} />
        {data?.map((item, key) => (
          <Card
            key={key}
            icon={item?.icon}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
    </div>
  );
}
