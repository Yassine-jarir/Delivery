// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Advantages from "./_components/Advantages";
import Footer from "./_components/Footer";

function Index({ translation }) {
  return (
    <>
      <div className="lg:h-screen h-auto min-h-[680px] lg:max-h-[750px] flex flex-col gap-5 bg-[var(--main-blue-color)] py-10 sm:px-5 px-2">
        <div className="flex flex-col justify-center items-center sm:gap-7 gap-4">
          <Header translation={translation?.title} />
          <Description translation={translation?.description} />
        </div>
        <Advantages translation={translation?.data} />
      </div>
      <Footer translation={translation?.footer} />
    </>
  );
}

export default Index;
