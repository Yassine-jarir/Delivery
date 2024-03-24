// components
import Step from "./_components/Step";
import Header from "./_components/Header";

function index({ translation }) {
  const data = [
    { title: translation?.steps?.step1, icon: "icon1" },
    { title: translation?.steps?.step2, icon: "icon2" },
    { title: translation?.steps?.step3, icon: "icon3" },
    { title: translation?.steps?.step4, icon: "icon4" },
  ];
  return (
    <div className="lg:h-[300px] h-auto bg-[var(--main-blue-color)] relative flex flex-col items-center gap-16 py-10 sm:px-5 px-2 lg:mb-52">
      <Header translation={translation?.title} />
      <div className="w-full max-w-[1400px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {data?.map((step, key) => (
          <Step
            key={key}
            id={key + 1}
            title={step.title}
            icon={step.icon}
            translation={translation?.step}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
