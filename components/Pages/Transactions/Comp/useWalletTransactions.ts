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
