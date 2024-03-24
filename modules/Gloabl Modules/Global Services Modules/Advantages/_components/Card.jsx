import Image from "next/image";

export default function Card({ item, showOnlyTitle }) {
  return (
    <div className="w-full sm:h-[150px] h-[130px] bg-white rounded-3xl border-2 border-[var(--main-blue-color)] border-solid flex items-center hover:scale-[1.01] hover:shadow-xl duration-300">
      {/* icon */}
      <div className="sm:min-w-[150px] sm:w-[150px] min-w-[70px] w-[70px] h-full flex justify-center items-center px-1">
        <Image src={item?.icon} className="sm:w-[100px] w-[70px]" alt="icon" />
      </div>

      {/* Line */}
      <div className="h-[70%] border-r-2 border-solid border-[var(--main-blue-color)]" />

      {/* content */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center text-[var(--main-blue-color)] px-2">
        {!showOnlyTitle ? (
          <>
            <h3 className="sm:text-2xl text-xl font-bold">{item?.title}</h3>
            <p className="sm:text-lg text-sm line-clamp-3">
              {item?.description}
            </p>
          </>
        ) : (
          <h3 className="sm:text-3xl text-2xl">{item?.title}</h3>
        )}
      </div>
    </div>
  );
}
