import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const SuccessfulTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching, search } =
    useWalletTransactions({
      status: "completed",
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
