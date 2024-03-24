"use client";
import Image from "next/image";

// import Atropos component
import Atropos from "atropos/react";
import "atropos/css";

function ServiceCard({ index, item, translation }) {
  const isMobile = window.innerWidth <= 1024;
  return (
    <>
      {isMobile ? (
        <div
          className={`w-full ${
            index % 2 === 0
              ? "bg-[var(--main-orange-color)]"
              : "bg-[var(--main-blue-color)]"
          } text-white font-light`}
        >
          <div
            className={`${
              index % 2 === 0
                ? "border-[var(--main-blue-color)]"
                : "border-[var(--main-orange-color)]"
            } border-b-[2px] border-solid flex py-5 justify-center items-center gap-3`}
          >
            <Image src={item?.icon} className="w-[70px]" alt={item?.bold} />
            <div>
              <h1 className="text-2xl font-bold">{item?.bold}</h1>
              <p className="text-xl font-light">{item?.light}</p>
            </div>
          </div>

          <div className="h-[350px] w-full flex flex-col justify-center items-center gap-5 xl:px-10 px-5">
            {/* Description */}
            <div className="h-[40%] flex justify-center items-center">
              <p className="max-w-[500px] text-xl text-center">
                {item?.description}
              </p>
            </div>

            {/* Advantages */}
            <div className="w-full flex flex-col items-center gap-5">
              <button
                className={`${
                  index % 2 === 0
                    ? "bg-white text-[var(--main-orange-color)]"
                    : "bg-[var(--main-orange-color)] text-white"
                } w-fit flex justify-center items-center rounded-t-2xl text-center text-xl px-4 hover:opacity-90 duration-300 cursor-default`}
              >
                {translation}
              </button>

              <ul className="text-xl text-center">
                {item?.advantages?.map((item, key) => (
                  <li key={key}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Atropos activeOffset={20} shadowScale={0}>
          <div
            className={`w-full ${
              index % 2 === 0
                ? "bg-[var(--main-orange-color)]"
                : "bg-[var(--main-blue-color)]"
            } text-white font-light`}
          >
            <div
              className={`${
                index % 2 === 0
                  ? "border-[var(--main-blue-color)]"
                  : "border-[var(--main-orange-color)]"
              } border-b-[2px] border-solid flex py-5 justify-center items-center gap-3`}
            >
              <Image src={item?.icon} className="w-[70px]" alt={item?.bold} />
              <div>
                <h1 className="text-2xl font-bold">{item?.bold}</h1>
                <p className="text-xl font-light">{item?.light}</p>
              </div>
            </div>

            <div className="h-[350px] w-full flex flex-col justify-center items-center gap-5 xl:px-10 px-5">
              {/* Description */}
              <div className="h-[40%] flex justify-center items-center">
                <p className="max-w-[500px] text-xl text-center">
                  {item?.description}
                </p>
              </div>

              {/* Advantages */}
              <div className="w-full flex flex-col items-center gap-5">
                <button
                  className={`${
                    index % 2 === 0
                      ? "bg-white text-[var(--main-orange-color)]"
                      : "bg-[var(--main-orange-color)] text-white"
                  } w-fit flex justify-center items-center rounded-t-2xl text-center text-xl px-4 hover:opacity-90 duration-300 cursor-default`}
                >
                  {translation}
                </button>

                <ul className="text-xl text-center">
                  {item?.advantages?.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Atropos>
      )}
    </>
  );
}

export default ServiceCard;
