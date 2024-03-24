export default function Header({ translation }) {
  return (
    <h1 className="w-full max-w-[550px] sm:text-8xl text-7xl lg:text-start text-center font-light">
      {translation}
    </h1>
  );
}
