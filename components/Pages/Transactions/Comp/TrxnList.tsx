import CurrencyFormat from "react-currency-format";
import { RiArrowRightLine, RiArrowRightSLine, RiSendPlaneFill } from "react-icons/ri";
import { TxnList } from "./styles";

function TrxnList(data: any) {
  const status = data.data.status;

  return (
    <TxnList>
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
            {data.data.account_name}
          </h3>

          <ul className="mt-2 text-sm flex--items space-x-3 font-normal leading-4 text-gray-500">
            <li>{data.data.date}</li>
            <li className={`${data} bg-zinc-300 w-1.5 h-1.5 rounded-full`}></li>
            <li
              className={`${
                status === "pending"
                  ? "text-yellow-500"
                  : status === "completed"
                  ? "text-green-600"
                  : "text-red-400"
              } `}
            >
              {data.data.status}
            </li>
          </ul>
        </div>
      </div>

      <h1
        className={`md:text-xl relative space-x-4 flex--items font-medium ${
          status === "pending"
            ? "text-yellow-500"
            : status === "completed"
            ? "text-green-600"
            : "text-red-400"
        }`}
      >
        {status === "pending" ? "+" : status === "completed" ? "-" : null}
        <CurrencyFormat
          value={data.data.amount}
          displayType={"text"}
          thousandSeparator={true}
          suffix=".0"
          prefix="$"
        />

        <span className="text-zinc-600 text-3xl cursor-pointer rounded-md transition hover:bg-app-bg  "><RiArrowRightSLine /></span>
      </h1>
    </TxnList>
  );
}

export default TrxnList;
