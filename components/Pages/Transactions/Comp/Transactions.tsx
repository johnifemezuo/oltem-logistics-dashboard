import {
  AllTransactions,
  FailedTransactions,
  PendingTransactions,
  SuccessfulTransactions,
} from "./TransactionTypes";
import TrxnLists from "./TrxnLists";

export default function Transactions({ userId }: { userId?: string }) {
  const TrxnTypes = {
    "All Transactions": <AllTransactions userId={userId} />,
    Pending: <PendingTransactions userId={userId} />,
    Successful: <SuccessfulTransactions userId={userId} />,
    Failed: <FailedTransactions userId={userId} />,
  };

  return <TrxnLists categories={TrxnTypes} />;
}
