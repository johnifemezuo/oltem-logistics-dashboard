import { FC, ReactNode } from "react";
import { Authsvg } from "../../assets";
import { Logo } from "../Logo";
import AuthImage from "./AuthImage";

interface IUnAuthenticatedLayout {
  children: ReactNode;
}

export const UnAuthenticatedLayout: FC<IUnAuthenticatedLayout> = ({ children }) => {
  return (
    <div
      className=" relative flex 
    w-full 
    h-screen p-6 "
    >
      <div className="absolut h-full hidden lg:block w-[50%] rounded-lg overflow-hidden">
        <AuthImage />
      </div>

      <div
        className="col-span-2 
    grid
    place-content-center w-[50%]"
      >
        {children}
      </div>
    </div>
  );
};
