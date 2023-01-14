import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const SuccessfulTransactions = () => {
  const { transactions, nextPage, prevPage } =
    useWalletTransactions("completed");
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={false}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
