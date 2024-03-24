import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--main-blue-color)] text-white/50 sm:py-16 py-10 sm:px-5 px-2 relative">
      <div className="max-w-[1400px] w-full h-full flex flex-col justify-center items-center text-center gap-10">
        <div>
          <h1 className="sm:text-[180px] text-9xl font-extrabold">404</h1>

          <div className="flex flex-col gap-3">
            <h2 className="sm:text-5xl text-4xl font-bold">Page Not Found</h2>
            <p className="sm:text-xl text-base font-extralight text-center">
              Sorry, we can't find that page! Don't worry though, everything is
              STILL AWESOME!
            </p>
          </div>
        </div>

        <Link
          href={"/"}
          className="py-3 px-10 bg-[var(--main-orange-color)] text-white text-lg rounded-lg font-light hover:opacity-90 duration-300"
        >
          Go back to home page
        </Link>
      </div>

      <div
        className="absolute md:top-10 top-2 md:left-16 left-0 md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-white/50"
        style={{ borderRadius: "55% 45% 45% 55% / 55% 47% 53% 45%" }}
      />
      <div
        className="absolute md:bottom-10 bottom-2 md:right-16 right-0 md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-white/50"
        style={{ borderRadius: "40% 60% 62% 38% / 40% 19% 81% 60%" }}
      />
    </div>
  );
}
