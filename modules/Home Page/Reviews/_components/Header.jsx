export default function Header({ translation }) {
  return (
    <h1 className="text-[var(--main-orange-color)] text-center sm:text-5xl text-4xl">
      {translation}
    </h1>
  );
}
