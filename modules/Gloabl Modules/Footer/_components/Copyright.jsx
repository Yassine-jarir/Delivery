export default function Copyright() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full h-[50px] bg-white flex justify-center items-center gap-1 text-center text-[var(--main-blue-color)] text-sm">
      <span className="text-lg">&copy;</span>
      <span>{year}</span>
      <span>Ameex</span>
    </div>
  );
}
