import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const AllTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching, search } =
    useWalletTransactions({ userId });
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
      search={search}
    />
  );
};
