export default function Button({ translation }) {
  return (
    <button className="max-w-[700px] md:w-full w-fit bg-[var(--main-blue-color)] text-white sm:px-16 px-10 py-2 rounded-full md:text-2xl text-xl hover:opacity-95 duration-300">
      {translation}
    </button>
  );
}
