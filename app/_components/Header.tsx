import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="mb-3 border-b border-sky-900/75 pb-2 text-sm">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="font-medium text-sky-300">
              Next Weather
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-sky-200">
              This week
            </Link>
          </li>
          <li>
            <Link href="/" className="font-light text-sky-200">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
