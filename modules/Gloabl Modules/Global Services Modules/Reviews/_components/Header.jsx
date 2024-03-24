export default function Header({ translation }) {
  return (
    <h1 className="text-[var(--main-orange-color)] text-4xl text-center">
      {translation}
    </h1>
  );
}
