import Image from "next/image";

// icons
import chevronIcon from "@/public/images/Icons/icon42.svg";

export default function SelectInput({
  isRTL,
  translation,
  ariaLabel,
  options,
  state,
  setState,
}) {
  return (
    <div className="relative">
      <select
        className="appearance-none w-full bg-white/10 rounded-full sm:text-sm text-xs ps-5 pe-8 py-2 outline-none text-white cursor-pointer"
        name=""
        aria-label={ariaLabel}
        required
        value={state}
        onChange={({ target }) => setState(target.value)}
      >
        <option value="none" disabled>
          {translation?.default_selected}
        </option>
        {options?.map((item, key) => (
          <option
            key={key}
            value={item?.value}
            className="bg-[var(--main-blue-color)] py-2"
          >
            {item?.label}
          </option>
        ))}
      </select>
      <Image
        src={chevronIcon}
        className={`absolute ${
          isRTL ? "left-3" : "right-3"
        } top-[50%] -translate-y-[50%] w-4 -z-10`}
        alt="chevron bottom"
      />
    </div>
  );
}
