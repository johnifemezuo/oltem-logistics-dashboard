import { FC, ReactNode } from "react";
import Authsvg from "../../assets/icons/Authsvg";
import Logo from "../Logo";

interface IUnAuthenticatedLayout {
  children: ReactNode;
}

const UnAuthenticatedLayout: FC<IUnAuthenticatedLayout> = ({ children }) => {
  return (
    <div
      className=" grid md:flex 
    w-full 
    h-screen "
    >
      <div
        className="md:w-[1300px] 
    bg-app-bg
    py-8 px-14  
    space-y-24 
    hidden md:block"
      >
        <Logo />

        <div
          className="text-2xl 
    md:text-3xl 
    font-semibold 
    leading-loose 
    text-slate-700"
        >
          Admin Portal
        </div>

        <Authsvg />
      </div>

      <div
        className="col-span-2 
    w-full 
    grid
    place-content-center"
      >
        {children}
      </div>
    </div>
  );
};

export default UnAuthenticatedLayout;
