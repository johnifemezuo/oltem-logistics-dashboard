import { Tab } from "@headlessui/react";
import TrxnList from "./TrxnList";
import TxnLoadingSkeleton from "./TxnLoadingSkeleton";
import React from "react";
import SearchInput from "../../../Form/SearchInput";
import EmptyUI from "../../../UI/EmptyUI/EmptyUI";
import { transactionsData } from "../../../../base/data/txns";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Wallet() {
  const categories = ["Debited", "Credited"];

  console.log(transactionsData);

  return (
    <div className="w-full mb-20 md:mt-8 border-t px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex max-w-md space-x-1 border p-2 rounded-md bg-white ">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-4 font-medium leading-4",
                  "ring-white ring-opacity-60 ring-offset-1 transition ring-offset-[#515b99] focus:outline-none focus:ring-2",
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

        <SearchInput setSearch={() => ""} />

        {false ? (
          <TxnLoadingSkeleton />
        ) : (
          <div>
            {true ? (
              <EmptyUI />
            ) : (
              <>
                <div className="w-full px-4 py-2 text-sm mt-4  bg-[#F9F9F9]">
                  Transactions
                </div>
                <Tab.Panels className="mt-2 min-h-[500px] overflow-x-hidden overflow-y-auto">
                  <ul>
                    {transactionsData.map((data: any, idx: any) => (
                      <TrxnList key={idx} data={data} />
                    ))}
                  </ul>

                  {/* <CustomButton customStyles="w-[220px] bg-app-bg mx-auto my-6">Load More</CustomButton> */}
                </Tab.Panels>
              </>
            )}
          </div>
        )}
      </Tab.Group>
    </div>
  );
}

