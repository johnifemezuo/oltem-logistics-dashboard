import { localCurrencyFormater, localDateFormater } from "../../../base";
import { ReviewTxns } from "../../../styles/styles";
import ReviewTxn from "../Elements/ReviewtTxn";
import { TransactionDetailsProps } from "./TransactionDetails";

export const WalletTransactionView = ({
  transaction,
}: TransactionDetailsProps) => {
  return (
    <>
      <div className=" divide-y mt-8">
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(transaction.amount, "NGN")}
            label={"Amount Received"}
            customStyle="text-left"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={localDateFormater(transaction.created_at)}
            label="Date"
            customStyle="text-left"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={transaction?.sender_name}
            label={"Sender"}
            customStyle="text-left"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={"Nigeria"}
            label="Country"
            customStyle="text-left"
          />

          <ReviewTxn
            detail={transaction.currency?.name}
            label="Currency"
            customStyle="text-right"
          />
        </ReviewTxns>
      </div>
    </>
  );
};
