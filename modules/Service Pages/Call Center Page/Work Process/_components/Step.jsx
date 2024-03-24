function Step({ id, title, icon, translation }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[270px] w-full h-[340px] rounded-[35px] bg-[var(--main-orange-color)] flex flex-col hover:shadow-xl hover:scale-[1.02] duration-300">
        <span className="h-[70px] text-white text-3xl flex justify-center items-center font-light">
          {translation} {id}
        </span>
        <div className="flex flex-col justify-center items-center gap-10 text-[var(--main-blue-color)] bg-white h-full border-2 border-[var(--main-blue-color)] rounded-[35px]">
          <div className="bg-gray-100 size-28 rounded-full flex items-center justify-center">
            <span className="text-var[--main-blue-color] text-3xl">{icon}</span>
          </div>
          <span className="text-3xl">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Step;
