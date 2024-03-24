export default function Header({ translation }) {
  return (
    <h1 className="w-full h-full flex flex-col justify-center lg:items-start items-center sm:gap-5 gap-2 sm:text-5xl text-3xl text-white px-5">
      {translation?.light} <br />
      <span className="text-orange xl:text-7xl sm:text-6xl text-4xl font-bold">
        {translation?.bold}
      </span>
    </h1>
  );
}
