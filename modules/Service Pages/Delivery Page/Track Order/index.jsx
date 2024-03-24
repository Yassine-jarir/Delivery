// components
import Header from "./_components/Header";

import Bar from "@/components/Bar";
import Form from "./_components/Form";
export default function index({ translation }) {
  return (
    <div className="w-full flex flex-col justify-center items-center sm:px-5 px-3">
      <div className="sm:w-[85%] w-[90%]">
        <Bar />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-5 mt-28">
        <Header translation={translation?.title} />
        <Form translation={translation?.form} />
      </div>
    </div>
  );
}
