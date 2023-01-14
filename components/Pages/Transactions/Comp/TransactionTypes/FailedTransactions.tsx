import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const FailedTransactions = () => {
  const { transactions, nextPage, prevPage } = useWalletTransactions("failed");
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={false}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
