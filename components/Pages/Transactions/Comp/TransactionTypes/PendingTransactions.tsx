import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const PendingTransactions = () => {
  const { transactions, nextPage, prevPage } = useWalletTransactions("pending");
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={false}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
