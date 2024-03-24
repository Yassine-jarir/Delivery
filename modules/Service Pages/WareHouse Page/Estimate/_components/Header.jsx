export default function Header({ translation }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
        {translation?.title}
      </h1>
      <p className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-light">
        {translation?.description}
      </p>
    </div>
  );
}
