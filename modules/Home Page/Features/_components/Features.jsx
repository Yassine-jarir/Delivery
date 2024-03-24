import Feature from "./Feature";

export default function Features({ lang, isRTL, features }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-x-5 gap-y-20">
      {features?.map((item, key) => (
        <Feature
          key={key}
          index={key}
          feature={item}
          lang={lang}
          isRTL={isRTL}
        />
      ))}
    </div>
  );
}
