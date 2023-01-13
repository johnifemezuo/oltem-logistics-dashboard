import React from "react";
import { RiInformationFill } from "react-icons/ri";
import { Tick } from "../../../assets";
import { InputLabel, TickStyle } from "../../UI";

interface ICustomInput {
  type?: string;
  value?: string;
  disabled?: boolean;
  autocomplete?: string;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  lable?: string;
  register?: any;
  placeholder?: string;
  readOnly?: boolean;
  tick?: boolean;
  touched: boolean;
  error: string | undefined;
}

export function CustomInput({
  lable,
  tick,
  type = "text",
  value,
  placeholder,
  disabled,
  touched,
  error,
  register,
  ...props
}: ICustomInput) {
  return (
    <div className="text-left relative w-full">
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
          type={type}
          {...register}
          {...props}
        />
        {tick ? (
          <TickStyle>
            <Tick />
          </TickStyle>
        ) : null}
      </div>
      {touched && error ? (
        <div className="my-1 text-left right-0 text-sm text-danger-color absolute space-x-1 flex--items">
          <span>{error}</span>.
          <span>
            <RiInformationFill className="text-base" />
          </span>
        </div>
      ) : null}
    </div>
  );
}
