import { useRouter } from "next/router";
import { RiExchangeDollarFill, RiLogoutCircleLine } from "react-icons/ri";
import { MenuList } from "../../base/MenuList";
import { Logo } from "../Logo";
import Navlink from "./Navlink";
import NavlinkDropdown from "./Navlink/NavlinkDropdown/NavlinkDropdown";

export function NavigationBar() {
  const { route } = useRouter();

  const addActiveClass = (path: string) => {
    return route === path ? "bg-link-active text-primary-color" : "bg-transparent text-zinc-500";
  };

  return (
    <div className="px-8 py-4">
      <Logo />

      <div className="mt-14">
        <div className="flex flex-col space-y-4 ">
          {MenuList.map((navlink, index) => (
            <Navlink
              key={index}
              path={navlink.path}
              name={navlink.name}
              icon={navlink.icon}
              activeClass={addActiveClass(navlink.path)}
            />
          ))}

          <div className="absolute bottom-5" onClick={() => {}}>
            <p className="flex--items hover:bg-link-active cursor-pointer font-medium text-zinc-500 duration-500 hover:text-primary-color space-x-4 px-5 py-4 transition rounded-xl ">
              <RiLogoutCircleLine size={25} />
              <span className="">Log out</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

