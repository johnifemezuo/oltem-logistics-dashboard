import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function TrxnLists({ categories }: any) {
  return (
    <div className="w-full mb-20 md:mt-6  px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 border p-2 rounded-md bg-white ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-3 font-medium leading-4",
                  "ring-white ring-opacity-60 ring-offset-1 transition ring-offset-[#7e84ac]  focus:outline-none focus:ring-2",
                  selected
                    ? "bg-app-bg border text-primary-color"
                    : "text-zinc-500 font-normal hover:bg-white/[0.12] hover:text-primary-color"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <div>
          <Tab.Panels
            className={classNames(
              "mt-2  min-h-[500px] overflow-x-hidden overflow-y-auto"
            )}
          >
            <ul>
              {Object.values(categories).map((data: any, idx: number) => (
                <Tab.Panel key={idx}>{data}</Tab.Panel>
              ))}
            </ul>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default TrxnLists;
