import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";
import { InputLabel } from "../../UI";
interface IPasswordInput {
  value?: string;
  disabled?: boolean;
  autocomplete?: string;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  lable?: string;
  placeholder?: string;
  readOnly?: boolean;
  touched: boolean;
  error: string | undefined;
  register?: any;
}

export function PasswordInput({
  lable,
  value,
  placeholder,
  disabled,
  inputRef,
  touched,
  error,
  register,
  ...props
}: IPasswordInput) {
  const [passwordShow, setPasswordShow] = useState(true);

  return (
    <div className="text-left relative">
      <InputLabel label={lable} />
      <div
        className="w-full flex bg-white mt-2  
    border rounded-lg
    relative"
      >
        <input
          className={`
    bg-white rounded-md text-lg 
    focus:ring-1 shadow-sm border-slate-300 placeholder-slate-400
    placeholder:text-md 
    focus:outline-none 
    w-full py-3.5 px-4 transition duration-300
    text-md
      
    ${
      disabled === true ? "bg-zinc-100 text-zinc-500" : "bg-white text-zinc-700"
    }
        
    ${
      touched && error
        ? "focus:ring-danger-color text-danger-color"
        : "focus:ring-primary-color"
    }

`}
          defaultValue={value}
          placeholder={placeholder}
          disabled={disabled}
          type={!passwordShow ? "text" : "password"}
          {...register}
          {...props}
        />
        <div
          className="w-[30px] grid place-content-center
    px-6 
    absolute right-0 top-0 h-full 
    rounded-tr-md rounded-br-md bottom-4
    text-[#899BAC]"
          onClick={() => setPasswordShow(!passwordShow)}
        >
          {passwordShow ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </div>
      </div>
      {touched && error ? (
        <div className=" my-1 text-left right-0 text-sm text-danger-color absolute space-x-1 flex--items">
          <span>{error}</span>
          <span>
            <RiInformationFill className="text-base" />
          </span>
        </div>
      ) : null}
    </div>
  );
}
