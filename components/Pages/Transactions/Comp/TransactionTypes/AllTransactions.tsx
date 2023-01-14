import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const AllTransactions = () => {
  const { transactions, nextPage, prevPage } = useWalletTransactions();
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={false}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
