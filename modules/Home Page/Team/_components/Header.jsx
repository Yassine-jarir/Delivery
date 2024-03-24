export default function Header({ translation }) {
  return (
    <div className="w-full flex lg:justify-start justify-center items-center">
      <h1 className="w-[350px] bg-[var(--main-orange-color)] text-white py-5 flex justify-center items-center rounded-t-[40px] rounded-b-[100px] text-3xl">
        {translation}
      </h1>
    </div>
  );
}
