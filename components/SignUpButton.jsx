import Link from "next/link";

export default function SignUpButton({ translation }) {
  return (
    <Link
      href=""
      className="w-fit bg-[var(--main-blue-color)] text-white sm:px-16 px-10 py-4 rounded-full text-xl font-light hover:opacity-95 duration-300 shadow-xl"
    >
      {translation}
    </Link>
  );
}
