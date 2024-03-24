export default function Header({ translation }) {
  return (
    <h1 className="text-white">
      <span className="sm:text-7xl text-5xl font-bold">
        {translation?.bold}
      </span>
      <br />
      <span className="sm:text-5xl text-4xl font-light">
        {translation?.light}
      </span>
    </h1>
  );
}
