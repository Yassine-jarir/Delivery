export default function Header({ translation }) {
  return (
    <h1 className="text-[var(--main-orange-color)] sm:text-6xl text-5xl">
      {translation}
    </h1>
  );
}
