// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Button from "./_components/Button";
import Table from "@/components/Tariff/Table";

export default function index({ translation, globalTranslation }) {
  return (
    <div className="lg:h-[450px] h-auto flex max-lg:flex-col justify-between items-center lg:gap-10 lg:bg-orange xl:px-16 lg:px-5 pb-10 lg:py-0">
      <div className="w-full flex flex-col items-center gap-7 text-white bg-orange xl:ps-24 sm:px-5 px-2 lg:py-0 pb-44 pt-16">
        <Header translation={translation?.title} />
        <Description translation={translation?.description} />
        <Button translation={globalTranslation?.sign_up} />
      </div>
      <div className="w-[95%] lg:w-[50%] h-full bg-darkBlue flex justify-center items-center p-16 -mt-32 lg:mt-0">
        <div className="w-[500px]">
          <Table translation={translation?.table} />
        </div>
      </div>
    </div>
  );
}
