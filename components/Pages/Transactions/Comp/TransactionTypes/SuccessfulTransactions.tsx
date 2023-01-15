import { TransactionsList } from "../TransactionsList";
import { useWalletTransactions } from "../useWalletTransactions";

export const SuccessfulTransactions = ({ userId }: { userId?: string }) => {
  const { transactions, nextPage, prevPage, isFetching } =
    useWalletTransactions({
      status: "completed",
      userId,
    });
  return (
    <TransactionsList
      transactions={transactions}
      isLoading={isFetching}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};
