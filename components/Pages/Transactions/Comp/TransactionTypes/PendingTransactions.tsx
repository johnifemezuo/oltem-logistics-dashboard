import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const PendingTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching } =
    useWalletTransactions({ status: "pending", userId });
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
