import Image from "next/image";

function Card({ icon, title, description }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex items-center justify-center lg:w-full w-[600px] sm:h-[250px] h-[180px] sm:py-5 py-2 sm:border-[3px] border-2 border-white rounded-[30px] hover:shadow-xl hover:scale-[1.02] duration-300">
        <div className="w-[30%] h-full flex justify-center items-center">
          <Image
            src={icon}
            className="sm:w-[110px] w-[80px] h-[120px]"
            alt={title}
          />
        </div>
        <div className="h-[90%] border border-solid border-white" />
        <div className="h-full w-[70%] flex flex-col justify-center items-start sm:px-8 px-3">
          <h1 className="font-bold text-white sm:text-2xl text-xl">{title}</h1>
          <p className="text-white text-sm lg:text-md xl:text-lg font-light line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
