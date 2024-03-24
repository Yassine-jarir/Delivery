// components
import GlobalServices from "./_components/GlobalServices";
import StorageServices from "./_components/StorageServices";
import Bar from "@/components/Bar";

export default function index({ translation }) {
  return (
    <div className="flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 w-[85%] z-10">
        <Bar />
      </div>
      <StorageServices translation={translation?.storage_services} />
      <GlobalServices translation={translation?.global_services} />
    </div>
  );
}
