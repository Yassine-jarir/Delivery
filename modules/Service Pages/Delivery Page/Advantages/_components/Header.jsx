function Header({ translation }) {
  return (
    <h1 className="sm:text-4xl text-3xl text-center bg-[var(--main-blue-color)] text-white">
      {translation}
    </h1>
  );
}

export default Header;
