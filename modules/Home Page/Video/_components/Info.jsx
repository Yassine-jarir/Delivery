function Info({ information }) {
  return (
    <div className="text-white max-w-[100px] flex justify-center items-center flex-col text-center px-2 py-3 font-bold">
      <div
        className={`w-full bg-white text-orange h-[80px] flex flex-wrap justify-center items-center gap-x-1 rounded-2xl py-5`}
      >
        <span className="text-2xl leading-none">{information?.number}</span>

        {information?.span && (
          <span className="text-base font-bold">{information?.span}</span>
        )}
      </div>
      <span className="text-sm mt-2 leading-5">{information?.title}</span>
    </div>
  );
}

export default Info;
