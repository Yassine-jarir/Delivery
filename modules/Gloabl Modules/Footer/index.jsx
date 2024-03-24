import Copyright from "./_components/Copyright";
import Infos from "./_components/Infos";
import Services from "./_components/Services";

// Dictionary
import { getGlobalDictionary } from "@/getDictionary";

const getTranslation = async (lang) => {
  const dictionary = await getGlobalDictionary(lang);
  return dictionary;
};

export default async function Footer({ params }) {
  // Getting Dictionary using server side
  const translation = await getTranslation(params?.lang);
  const lang = params?.lang;
  const isRTL = params?.lang === "ar";

  return (
    <div className="h-auto w-full flex items-center justify-center relative">
      <div className="w-full max-w-[2000px] h-full flex flex-col">
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex lg:flex-row flex-col text-white lg:h-[230px] h-auto"
        >
          <Services lang={lang} translation={translation?.global?.services} />
          <Infos
            currentLang={lang}
            isRTL={isRTL}
            translation={translation?.global}
          />
        </div>
        <Copyright />
      </div>
    </div>
  );
}
