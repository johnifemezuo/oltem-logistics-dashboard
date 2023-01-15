import { useEffect, useState } from "react";
import { useDebounce } from "use-lodash-debounce";
import { useGetRequest } from "../../../../base";
import { ITransaction, ITransactionData } from "./transaction.interface";

export function useWalletTransactions({
  status = "",
  userId,
}: {
  userId?: string;
  status?: string;
}) {
  let fetchQueryString =
    typeof status === "string" && userId
      ? `status=${status}&userId=${userId}`
      : `status=${status}`;

  const {
    data,
    isError,
    prevPage,
    nextPage,
    gotoPage,
    page,
    isLoading,
    isFetching,
    get,
  } = useGetRequest<ITransactionData>({
    load: true,
    path: `/transactions/transactions?${fetchQueryString}`,
    qureyOptions: {
      staleTime: 0,
    },
  });

  const transactions = isError
    ? []
    : (data?.data.transactions as ITransaction[]);
  const pagination = isError ? [] : data?.data.pagination;

  const [searchString, search] = useState<string>();
  const debouncedSearchString = useDebounce(searchString, 400);

  useEffect(() => {
    if (debouncedSearchString || debouncedSearchString === "") {
      get("/transactions/transactions?search=" + debouncedSearchString);
    }
  }, [debouncedSearchString]);

  return {
    transactions,
    pagination,
    page,
    nextPage,
    prevPage,
    gotoPage,
    isFetching,
    isLoading,
    search,
  };
}
