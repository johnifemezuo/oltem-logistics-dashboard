import { RiSearch2Line } from "react-icons/ri";
import React from "react";
import TxnFilter from "../../UI/TxnFilter";

interface ISearchInput {
  setSearch: (val: any) => void;
  showFilter?: boolean;
  value?: string;
  placeholder?: string;
  calendarValue?: any;
}

export function SearchInput({
  setSearch,
  showFilter = true,
  value,
  placeholder = "Search...",
  calendarValue
}: ISearchInput) {
  return (
    <div className="mt-1  flex--items space-x-6 w-full">
      <div className="group ml-1 w-full mt-3 overflow-hidden ring-offset-2 focus-within:ring-2 right-0 ring-[#878cb0] focus-within:border-[#b4b8d6] left-0 mb-3 bg-zinc-50/60 z-20 rounded-md border flex--items px-3 ">
        <RiSearch2Line className="text-2xl text-zinc-500" />
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
          className=" group-focus:border p-3 w-full outline-none bg-transparent  text-gray-800 "
        />
      </div>
      {showFilter && <TxnFilter calendarValue={calendarValue} />}
    </div>
  );
}

