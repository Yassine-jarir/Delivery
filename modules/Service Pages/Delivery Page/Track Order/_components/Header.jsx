export default function Header({ translation }) {
  return (
    <h1 className="sm:text-5xl text-4xl font-semibold text-[var(--main-blue-color)] text-center">
      {translation}
    </h1>
  );
}
