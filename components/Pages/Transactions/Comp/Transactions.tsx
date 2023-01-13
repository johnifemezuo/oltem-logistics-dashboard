import TrxnLists from "./TrxnLists";
import React from "react";
import { useWalletTransactions } from "./useWalletTransactions";
import AllTransactions from "./AllTransactions";

export default function Transactions() {
  const {
    allTransactions,
    status,
    completedTransactions,
    failedTransactions,
    pendingTransactions,
  } = useWalletTransactions();

  const TrxnTypes = {
    "All Transactions": <AllTransactions transactions={allTransactions} status={status} />,
    Pending: <AllTransactions transactions={pendingTransactions} status={status} />,
    Successful: <AllTransactions transactions={completedTransactions} status={status} />,
    Failed: <AllTransactions transactions={failedTransactions} status={status} />,
  };

  return <TrxnLists categories={TrxnTypes} />;
}
