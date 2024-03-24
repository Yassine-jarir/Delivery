import Link from "next/link";

export default function Form({ translation }) {
  return (
    <form className="w-full max-w-[700px] flex flex-col justify-center items-center gap-5">
      <label
        htmlFor="tracking_number"
        className="sm:text-2xl text-xl text-[var(--main-blue-color)]"
      >
        {translation?.tracking_number}
      </label>
      <input
        type="text"
        className="w-full h-[50px] px-10 rounded-full sm:text-base text-sm text-[var(--main-blue-color)] placeholder:text-[var(--main-blue-color)] outline-none bg-gray-100"
        placeholder={translation?.tracking_number_placeholder}
        id="tracking_number"
        required
      />
      <button className="w-full h-[50px] bg-[var(--main-orange-color)] rounded-full text-white sm:text-2xl text-xl hover:opacity-90 duration-300">
        {translation?.buttons?.submit}
      </button>
      <p className="text-[var(--main-blue-color)] text-center sm:text-lg text-base">
        {translation?.track_order_question}{" "}
        <Link
          href="/"
          className="text-[var(--main-orange-color)] hover:underline hover:decoration-[1.5px]"
        >
          {translation?.buttons?.link}
        </Link>
      </p>
    </form>
  );
}
