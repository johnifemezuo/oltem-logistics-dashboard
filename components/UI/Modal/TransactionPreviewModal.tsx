import { useState } from "react";
import { localCurrencyFormater, localDateFormater } from "../../../base";
import { ReviewTxns } from "../../../styles/styles";
import { CustomButton } from "../../Form";
import { ITransaction } from "../../Pages/Transactions";
import ReviewTxn from "../Elements/ReviewtTxn";

export function TransactionPreviewModal({
  transaction,
}: {
  transaction: ITransaction;
}) {
  const [isSuccessfull, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const transactionStatus = transaction.transactionStatus;
  console.log({ transaction });
  const transactionType = transaction?.transactionType;
  return (
    <div>
      <h1 className="text-2xl text-center  font-semibold">
        Pending Transactions
      </h1>

      <div className=" divide-y mt-8">
        <ReviewTxns>
          <ReviewTxn
            detail={localCurrencyFormater(transaction.amount, "NGN")}
            label={
              transactionType.name === "exchange"
                ? "Amount sent"
                : "Amount Received"
            }
            customStyle="text-left"
          />
          {transactionType.name === "exchange" ? (
            <ReviewTxn
              detail={localCurrencyFormater(
                transaction.recipient_amount,
                "USD"
              )}
              label="Amount Recipient Received"
              customStyle="text-right"
            />
          ) : null}
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
            detail={
              transactionType.name === "exchange"
                ? transaction.beneficiary.fullname
                : transaction?.sender_name
            }
            label={
              transactionType.name === "exchange" ? "Beneficiary" : "Sender"
            }
            customStyle="text-left"
          />
        </ReviewTxns>

        <ReviewTxns>
          <ReviewTxn
            detail={
              transactionType.name === "exchange"
                ? transaction?.beneficiary?.country?.name // todo: add beneficiary country
                : "Nigeria"
            }
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
      {transactionType.name === "exchange" ? (
        <>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <CustomButton
              onClick={() => setIsFailed(true)}
              className="text-primary-color  border"
              bg_color="bg-zinc-100 hover:bg-zinc-200/70"
            >
              Treat as Failed
            </CustomButton>

            <CustomButton onClick={() => setIsSuccessful(true)}>
              Treat as Successful
            </CustomButton>
          </div>

          {isSuccessfull ? (
            <div className="mt-12">
              <CustomButton
                onClick={() => setIsSuccessful(false)}
                className="bg-[#E2FFE7] transition hover:bg-[#cff4d5] mx-auto text-success-color "
                bg_color="bg-zinc-100 hover:bg-zinc-200/70"
              >
                Successful
              </CustomButton>
            </div>
          ) : null}

          {isFailed ? (
            <div className="mt-12">
              <CustomButton
                onClick={() => setIsFailed(false)}
                className="bg-[#ffe2e2] transition hover:bg-[#f4cfcf] w-[150px] mx-auto text-danger-color "
                bg_color="bg-zinc-100 hover:bg-zinc-200/70"
              >
                Failed
              </CustomButton>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

