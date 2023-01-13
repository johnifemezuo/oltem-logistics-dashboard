import { transactionsData } from "./../../../../base/data/txns";
/* eslint-disable no-console */

const getCompletedTxn: any = (transactions: any) => {
  return transactions?.filter((trxn: any) => trxn.status === "completed");
};

const getPendingTxn: any = (transactions: any) => {
  return transactions?.filter((trxn: any) => trxn.status === "pending");
};

const getFailedTxn: any = (transactions: any) => {
  return transactions?.filter((trxn: any) => trxn.status === "failed");
};

export function useWalletTransactions() {
  //   const {
  //     userObj: { user },
  //   }: any = useUserInfoStore();

  // const { data, status } = useGetTransactions(user.id);
  const data: any[] = [];
  const status: string = "loading";

  // Transaction types

  const completedTransactions = getCompletedTxn(transactionsData);
  const pendingTransactions = getPendingTxn(transactionsData);
  const failedTransactions = getFailedTxn(transactionsData);
  const allTransactions: any = transactionsData;

  return {
    status,
    allTransactions,
    completedTransactions,
    pendingTransactions,
    failedTransactions,
  };
}
