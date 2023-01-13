import React from "react";
import ReactPaginate from "react-paginate";
import SearchInput from "../../../Form/SearchInput";
import EmptyUI from "../../../UI/EmptyUI/EmptyUI";
import TrxnList from "./TrxnList";
import TxnLoadingSkeleton from "./TxnLoadingSkeleton";

function AllTransactions({ transactions }: any) {
  const paginationBtn =
    "bg-white rounded-md border hover:text-white hover:bg-primary-color hover:rounded-md transition duration-300 text-neutral-600 gap-3 py-2  px-4 text-sm";

  const [currentItems, setCurrentItems] = React.useState<any>(transactions);

  //======================Pagination implementaion=====================
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 5;

  React.useEffect(() => {
    if (transactions) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(transactions?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(transactions.length / itemsPerPage));
    } else {
      setCurrentItems(transactions);
    }
  }, [itemOffset, itemsPerPage, transactions]);

  const handlePageClick = (event: any) => {
    let newOffset: number;

    if (transactions) {
      newOffset = (event.selected * itemsPerPage) % transactions.length;
      setItemOffset(newOffset);
    }
  };
  const [search, setSearch] = React.useState<string>("");

  const filterSearch = () => {
    return currentItems?.filter((item: any) => {
      return search.toLowerCase() === "" ? item : item.account_name.toLowerCase().includes(search);
    });
  };


  return (
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
              {transactions?.length > 5 ? (
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  containerClassName="bg-white space-x-2 py-4 flex place-content-center"
                  previousLabel="< previous"
                  pageLinkClassName={paginationBtn}
                  previousLinkClassName={paginationBtn}
                  nextLinkClassName={paginationBtn}
                  marginPagesDisplayed={2}
                  activeLinkClassName="bg-app-bg text-white"
                />
              ) : null}
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default AllTransactions;
