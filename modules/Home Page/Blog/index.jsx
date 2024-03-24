// components
import Header from "./_components/Header";
import Card from "./_components/Card";

// CMS SANITY
import { FetchData } from "@/sanity/client";

const fetchData = async () => {
  try {
    const blogs = await FetchData(`*[_type == "blog"]{
      title,
      description,
      picture
    }`);
    return blogs;
  } catch (e) {
    console.log(e);
  }
};

async function main({ lang, isRTL, translation, globalTranslation }) {
  const data = await fetchData();
  return (
    <div
      id="Blog"
      className="h-auto w-full flex items-center justify-center bg-[var(--main-blue-color)] sm:py-24 py-10 sm:px-5 px-2"
    >
      <div className="max-w-[1400px] w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
        <Header isRTL={isRTL} translation={translation?.title} />
        {data?.map((item, key) => (
          <Card
            key={key}
            blog={item}
            translation={globalTranslation?.see_more}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}

export default main;
