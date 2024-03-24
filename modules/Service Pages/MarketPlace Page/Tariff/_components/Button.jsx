export default function Button({ translation }) {
  return (
    <button className="w-full md:max-w-[700px] max-w-[400px] text-white md:text-2xl text-xl rounded-full bg-[var(--main-orange-color)] py-2 px-5 font-light hover:opacity-95 duration-300">
      {translation}
    </button>
  );
}
