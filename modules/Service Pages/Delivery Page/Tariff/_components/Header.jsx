export default function Header({ translation }) {
  return (
    <h1 className="text-center text-4xl text-[var(--main-orange-color)]">
      {translation}
    </h1>
  );
}
