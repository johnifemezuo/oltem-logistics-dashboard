import React from "react";
import { Loader } from "../../../../assets";

interface ICustomButton {
  type?: "submit" | "button" | "reset";
  children: string | React.ReactNode;
  height?: number;
  disabled?: boolean;
  width?: number;
  onClick?: (val?: any) => any;
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function CustomButton({
  type = "submit",
  children,
  disabled,
  isLoading,
  className,
  onClick,
  icon,
}: ICustomButton) {
  return (
    <button
      type={type ?? "submit"}
      disabled={disabled}
      className={` text-white relative font-medium rounded-md  px-4 py-3.5 transition flex--items space-x-8 place-content-center focus:outline-none ${
        disabled
          ? "button-styles-disabled"
          : "bg-primary-color hover:bg-primaryHover-color"
      } ${className}`}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      <>{children}</>
      <span className="w-6 h-6 absolute right-0 mr-3">
        {icon ? (
          icon
        ) : (
          <span className="">{isLoading ? <Loader /> : null}</span>
        )}
      </span>
    </button>
  );
}
