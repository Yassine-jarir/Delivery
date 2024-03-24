import Header from "./_components/Header";
import TeamSlider from "./_components/TeamSlider";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async () => {
  try {
    const team = await FetchData(`*[_type == "team"]{
      name,
      job_position,
      description,
      picture
    }`);
    return team;
  } catch (e) {
    console.log(e);
  }
};

export default async function main({ lang, isRTL, translation }) {
  const data = await fetchData();
  return (
    <div className="h-auto w-full flex items-center justify-center lg:-mt-10 lg:py-0 py-10 relative sm:px-5 px-2">
      <div className="max-w-[1400px] w-full h-full flex flex-col gap-10">
        <Header translation={translation?.title} />
        <TeamSlider lang={lang} isRTL={isRTL} team={data} />
      </div>
      <div
        className={`lg:block hidden w-[50%] bg-[var(--main-orange-color)] h-[250px] lg:-mb-10 absolute bottom-0 ${
          isRTL
            ? "right-0  rounded-tl-[40px] rounded-bl-[80px]"
            : "left-0 rounded-tr-[40px] rounded-br-[80px]"
        }`}
      ></div>
    </div>
  );
}
