import FAQs from "./_components/FAQs";
import Header from "./_components/Header";
import Description from "./_components/Description";
import Footer from "./_components/Footer";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async (condition) => {
  try {
    let query = '*[_type == "faq"';
    if (condition) {
      query += `&& services->title.en == "${condition}"`;
    } else {
      query += `&& !defined(services->title)`;
    }

    query += "] | order(_createdAt asc){ question, answer, _createdAt }";

    const FAQ = await FetchData(query);
    return FAQ;
  } catch (e) {
    console.log(e);
  }
};

export default async function main({
  translation,
  lang,
  showFooter = true,
  showDescription = false,
  condition = null,
}) {
  const data = await fetchData(condition);
  return (
    <>
      <div className="h-auto w-full flex items-center justify-center pt-10 relative z-10 sm:px-5 px-2">
        <div
          className={`max-w-[1400px] w-full h-full flex flex-col items-center ${
            !showFooter && "gap-10"
          }`}
        >
          <div className="flex flex-col gap-3">
            <Header
              translation={translation?.title}
              showDescription={showDescription}
            />
            {showDescription && (
              <Description translation={translation?.description} />
            )}
          </div>

          <FAQs FAQs={data} lang={lang} showFooter={showFooter} />
        </div>
      </div>
      {showFooter && (
        <div className="h-auto w-full flex items-center justify-center bg-[var(--main-orange-color)] sm:pb-16 pb-10 sm:pt-24 pt-16 z-0 sm:px-5 px-2">
          <div className="max-w-[1400px] w-full h-full flex flex-col items-center">
            <Footer translation={translation} />
          </div>
        </div>
      )}
    </>
  );
}
