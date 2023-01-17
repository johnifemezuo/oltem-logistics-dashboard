import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface IDropdownSelect {
  selected: any;
  options: any[];
  setSelected: any;
  title?: string;
}

const DropdownSelect = ({
  selected,
  options,
  setSelected,
  title,
}: IDropdownSelect) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full rounded-md bg-white py-3 border hover:bg-zinc-100 transition cursor-pointer pl-3 pr-10 text-left ">
          <span className="block truncate text-zinc-700">
            {options.find((option) => option.id === selected)?.name ||
              (title ?? "Select Option")}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <RiArrowDownSLine
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-40 text-left mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg  focus:outline-none sm:text-sm">
            {options.map((reason: any) => (
              <Listbox.Option
                key={reason.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2.5 pl-4 pr-4 ${
                    active ? "bg-app-bg" : "text-zinc-700"
                  } ${selected?.id === reason?.id ? "bg-app-bg" : "bg-white"}`
                }
                value={reason.id}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected
                          ? "font-medium text-primary-color"
                          : "font-normal text-zinc-500"
                      }`}
                    >
                      {reason.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default DropdownSelect;
