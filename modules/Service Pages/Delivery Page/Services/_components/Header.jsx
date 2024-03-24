export default function Header({ translation }) {
  return (
    <h1 className="text-4xl text-[var(--main-orange-color)] my-10 text-center">
      {translation}
    </h1>
  );
}
