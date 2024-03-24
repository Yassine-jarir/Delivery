import Image from "next/image";

function ServiceCard({ item }) {
  return (
    <div className="lg:min-w-[470px] max-w-[470px] lg:h-[350px] h-[300px] flex flex-col justify-center items-center sm:gap-3 gap-2 rounded-3xl bg-white sm:py-5 py-1 shadow-[0_0_16px_rgba(0,0,0,0.19)] hover:scale-[1.01] duration-300">
      <div className="w-[85%] h-[30%] flex justify-center items-center sm:gap-4 gap-2">
        <Image src={item?.icon} className="w-[70px]" alt={item?.mainTitle} />
        <h2 className="text-darkBlue font-bold sm:text-2xl text-xl">
          {item?.mainTitle}
        </h2>
      </div>
      {/* Line */}
      <div className="w-[85%] border-b border-solid border-orange"></div>
      <div className="w-[85%] flex flex-col justify-center items-center sm:gap-2">
        <h2 className="text-orange font-bold sm:text-2xl text-xl">
          {item?.title}
        </h2>
        <p className="text-darkBlue sm:text-lg text-base text-center">
          {item?.description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
