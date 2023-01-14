import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const SuccessfulTransactions = () => {
  const { transactions, nextPage, prevPage, isFetching } =
    useWalletTransactions("completed");
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
