export default function Header({translation}) {
  return (
    <>
      <h1 className="md:text-5xl sm:text-4xl text-3xl text-white text-center">
        {translation?.title}
      </h1>
      <span className="w-fit bg-orange rounded-b-full text-nowrap flex justify-center items-center sm:text-2xl text-lg font-light text-white py-1 sm:px-16 px-7">
      {translation?.second_title}
      </span>
    </>
  );
}
