export default function Header({ translation, showDescription }) {
  return (
    <h1
      className={`text-center ${
        showDescription ? "sm:text-4xl text-3xl" : "sm:text-5xl text-4xl"
      } text-[var(--main-orange-color)]`}
    >
      {translation}
    </h1>
  );
}
