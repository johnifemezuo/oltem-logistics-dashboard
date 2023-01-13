import Link from "next/link";
import React from "react";

interface INavlink {
  path: string;
  icon?: React.ReactNode;
  name?: string;
  activeClass: string;
}

function Navlink({ path, icon, name, activeClass }: INavlink) {
  return (
    <div>
      <Link
        href={path}
        className={`flex--items  select-none duration-200 hover:text-primary-color space-x-4 py-4 px-5 transition rounded-lg ${activeClass}`}
      >
        <span>{icon}</span>
        <span className="text-sm">{name}</span>
      </Link>
    </div>
  );
}

export default Navlink;
