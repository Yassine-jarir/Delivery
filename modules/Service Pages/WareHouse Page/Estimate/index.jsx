// components
import Header from "./_components/Header";
import Button from "./_components/Button";

export default function index({ translation }) {
  return (
    <div className="bg-orange text-center flex flex-col items-center gap-5 py-24 sm:px-5 px-2">
      <Header translation={translation} />
      <Button translation={translation?.button} />
    </div>
  );
}
