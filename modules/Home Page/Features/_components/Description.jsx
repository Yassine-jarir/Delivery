export default function Description({ translation }) {
  return (
    <div className="w-full flex justify-center items-center">
      <p className="sm:w-[750px] w-full bg-white/10 rounded-3xl sm:px-16 px-7 py-7 text-center sm:text-lg text-base font-light">
        {translation}
      </p>
    </div>
  );
}
