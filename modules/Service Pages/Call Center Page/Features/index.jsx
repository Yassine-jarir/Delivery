// components
import Box from "./_components/Box";
import Bar from "@/components/Bar";
import Header from "./_components/Header";
import Description from "./_components/Description";

// icons
import icon1 from "@/public/images/Icons/CallCenterIcons/icon5.svg";
import icon2 from "@/public/images/Icons/CallCenterIcons/icon6.svg";
import icon3 from "@/public/images/Icons/CallCenterIcons/icon7.svg";
import icon4 from "@/public/images/Icons/CallCenterIcons/icon8.svg";

function index({ translation }) {
  const data = [
    {
      title: translation?.data?.feature1,
      icon: icon1,
    },
    {
      title: translation?.data?.feature2,
      icon: icon2,
    },
    {
      title: translation?.data?.feature3,
      icon: icon3,
    },
    {
      title: translation?.data?.feature4,
      icon: icon4,
    },
  ];
  return (
    <div className="relative flex flex-col justify-center items-center lg:px-5 sm:pb-16 pb-10">
      <div className="lg:w-full w-[80%] max-w-[1400px] absolute top-0 z-10">
        <Bar />
      </div>
      <div className="w-full max-w-[1380px] bg-darkBlue h-[400px] lg:rounded-bl-[11rem] lg:rounded-br-[11rem] flex flex-col justify-center items-center gap-3 px-2">
        <Header translation={translation} />
        <Description translation={translation?.description} />
      </div>

      <div className="lg:w-full max-w-[1380px] -mt-[70px] grid lg:grid-cols-4 grid-cols-2 justify-between sm:gap-5 gap-4 xl:px-10 px-2">
        {data?.map((title, key) => (
          <Box key={key} title={title.title} icon={title.icon} />
        ))}
      </div>
    </div>
  );
}

export default index;
