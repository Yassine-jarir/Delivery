import FAQ from "./FAQ";
export default function FAQs({ FAQs, lang, showFooter }) {
  return (
    <div
      className={`w-full flex flex-col gap-5 relative ${
        showFooter && "-bottom-8"
      } `}
    >
      {FAQs?.map((item, key) => (
        <FAQ key={key} index={key} FAQ={item} lang={lang} />
      ))}
    </div>
  );
}
