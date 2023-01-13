import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiArrowDownSLine, RiClockwise2Fill } from "react-icons/ri";
import { Routes } from "../../../../base/routes-constants";

interface INavlinkDropdown {
  icon: React.ReactNode;
  name: string;
  activeClass: string;
}

function NavlinkDropdown({ icon, name, activeClass }: INavlinkDropdown) {
  const {route} = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="duration-500  p-5 transition rounded-xl text-[#71717a] "
      >
        <p className="flex--items select-none space-x-4 font-medium">
          {icon}
          <span>{name}</span>
          <RiArrowDownSLine
            size={20}
            className={`transition duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </p>
      </div>

      <ul
        className={`text-zinc-500 mt-2 p-2 bg-white/50
         transition duration-500  hover:text-primary-color overflow-hidden rounded-md ${
           isOpen ? "h-0 p-0 transition duration-500 " : "h-[130px]"
         }`}
      >
        <li>
          <Link
            href={Routes.dashboard}
            className={`${
              isActive
                ? "bg-link-active   text-primary-color"
                : "hover:text-primary-color bg-white/0 hover:bg-white/10  "
            } block px-4 py-5 -ml-  select-none transition rounded-lg `}
          >
            <p className="flex--items -translate-x-4  ml-11 space-x-4 font-medium">
              <RiClockwise2Fill className="text-2xl" /> <span>Express</span>
            </p>
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default NavlinkDropdown;
