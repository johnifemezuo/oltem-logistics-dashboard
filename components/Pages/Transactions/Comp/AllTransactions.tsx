import React from "react";
import ReactPaginate from "react-paginate";
import SearchInput from "../../../Form/SearchInput";
import EmptyUI from "../../../UI/EmptyUI/EmptyUI";
import TrxnList from "./TrxnList";
import TxnLoadingSkeleton from "./TxnLoadingSkeleton";

function AllTransactions({ transactions }: any) {
  const paginationBtn =
    "bg-white rounded-md border hover:text-white hover:bg-app-bg hover:text-zinc-500 transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";


  const [search, setSearch] = React.useState<string>("");

  const filterSearch = () => {
    return transactions?.filter((item: any) => {
      return search.toLowerCase() === "" ? item : item.account_name.toLowerCase().includes(search);
    });
  };


  return (
    <div>
      <div>
        <SearchInput placeholder="Search by account name..." setSearch={setSearch} />

        <div className="w-full px-4 py-2 text-sm mt-1 font-medium text-zinc-600  bg-[#F9F9F9]">
          Transactions
        </div>

        {false ? (
          <TxnLoadingSkeleton />
        ) : (
          <div>
            <>
              <div className="h-[450px] bg-transparent overflow-y-auto">
                {filterSearch()?.length > 0 ? (
                  <div className="divide-y">
                    {filterSearch()?.map((transaction: any, idx: number) => (
                      <TrxnList key={idx} data={transaction} />
                    ))}
                  </div>
                ) : (
                  <EmptyUI />
                )}
              </div>

              <div className="border-t">
                <div className="bg-white space-x-2 py-4 flex place-content-center">
                  <button className={paginationBtn}> Preview </button>
                  <button className={paginationBtn}> 1 </button>
                  <button className={paginationBtn}> 2 </button>
                  <button className={paginationBtn}> Next </button>
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllTransactions;
