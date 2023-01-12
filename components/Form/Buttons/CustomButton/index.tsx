import React from "react";
import Loader from "../../../../assets/icons/Loader";

interface ICustomButton {
  type?: "submit" | "button" | "reset";
  children: string | React.ReactNode;
  height?: number;
  disabled?: boolean;
  width?: number;
  onClick?: (val?: any) => any;
  isLoading?: boolean;
  customStyles?: string;
  icon?: React.ReactNode;
}

function CustomButton({
  type = "submit",
  children,
  disabled,
  isLoading,
  customStyles,
  onClick,
  icon,
}: ICustomButton) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={` text-white relative font-medium rounded-md  px-4 py-3.5 transition flex--items space-x-8 place-content-center focus:outline-none ${
        disabled
          ? "button-styles-disabled"
          : "bg-primary-color hover:bg-primaryHover-color"
      } ${customStyles}`}
      onClick={onClick}
    >
      <>{children}</>
      <span>
        {icon ? (
          icon
        ) : (
          <span className="absolute right-0 top-3.5 bottom0">
            {isLoading && <Loader />}
          </span>
        )}
      </span>
    </button>
  );
}

export default CustomButton;
