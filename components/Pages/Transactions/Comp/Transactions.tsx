import {
  AllTransactions,
  FailedTransactions,
  PendingTransactions,
  SuccessfulTransactions,
} from "./TransactionTypes";
import TrxnLists from "./TrxnLists";

export default function Transactions() {
  const TrxnTypes = {
    "All Transactions": <AllTransactions />,
    Pending: <PendingTransactions />,
    Successful: <SuccessfulTransactions />,
    Failed: <FailedTransactions />,
  };

  return <TrxnLists categories={TrxnTypes} />;
}
