import CardLink from "./CardLink";

export default function Card({ translation }) {
  return (
    <div className="max-w-[1100px] w-full flex md:flex-row flex-col justify-center items-center text-white bg-[var(--main-blue-color)] gap-8  rounded-[20px] py-10 lg:px-20 md:px-16 px-5">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold">
          {translation?.destinations_value}
        </h1>
        <CardLink translation={translation?.destinations} />
      </div>
      <h1 className="text-3xl text-center font-light">
        {translation?.description}
      </h1>
    </div>
  );
}
