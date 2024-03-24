export default function Button({ translation }) {
  return (
    <button className="h-[40px] rounded-full max-w-[600px] w-full bg-orange text-white sm:text-xl text-lg font-light hover:opacity-95 duration-300">
      {translation}
    </button>
  );
}
