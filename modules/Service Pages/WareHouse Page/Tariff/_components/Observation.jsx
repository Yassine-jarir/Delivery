export default function index({ isRTL, translation }) {
  return (
    <div className="w-full max-w-[1200px] lg:h-[70px] md:h-[60px] h-auto grid md:grid-cols-[180px_minmax(200px,_1fr)] grid-cols-[120px_minmax(200px,_1fr)] lg:rounded-[30px] rounded-[20px] bg-gray-200">
      <h3
        className={`min-h-full md:min-w-[180px] w-fit flex justify-center items-center lg:text-2xl md:text-xl text-lg text-white bg-orange ${
          isRTL
            ? "lg:rounded-r-[30px] rounded-r-[20px]"
            : "lg:rounded-l-[30px] rounded-l-[20px]"
        } px-5`}
      >
        {translation?.title}
      </h3>
      <span className="flex justify-center items-center md:px-10 px-2 py-2 md:py-0 lg:text-2xl md:text-lg text-base text-darkBlue">
        {translation?.value}
      </span>
    </div>
  );
}
