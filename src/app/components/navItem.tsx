import Link from "next/link";

export interface NavItemProps {
  id: number;
  title: string;
  url: string;
}

function Navitem({ title, url }: NavItemProps) {
  return (
    <li className="shrink-0">
      <Link
        href={url}
        className="text-base text-white font-mono whitespace-nowrap hover:text-gray-300 transition-colors block"
      >
        {title}
      </Link>
    </li>
  );
}

export default Navitem;