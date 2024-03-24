import SignUpButton from "@/components/SignUpButton";

export default function Footer({ translation, globalTranslation }) {
  return (
    <>
      <p className="sm:text-xl text-lg font-light lg:w-[850px] w-full text-center">
        {translation}
      </p>

      <SignUpButton translation={globalTranslation} />
    </>
  );
}
