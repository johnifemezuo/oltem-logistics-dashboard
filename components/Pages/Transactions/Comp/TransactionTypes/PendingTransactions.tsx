import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const PendingTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching, search } =
    useWalletTransactions({ status: "pending", userId });
  return (
    <TransactionsList
      search={search}
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
