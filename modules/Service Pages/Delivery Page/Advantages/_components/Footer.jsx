function Footer({ translation }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-[var(--main-orange-color)] text-white sm:py-16 py-10 sm:px-5 px-2">
      <p className="sm:text-xl text-lg w-full font-light max-w-[1000px] text-center">
        {translation?.description}
      </p>
      <button className="max-w-[700px] md:w-full w-fit bg-[var(--main-blue-color)] text-white sm:px-16 px-10 py-2 rounded-full md:text-2xl text-xl  hover:opacity-95 duration-300">
        {translation?.button}
      </button>
    </div>
  );
}

export default Footer;
