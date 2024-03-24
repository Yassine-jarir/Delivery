// components
import Header from "./_components/Header";
import Slider from "./_components/Slider";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async (service) => {
  try {
    const reviews =
      await FetchData(`*[_type == "reviews" && services->title.en == "${service}"]{
      first_name,
      last_name,
      statement,
      picture
    }`);
    return reviews;
  } catch (e) {
    console.log(e);
  }
};

export default async function index({
  lang,
  isRTL,
  translation,
  service = null,
}) {
  const reviews = await fetchData(service);
  return (
    <div className="w-full flex flex-col items-center sm:gap-10 gap-0 py-10 sm:px-5 px-2">
      <Header translation={translation?.title} />
      <div className="max-w-[1400px] w-full">
        <Slider isRTL={isRTL} lang={lang} reviews={reviews} />
      </div>
    </div>
  );
}
