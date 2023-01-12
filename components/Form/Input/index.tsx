import { useField } from "formik";
import React from "react";
import { RiInformationFill } from "react-icons/ri";
import Tick from "../../../assets/icons/Tick";
import InputLabel from "../../UI/Elements/InputLabel";
import TickStyle from "../../UI/Elements/TickStyle";

interface ICustomInput {
  type?: string;
  value?: string;
  disabled?: boolean;
  autocomplete?: string;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  lable?: string;
  placeholder?: string;
  readOnly?: boolean;
  tick?: boolean;
}

function CustomInput({
  lable,
  tick,
  type = "text",
  value,
  placeholder,
  disabled,
  inputRef,
  ...props
}: ICustomInput) {
  const [field, meta] = useField(props as any);

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
      
    ${disabled === true ? "bg-zinc-100 text-zinc-500" : "bg-white text-zinc-700"}
        
    ${
      meta.touched && meta.error === "true"
        ? "focus:ring-danger-color text-danger-color"
        : "focus:ring-primary-color"
    }

`}
          defaultValue={value}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          ref={inputRef}
          {...field}
          {...props}
        />
        {tick ? (
          <TickStyle>
            <Tick />
          </TickStyle>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="my-1 text-left right-0 text-sm text-danger-color absolute space-x-1 flex--items">
          <span>{meta.error}</span>.
          <span>
            <RiInformationFill className="text-base" />
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default CustomInput;
