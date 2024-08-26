import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-400 mb-8 flex justify-between items-center sticky top-0 w-full border-white border-b px-12 p-4 text-xl">
      <Link href="/">Home</Link>
      <ul>
        <li className="inline px-6">
          <Link href="/">Users</Link>
        </li>
        <li className="inline pl-6">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}