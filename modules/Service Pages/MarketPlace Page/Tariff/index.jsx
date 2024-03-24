// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Table from "@/components/Tariff/Table";
import Button from "./_components/Button";

function index({ translation }) {
  return (
    <div className="w-full h-auto flex flex-col gap-10 bg-[var(--main-blue-color)] md:mt-2 lg:py-16 pt-10 pb-0 md:px-0 px-2">
      <Header translation={translation?.title} />
      <div className="flex justify-center items-center md:bg-[var(--main-orange-color)]">
        <div className="md:px-16 bg-[var(--main-blue-color)]">
          <Table translation={translation?.table} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <Description translation={translation?.description} />
        <Button translation={translation?.button} />
      </div>
    </div>
  );
}

export default index;
