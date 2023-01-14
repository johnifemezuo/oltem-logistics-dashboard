import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const FailedTransactions = () => {
  const { transactions, nextPage, prevPage, isFetching } =
    useWalletTransactions("failed");
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
