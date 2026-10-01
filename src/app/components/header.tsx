import Link from "next/link";
import Nav from "./nav";

function Header() {
  return (
    <div className="w-full bg-gray-900 border-b border-gray-800">
      <header className="flex items-center justify-between px-4 sm:px-8 max-w-[1440px] w-full mx-auto h-20">
        <div className="shrink-0">
          <Link href="/" className="text-2xl sm:text-3xl text-white font-bold font-serif tracking-wider">
            MOTS
          </Link>
        </div>
        <Nav />
      </header>
    </div>
  );
}

export default Header;