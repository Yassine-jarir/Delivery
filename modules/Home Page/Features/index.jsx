// components
import Header from "./_components/Header";
import Description from "./_components/Description";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async () => {
  try {
    const features = await FetchData(`*[_type == "features"]{
      icon,
      title,
      description,
      _createdAt
    } | order(_createdAt asc)`);
    return features;
  } catch (e) {
    console.log(e);
  }
};

export default async function main({
  lang,
  isRTL,
  translation,
  globalTranslation,
}) {
  const data = await fetchData();
  return (
    <>
      <div
        id="Features"
        className="h-auto w-full flex items-center justify-center bg-[var(--main-blue-color)] text-white sm:py-16 py-10 sm:px-5 px-2"
      >
        <div className="max-w-[1400px] w-full h-full flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <Header translation={translation?.title} />
            <Description translation={translation?.description} />
          </div>

          <Features lang={lang} isRTL={isRTL} features={data} />
        </div>
      </div>

      <div className="h-auto w-full flex items-center justify-center bg-[var(--main-orange-color)] text-white sm:py-16 py-10 sm:px-5 px-2">
        <div className="max-w-[1400px] w-full h-full flex flex-col items-center gap-10">
          <Footer
            translation={translation?.footer_description}
            globalTranslation={globalTranslation?.sign_up}
          />
        </div>
      </div>
    </>
  );
}
