import Image from "next/image";

export default function Box({ title, icon }) {
  return (
    <div className="max-w-[250px] w-full sm:h-[300px] h-[250px] bg-white rounded-[40px] flex flex-col justify-center items-center px-5 border-2 border-solid border-darkBlue hover:shadow-xl hover:scale-[1.02] duration-300">
      <Image src={icon} className="sm:w-[130px] w-[110px]" alt={title} />
      <div className="h-[30%] flex justify-center items-center">
        <h1 className="text-center sm:text-2xl text-xl text-darkBlue">
          {title}
        </h1>
      </div>
    </div>
  );
}
