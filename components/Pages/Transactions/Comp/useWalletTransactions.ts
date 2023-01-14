import { useGetRequest } from "../../../../base";
import { ITransaction, ITransactionData } from "./transaction.interface";

export function useWalletTransactions(status = "") {
  const {
    data,
    isError,
    prevPage,
    nextPage,
    gotoPage,
    page,
    isLoading,
    isFetching,
  } = useGetRequest<ITransactionData>({
    load: true,
    path: `/transactions/transactions?status=${status}`,
  });

  const transactions = isError
    ? []
    : (data?.data.transactions as ITransaction[]);
  const pagination = isError ? [] : data?.data.pagination;

  return {
    transactions,
    pagination,
    page,
    nextPage,
    prevPage,
    gotoPage,
    isFetching,
    isLoading,
  };
}
