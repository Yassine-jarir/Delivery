export default function Button({ translation }) {
  return (
    <button className="w-full max-w-[550px] text-xl lg:text-2xl px-3 py-2 rounded-2xl font-light bg-darkBlue hover:opacity-95 duration-300">
      {translation}
    </button>
  );
}
