import { useState } from "react";
import { SearchInput } from "../../../Form";
import { EmptyUI } from "../../../UI";
import { ITransaction } from "./transaction.interface";
import { TrxnList } from "./TrxnList";
import { TxnLoadingSkeleton } from "./TxnLoadingSkeleton";

export function TransactionsList({
  transactions,
  isLoading,
  nextPage,
  prevPage,
  search,
}: {
  transactions: ITransaction[];
  isLoading: boolean;
  nextPage: () => void;
  prevPage: () => void;
  search: (value: string) => void;
}) {
  const paginationBtn =
    "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";
  
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <div>
      <div>
        <SearchInput
          placeholder="Search by account name..."
          setSearch={search}
          calendarValue={calendarValue}
        />

        <div className="w-full px-4 py-2 text-sm mt-1 font-medium text-zinc-600  bg-[#F9F9F9]">
          Transactions
        </div>

        {isLoading ? (
          <TxnLoadingSkeleton />
        ) : (
          <div>
            <>
              <div className="h-[450px] bg-transparent overflow-y-auto">
                {transactions?.length > 0 ? (
                  <div className="divide-y">
                    {transactions?.map((transaction) => (
                      <TrxnList key={transaction.id} transaction={transaction} />
                    ))}
                  </div>
                ) : (
                  <EmptyUI />
                )}
              </div>

              <div className="border-t">
                <div className="bg-white space-x-2 py-4 flex place-content-center">
                  <button className={paginationBtn} onClick={prevPage}>
                    {" "}
                    Preview{" "}
                  </button>
                  {/* <button className={paginationBtn}> 1 </button>
                  <button className={paginationBtn}> 2 </button> */}
                  <button className={paginationBtn} onClick={nextPage}>
                    {" "}
                    Next{" "}
                  </button>
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}
