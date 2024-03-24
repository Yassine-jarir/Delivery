export default function Footer({ translation }) {
  return (
    <div className="sm:w-[75%] w-full text-white sm:text-xl text-lg text-center">
      <p className="font-light">{translation?.share_thoughts}</p>
      <p className="font-bold">{translation?.contact_us}</p>
    </div>
  );
}
