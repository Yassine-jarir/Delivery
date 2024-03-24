import Header from "./_components/Header";
import Table from "./_components/Table";
import Observation from "./_components/Observation";
export default function index({ translation, isRTL }) {
  return (
    <div className="h-auto flex flex-col items-center gap-10 py-16 sm:px-5 px-2">
      <div className="w-full max-w-[1200px] flex lg:flex-row flex-col justify-between lg:items-start items-center gap-24 lg:gap-0">
        <Header isRTL={isRTL} translation={translation?.title} />
        <Table translation={translation?.table} />
      </div>
      <Observation isRTL={isRTL} translation={translation?.observation} />
    </div>
  );
}
