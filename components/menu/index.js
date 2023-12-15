import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="flex flex-row justify-end gap-4 text-white p-4">
        <Link href="/" className="bg-sky-800 rounded-xl px-5 py-2">
          Home
        </Link>
        <Link href="/profile" className="bg-sky-800 rounded-xl px-5 py-2">
          Profile
        </Link>
      </div>
    </>
  );
}
