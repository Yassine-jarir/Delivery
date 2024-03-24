import Image from "next/image";

// icons
import fleshIcon from "@/public/images/Icons/icon25.svg";

// components
import Header from "./_components/Header";
import Card from "./_components/Card";

export default function index({
  isRTL,
  advantages,
  showOnlyTitle,
  translation,
}) {
  return (
    <div className="w-full min-h-[500px] flex justify-center items-center lg:mt-10 lg:px-5">
      <div className="lg:w-full w-full max-w-[1400px] lg:h-[350px] h-auto flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-10 bg-[var(--main-blue-color)] lg:rounded-[40px] xl:px-16 sm:px-5 px-2 lg:py-0 py-16">
        <div className="h-full flex justify-center items-center relative">
          <Header translation={translation?.title} />
          <Image
            src={fleshIcon}
            className={`lg:block hidden h-[100px] w-[250px] absolute lg:-top-[50px] -top-[115px] ${
              isRTL
                ? "lg:-right-[35px] scale-x-[-1]"
                : "lg:-left-[35px] scale-x-1"
            } object-cover`}
            alt="flesh icon"
          />
        </div>

        <div className="sm:h-[500px] h-[420px] md:w-[600px] w-full flex flex-col justify-between">
          {advantages?.map((item, key) => (
            <Card key={key} item={item} showOnlyTitle={showOnlyTitle} />
          ))}
        </div>
      </div>
    </div>
  );
}
