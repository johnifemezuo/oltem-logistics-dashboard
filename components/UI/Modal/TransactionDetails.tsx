import { ITransaction } from "../../Pages";
import { ExchangeTransactionView } from "./ExchangeTransactionView";
import { WalletTransactionView } from "./WalletTransactionView";

export interface TransactionDetailsProps {
  transaction: ITransaction;
}
export const TransactionDetails = ({
  transaction,
}: TransactionDetailsProps) => {
  const transactionStatus = transaction.transactionStatus;

  const transactionType = transaction?.transactionType;

  return (
    <div>
      <h1 className="text-2xl text-center capitalize  font-semibold">
        {transactionStatus.name} Transactions
      </h1>
      <h1 className="text-sm p-1 m-auto mt-2 bg-blue-200 text-center capitalize text-blue-800 w-3/6 rounded-xl  font-semibold">
        ID: {transaction.trxn_id}
      </h1>

      {transactionType.name === "exchange" ? (
        <ExchangeTransactionView transaction={transaction} />
      ) : (
        <WalletTransactionView transaction={transaction} />
      )}
    </div>
  );
};
