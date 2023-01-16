import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const FailedTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching, search } =
    useWalletTransactions({
      status: "failed",
      userId,
    });
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
