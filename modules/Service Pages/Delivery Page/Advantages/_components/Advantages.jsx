import Image from "next/image";
import icon1 from "@/public/images/Icons/DeliveryIcons/icon8.svg";
import icon2 from "@/public/images/Icons/DeliveryIcons/icon9.svg";
import icon3 from "@/public/images/Icons/DeliveryIcons/icon10.svg";
import icon4 from "@/public/images/Icons/DeliveryIcons/icon11.svg";
import icon5 from "@/public/images/Icons/DeliveryIcons/icon12.svg";
import icon6 from "@/public/images/Icons/DeliveryIcons/icon13.svg";

function Advantages({ translation }) {
  const data = [
    { icon: icon1, advantage: translation?.unparalleled_speed },
    { icon: icon2, advantage: translation?.real_time_tracking },
    { icon: icon3, advantage: translation?.flexibility_of_delivery_times },
    { icon: icon4, advantage: translation?.parcel_insurance_and_security },
    { icon: icon5, advantage: translation?.dedicated_customer_support_team },
    { icon: icon6, advantage: translation?.flexibility_of_delivery_times2 },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid lg:grid-cols-3 grid-cols-2 outline outline-1 outline-[var(--main-blue-color)] -outline-offset-0">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`sm:w-[280px] max-w-[200px] sm:max-w-none w-full sm:h-[230px] h-[170px] sm:p-8 p-1 flex flex-col justify-center items-center gap-1 outline outline-1 outline-white hover:bg-white/10`}
          >
            <div className="w-full sm:h-[70%] h-[60%] flex justify-center items-center">
              <Image
                src={item?.icon}
                alt={item?.advantage}
                className="sm:w-[200px] sm:h-full h-[80px] w-[100px]"
              />
            </div>

            <h2 className="sm:h-[30%] h-[40%] text-white sm:text-lg text-base text-center font-light ">
              {item?.advantage}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantages;
