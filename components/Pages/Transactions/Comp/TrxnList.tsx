import CurrencyFormat from "react-currency-format";
import {
  RiArrowLeftDownFill,
  RiArrowRightSLine,
  RiSendPlaneFill,
} from "react-icons/ri";
import { localDateFormater, useTransaction } from "../../../../base";
import { TxnList } from "./styles";
import { ITransaction } from "./transaction.interface";

export function TrxnList({ transaction }: { transaction: ITransaction }) {
  const transactionStatus = transaction.transactionStatus;
  const type = transaction.transactionType;

  const { setOpenTxnModal, storeTransaction } = useTransaction();

  const previewTransaction = (data: any) => {
    setOpenTxnModal(true);
    storeTransaction(data);
  };

  return (
    <TxnList onClick={() => previewTransaction(transaction)}>
      <div className="flex--items space-x-6 ">
        <div
          className={`${
            transactionStatus.name === "pending"
              ? "bg-[#F3F5FE]"
              : transactionStatus.name === "completed"
              ? "bg-[#E2FFE7]"
              : "bg-[#FFDBDB]"
          } bg-blue-100/70 grid place-content-center rounded-full w-10 h-10`}
        >
          {type.name === "exchange" ? (
            <RiSendPlaneFill
              className={`text-xl text-primary-color ${
                transactionStatus.name === "pending"
                  ? "text-primary-color"
                  : transactionStatus.name === "completed"
                  ? "text-green-600"
                  : "text-red-400"
              } `}
            />
          ) : (
            <RiArrowLeftDownFill
              className={`text-xl text-primary-color ${
                transactionStatus.name === "pending"
                  ? "text-primary-color"
                  : transactionStatus.name === "completed"
                  ? "text-green-600"
                  : "text-red-400"
              } `}
            />
          )}
        </div>
        <div>
          <h3 className="text-base text-zinc-700 font-medium  leading-5">
            {transaction.sender_name}
          </h3>

          <ul className="mt-2 text-sm flex--items space-x-3 font-normal leading-4 text-gray-500">
            <li>{localDateFormater(transaction.created_at)}</li>
            <li className={` bg-zinc-300 w-1.5 h-1.5 rounded-full`}></li>
            <li
              className={`${
                transactionStatus.name === "pending"
                  ? "text-primary-color"
                  : transactionStatus.name === "completed"
                  ? "text-green-600"
                  : "text-red-400"
              } `}
            >
              {transactionStatus.name}
            </li>
          </ul>
        </div>
      </div>

      <h1
        className={`md:text-xl relative space-x-4 flex--items font-medium ${
          transactionStatus.name === "pending"
            ? "text-primary-color"
            : transactionStatus.name === "completed"
            ? "text-green-600"
            : "text-red-400"
        }`}
      >
        {transactionStatus.name === "completed"
          ? "+"
          : transactionStatus.name === "failed"
          ? "-"
          : null}
        <CurrencyFormat
          value={transaction.amount}
          displayType={"text"}
          thousandSeparator={true}
          suffix=".0"
          prefix={type.name === "exchange" ? "$" : "₦"}
        />

        <span
          onClick={() => previewTransaction(transaction)}
          className="text-zinc-600 text-3xl "
        >
          <RiArrowRightSLine />
        </span>
      </h1>
    </TxnList>
  );
}

