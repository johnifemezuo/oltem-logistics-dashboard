import CurrencyFormat from "react-currency-format";
import { RiArrowRightSLine, RiSendPlaneFill } from "react-icons/ri";
import { localDateFormater } from "../../../../base";
import { useTransactionInfoStore } from "../../../../base/hooks/stores/auth/useTransactions";
import { TxnList } from "./styles";
import { ITransaction } from "./transaction.interface";

function TrxnList({ transaction }: { transaction: ITransaction }) {
  const status = transaction.transaction_status_id;

  const { setOpenTxnModal, storetransactionDetails }: any =
    useTransactionInfoStore();

  const previewTransaction = (data: any) => {
    setOpenTxnModal(true);
    storetransactionDetails(data);
  };

  return (
    <TxnList onClick={() => previewTransaction(transaction)}>
      <div className="flex--items space-x-6 ">
        <div
          className={`${
            status === "pending"
              ? "bg-[#F3F5FE]"
              : status === "completed"
              ? "bg-[#E2FFE7]"
              : "bg-[#FFDBDB]"
          } bg-blue-100/70 grid place-content-center rounded-full w-10 h-10`}
        >
          <RiSendPlaneFill
            className={`text-xl text-primary-color ${
              status === "pending"
                ? "text-primary-color"
                : status === "completed"
                ? "text-green-600"
                : "text-red-400"
            } `}
          />
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
                status === "pending"
                  ? "text-primary-color"
                  : status === "completed"
                  ? "text-green-600"
                  : "text-red-400"
              } `}
            >
              {status}
            </li>
          </ul>
        </div>
      </div>

      <h1
        className={`md:text-xl relative space-x-4 flex--items font-medium ${
          status === "pending"
            ? "text-primary-color"
            : status === "completed"
            ? "text-green-600"
            : "text-red-400"
        }`}
      >
        {status === "completed" ? "+" : status === "failed" ? "-" : null}
        <CurrencyFormat
          value={transaction.amount}
          displayType={"text"}
          thousandSeparator={true}
          suffix=".0"
          prefix="$"
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

export default TrxnList;
